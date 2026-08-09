/* ============================================================
 *  labs.js — מעבדות אינטראקטיביות.
 *  משנים פרמטר → כל הגדלים והגרפים מתעדכנים מיד.
 *  מטרה: לפתח אינטואיציה למצבי עבודה ולסדרי גודל לפני המבחן.
 *  משתמש במנוע ההנפשה (viz.js, type:"plot") לציור.
 * ============================================================ */
(function () {
  "use strict";

  var host = document.getElementById("labs");
  if (!host) return;

  /* --- קבועים (יחידות CGS כמו בקורס) --- */
  var q = 1.6e-19;            /* C */
  var e0 = 8.85e-14;          /* F/cm */
  var kT = 0.0259;            /* V, בטמפרטורת החדר */
  var ni = 1.5e10;            /* cm^-3, סיליקון */
  var eS = 11.8, eOx = 3.9;

  function fmt(v, unit) {
    if (!isFinite(v)) return "—";
    var a = Math.abs(v), s;
    if (a === 0) s = "0";
    else if (a >= 1e4 || a < 1e-2) {
      var ex = Math.floor(Math.log10(a));
      var mant = v / Math.pow(10, ex);
      s = mant.toFixed(2) + "·10" + sup(ex);
    } else s = v.toFixed(a < 1 ? 3 : 2);
    return s + (unit ? " " + unit : "");
  }
  function sup(n) {
    var map = { "-": "⁻", 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴",
                5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
    return String(n).split("").map(function (c) { return map[c] || c; }).join("");
  }

  /* ============================================================
   *  מעבדה 1 — קבל MOS (מצע p)
   * ============================================================ */
  var mos = { logNa: 15, dox: 100, vg: 0.5 };   /* dox ב-nm */

  function mosCalc(s) {
    var Na = Math.pow(10, s.logNa);
    var dox = s.dox * 1e-7;                      /* nm → cm */
    var Cox = eOx * e0 / dox;                    /* F/cm² */
    var phiF = kT * Math.log(Na / ni);
    var A = Math.sqrt(2 * q * eS * e0 * Na) / Cox;

    /* פתרון φ_s ממאזן המתחים V_g = φ_s + √(2qε_sε₀N_aφ_s)/C_ox */
    var phiS;
    if (s.vg <= 0) phiS = s.vg;                  /* אגירה — הפסים כפופים הפוך */
    else {
      var u = (-A + Math.sqrt(A * A + 4 * s.vg)) / 2;
      phiS = u * u;
    }
    var inv = phiS >= 2 * phiF;
    var phiSeff = inv ? 2 * phiF : phiS;         /* מעל הסף φ_s ננעל על 2φ_F */

    var w = phiSeff > 0 ? Math.sqrt(2 * eS * e0 * phiSeff / (q * Na)) : 0;
    var wT = Math.sqrt(2 * eS * e0 * (2 * phiF) / (q * Na));
    var VT = 2 * phiF + Math.sqrt(2 * q * eS * e0 * Na * 2 * phiF) / Cox;

    var C;
    if (phiS <= 0) C = Cox;                      /* אגירה */
    else {
      var Cs = eS * e0 / (inv ? wT : w);
      C = Cox * Cs / (Cox + Cs);
    }
    var Cmin = (function () {
      var Cs = eS * e0 / wT; return Cox * Cs / (Cox + Cs);
    })();

    var regime, rc;
    if (phiS <= 0) { regime = "אגירה (accumulation)"; rc = "info"; }
    else if (phiS < phiF) { regime = "מחסור (depletion)"; rc = "hot"; }
    else if (phiS < 2 * phiF) { regime = "אינברסיה חלשה"; rc = "hot"; }
    else if (Math.abs(s.vg - VT) < 0.02) { regime = "בדיוק על סף אינברסיה חזקה (V_g=V_T)"; rc = "good"; }
    else { regime = "אינברסיה חזקה (strong inversion)"; rc = "good"; }

    /* ריכוזים בשפה */
    var ns = ni * Math.exp((phiSeff - phiF) / kT);
    var ps = ni * Math.exp((phiF - phiSeff) / kT);

    return { Na: Na, dox: dox, Cox: Cox, phiF: phiF, phiS: phiS, phiSeff: phiSeff,
             w: w, wT: wT, VT: VT, C: C, Cmin: Cmin, regime: regime, rc: rc,
             ns: ns, ps: ps, inv: inv };
  }

  /* עקומת C-V בתדר גבוה עבור הפרמטרים הנוכחיים */
  function mosCV(s, r) {
    var pts = [], vg;
    for (vg = -1.5; vg <= 3.0001; vg += 0.05) {
      var t = mosCalc({ logNa: s.logNa, dox: s.dox, vg: vg });
      pts.push([vg, t.C / r.Cox]);              /* מנורמל ל-C_ox */
    }
    return pts;
  }

  /* דיאגרמת פסים סכמטית: E_c, E_i, E_F, E_v כפונקציה של x */
  function mosBands(r) {
    var wcm = r.w > 0 ? r.w : r.wT * 0.15;
    var xmax = Math.max(wcm * 1.7, 1e-5);
    var N = 40, i, x, bend, band = { c: [], i: [], v: [], f: [] };
    var Eg = 1.12;
    for (i = 0; i <= N; i++) {
      x = xmax * i / N;
      /* כיפוף פרבולי בתוך אזור המחסור, שטוח מחוצה לו */
      bend = x < wcm && wcm > 0
        ? r.phiSeff * Math.pow(1 - x / wcm, 2)
        : 0;
      band.i.push([x * 1e5, -bend]);
      band.c.push([x * 1e5, -bend + (Eg / 2 - r.phiF)]);
      band.v.push([x * 1e5, -bend - (Eg / 2 + r.phiF)]);
      band.f.push([x * 1e5, -r.phiF]);
    }
    return band;
  }

  function mosHTML() {
    var r = mosCalc(mos);
    var cv = mosCV(mos, r);
    var b = mosBands(r);

    var bandsViz = window.renderViz({
      type: "plot", w: 430, h: 210,
      xLabel: "x (10⁻⁵cm) — מהמבודד לעומק", yLabel: "E (eV)",
      series: [
        { points: b.c, color: "accent" },
        { points: b.i, color: "hot", dash: true },
        { points: b.f, color: "bad", dash: true },
        { points: b.v, color: "accent" }
      ],
      vlines: r.w > 0 ? [{ x: r.w * 1e5, label: "w" }] : [],
      caption: "ירוק = E_c ,E_v · כתום מקווקו = E_i · אדום מקווקו = E_F"
    });

    var cvViz = window.renderViz({
      type: "plot", w: 430, h: 190,
      xLabel: "V_g (V)", yLabel: "C / C_ox",
      xmin: -1.5, xmax: 3, ymin: 0, ymax: 1.05,
      series: [{ points: cv, color: "info" }],
      vlines: [{ x: mos.vg, label: "עכשיו" }, { x: r.VT, label: "V_T" }],
      hlines: [{ y: r.Cmin / r.Cox, label: "C_min" }],
      caption: "עקומת C-V בתדר גבוה, מנורמלת ל-C_ox"
    });

    return '' +
    '<div class="lab-panel"><h3>🔬 קבל MOS על מצע p — משחק חופשי</h3>' +
    '<p style="margin:0 0 10px;color:var(--fg2);font-size:14px">' +
    'הזיזו את מתח השער וראו איך הקבל עובר בין ארבעת מצבי העבודה. ' +
    'שימו לב מתי <span dir="ltr">φ<sub>s</sub></span> נתקע על <span dir="ltr">2φ<sub>F</sub></span> ומפסיק לגדול — זה בדיוק סף האינברסיה החזקה.</p>' +

    '<div class="lab-controls">' +
      '<label class="lab-lbl">N<sub>a</sub> = 10<sup id="mosNaOut">' + mos.logNa + '</sup> cm⁻³' +
      '<input class="lab-slider" type="range" min="14" max="18" step="0.1" value="' + mos.logNa + '" data-mos="logNa"></label>' +
      '<div class="lab-sep"></div>' +
      '<label class="lab-lbl">d<sub>ox</sub> = <span id="mosDoxOut">' + mos.dox + '</span> nm' +
      '<input class="lab-slider" type="range" min="5" max="300" step="1" value="' + mos.dox + '" data-mos="dox"></label>' +
      '<div class="lab-sep"></div>' +
      '<label class="lab-lbl">V<sub>g</sub> = <span id="mosVgOut">' + mos.vg.toFixed(2) + '</span> V' +
      '<input class="lab-slider" type="range" min="-1.5" max="3" step="0.01" value="' + mos.vg + '" data-mos="vg"></label>' +
    '</div>' +

    '<div class="lab-msg" style="border-inline-start-color:var(--' + (r.rc === "good" ? "accent" : r.rc === "hot" ? "amber" : "blue") + ')">' +
      '<b>מצב עבודה: ' + r.regime + '</b>' +
      (r.inv ? '<br><span style="font-size:13.5px">מעל הסף <span dir="ltr">φ<sub>s</sub></span> ' +
        '<b>ננעל</b> על <span dir="ltr">2φ<sub>F</sub></span> וגם <span dir="ltr">w</span> ננעל על ' +
        '<span dir="ltr">w<sub>T</sub></span> — כל מטען נוסף על השער הולך לשכבת ההיפוך, ' +
        'ולכן <span dir="ltr">C</span> נשאר <span dir="ltr">C<sub>min</sub></span> בתדר גבוה.</span>' : '') +
      (r.phiS <= 0 ? '<br><span style="font-size:13.5px">באגירה אין אזור מחסור כלל ' +
        '(<span dir="ltr">w=0</span>), ולכן <span dir="ltr">C=C<sub>ox</sub></span> — הערך המקסימלי.</span>' : '') +
    '</div>' +

    '<div class="quiz-stats" style="grid-template-columns:repeat(auto-fit,minmax(105px,1fr));margin:12px 0">' +
      stat("φ_F", fmt(r.phiF, "V")) +
      /* מציגים את φ_s האמיתי — מעל הסף הוא ננעל על 2φ_F ולא ממשיך לגדול */
      stat("φ_s", fmt(r.phiSeff, "V") + (r.inv ? " (=2φ_F)" : "")) +
      stat("V_T", fmt(r.VT, "V")) +
      stat("w", fmt(r.w, "cm")) +
      stat("w_T", fmt(r.wT, "cm")) +
      stat("C_ox", fmt(r.Cox * 1e9, "nF/cm²")) +
      stat("C", fmt(r.C * 1e9, "nF/cm²")) +
      stat("n_s", fmt(r.ns, "cm⁻³")) +
    '</div>' +

    '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">' +
      '<div class="lab-stage" style="flex-direction:column">' + bandsViz + '</div>' +
      '<div class="lab-stage" style="flex-direction:column">' + cvViz + '</div>' +
    '</div>' +

    '<div class="lab-rule">' +
      '<b>נסו את זה:</b> העלו את <span dir="ltr">N<sub>a</sub></span> — שימו לב ש-<span dir="ltr">V<sub>T</sub></span> ' +
      'עולה ו-<span dir="ltr">w<sub>T</sub></span> קטן. ואז הקטינו את <span dir="ltr">d<sub>ox</sub></span> — ' +
      '<span dir="ltr">C<sub>ox</sub></span> עולה, <span dir="ltr">V<sub>T</sub></span> יורד, אבל ' +
      '<span dir="ltr">w<sub>T</sub></span> <b>לא זז בכלל</b> (הוא תלוי רק בסיליקון) — בדיוק הטיעון שחוזר בשאלות ה-C-V.' +
    '</div>' +
    '</div>';
  }

  function stat(k, v) {
    return '<div class="quiz-stat"><b style="font-size:15px">' + v +
      '</b><span dir="ltr">' + k + '</span></div>';
  }

  /* ============================================================
   *  מעבדה 2 — צומת PN
   * ============================================================ */
  var pn = { logNa: 17, logNd: 16, va: 0 };

  function pnCalc(s) {
    var Na = Math.pow(10, s.logNa), Nd = Math.pow(10, s.logNd);
    var V0 = kT * Math.log(Na * Nd / (ni * ni));
    var Vtot = V0 - s.va;                       /* קדמי חיובי מקטין */
    if (Vtot < 0.01) Vtot = 0.01;
    var W = Math.sqrt(2 * eS * e0 * Vtot / q * (1 / Na + 1 / Nd));
    var xn = W * Na / (Na + Nd), xp = W * Nd / (Na + Nd);
    var Emax = 2 * Vtot / W;
    return { Na: Na, Nd: Nd, V0: V0, Vtot: Vtot, W: W, xn: xn, xp: xp, Emax: Emax };
  }

  function pnHTML() {
    var r = pnCalc(pn);
    var xpN = -r.xp * 1e4, xnN = r.xn * 1e4;    /* cm → μm */

    var rho = window.renderViz({
      type: "plot", w: 430, h: 180,
      xLabel: "x (μm)", yLabel: "ρ(x)",
      series: [{ points: [
        [xpN * 1.6, 0], [xpN, 0], [xpN, -r.Na], [0, -r.Na],
        [0, r.Nd], [xnN, r.Nd], [xnN, 0], [xnN * 1.6, 0]
      ], color: "hot" }],
      vlines: [{ x: 0, label: "" }],
      caption: "צפיפות מטען — השטחים משני הצדדים שווים תמיד"
    });

    var fld = window.renderViz({
      type: "plot", w: 430, h: 180,
      xLabel: "x (μm)", yLabel: "E(x) (V/cm)",
      series: [{ points: [
        [xpN * 1.6, 0], [xpN, 0], [0, -r.Emax], [xnN, 0], [xnN * 1.6, 0]
      ], color: "info", area: true }],
      caption: "השדה — משולש; השטח מתחתיו = המתח הכולל על הצומת"
    });

    return '' +
    '<div class="lab-panel"><h3>🔬 צומת PN — משחק חופשי</h3>' +
    '<p style="margin:0 0 10px;color:var(--fg2);font-size:14px">' +
    'שנו את האילוחים ואת הממתח וראו איך אזור המחסור והשדה מגיבים. ' +
    'שימו לב: <b>הצד המאולח פחות תמיד מקבל את אזור המחסור הרחב יותר</b>.</p>' +

    '<div class="lab-controls">' +
      '<label class="lab-lbl">N<sub>a</sub> = 10<sup>' + pn.logNa.toFixed(1) + '</sup> cm⁻³' +
      '<input class="lab-slider" type="range" min="14" max="19" step="0.1" value="' + pn.logNa + '" data-pn="logNa"></label>' +
      '<div class="lab-sep"></div>' +
      '<label class="lab-lbl">N<sub>d</sub> = 10<sup>' + pn.logNd.toFixed(1) + '</sup> cm⁻³' +
      '<input class="lab-slider" type="range" min="14" max="19" step="0.1" value="' + pn.logNd + '" data-pn="logNd"></label>' +
      '<div class="lab-sep"></div>' +
      '<label class="lab-lbl">ממתח: <span>' + pn.va.toFixed(2) + ' V</span> ' +
      '<small style="color:var(--fg3)">(חיובי=קדמי)</small>' +
      '<input class="lab-slider" type="range" min="-3" max="0.6" step="0.02" value="' + pn.va + '" data-pn="va"></label>' +
    '</div>' +

    '<div class="quiz-stats" style="grid-template-columns:repeat(auto-fit,minmax(105px,1fr));margin:12px 0">' +
      stat("V_0", fmt(r.V0, "V")) +
      stat("V_0−V_a", fmt(r.Vtot, "V")) +
      stat("W", fmt(r.W, "cm")) +
      stat("x_n0", fmt(r.xn, "cm")) +
      stat("x_p0", fmt(r.xp, "cm")) +
      stat("E_max", fmt(r.Emax, "V/cm")) +
    '</div>' +

    '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">' +
      '<div class="lab-stage" style="flex-direction:column">' + rho + '</div>' +
      '<div class="lab-stage" style="flex-direction:column">' + fld + '</div>' +
    '</div>' +

    '<div class="lab-rule">' +
      '<b>נסו את זה:</b> הפכו את הצומת לחד-צדדי (<span dir="ltr">N<sub>a</sub>=10<sup>19</sup></span> מול ' +
      '<span dir="ltr">N<sub>d</sub>=10<sup>14</sup></span>) — כמעט כל אזור המחסור נופל בצד ה-n, ואפשר להזניח את ' +
      '<span dir="ltr">x<sub>p0</sub></span> לגמרי. זה הקירוב החד-צדדי שמופיע בהרבה שאלות.' +
    '</div>' +
    '</div>';
  }

  /* ============================================================
   *  ניהול תצוגה
   * ============================================================ */
  var current = "mos";

  function paint() {
    host.innerHTML =
      '<div class="lab-tabs">' +
        '<button class="quiz-btn' + (current === "mos" ? " primary on" : "") + '" data-lab="mos">קבל MOS</button>' +
        '<button class="quiz-btn' + (current === "pn" ? " primary on" : "") + '" data-lab="pn">צומת PN</button>' +
      '</div>' +
      (current === "mos" ? mosHTML() : pnHTML());
  }

  host.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lab]");
    if (!b) return;
    current = b.getAttribute("data-lab");
    paint();
  });

  host.addEventListener("input", function (e) {
    var el = e.target;
    if (el.dataset.mos) {
      mos[el.dataset.mos] = parseFloat(el.value);
      paint();
      var live = host.querySelector('[data-mos="' + el.dataset.mos + '"]');
      if (live) live.focus();
    } else if (el.dataset.pn) {
      pn[el.dataset.pn] = parseFloat(el.value);
      paint();
      var live2 = host.querySelector('[data-pn="' + el.dataset.pn + '"]');
      if (live2) live2.focus();
    }
  });

  window.showLabs = function (on) {
    host.style.display = on ? "" : "none";
    if (on && !host.innerHTML.trim()) paint();
    else if (on) paint();
  };
})();
