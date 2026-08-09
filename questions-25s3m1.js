/* ============================================================
 *  questions-25s3m1.js — מבחן 2025 · סמסטר ג׳ · מועד א׳ (25s3m1)
 *  מקור: course20132-year2025-semester3-moed1.pdf
 *
 *  הערה חשובה: קובץ המקור של מועד זה מכיל אך ורק "שאלון X" (3 שאלות)
 *  ו"פתרון X" — אין בו "שאלון Y" מקביל. לכן קובץ זה מכיל רק את
 *  שלוש שאלות הטופס X (Xq1–Xq3). לא הומצא תוכן לטופס Y.
 * ============================================================ */

window.BANK_OPEN_QUESTIONS = window.BANK_OPEN_QUESTIONS || [];
window.BANK_OPEN_QUESTIONS.push(

  /* ============================================================
   * Xq1 — סגסוגת Ga_xIn_1-xAs על מצע InP
   * ============================================================ */
  {
    id: "25s3m1-Xq1",
    cat: "sc-transport",
    difficulty: 4,
    skills: ["התאמת סריג", "ריכוזי נשאים", "אילוח מבוקר"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2025 · סמסטר ג׳ · מועד א׳ · טופס X",
    kind: "open",
    qtype: "analysis",

    prompt:
      'נתונה סגסוגת <span dir="ltr">Ga<sub>x</sub>In<sub>1-x</sub>As</span>, בטמפרטורת החדר ' +
      '(<span dir="ltr">k<sub>B</sub>T = 0.026 eV</span>), אשר גודלה על מצע של <span dir="ltr">InP</span>. ' +
      'מהגרף (פער אנרגיה כתלות בקבוע הסריג) ידועים: ' +
      '<span dir="ltr">a(GaAs) = 5.65 Å, E<sub>g</sub>(GaAs) = 1.42 eV</span>; ' +
      '<span dir="ltr">a(InAs) = 6.06 Å, E<sub>g</sub>(InAs) = 0.35 eV</span>; ' +
      '<span dir="ltr">a(InP) = 5.87 Å</span>.<br><br>' +
      '<b>א. (8 נק׳)</b> 1. מהו הריכוז <span dir="ltr">x</span> של הסגסוגת (בהתאם להתאמת הסריג למצע)? ' +
      '2. מהו בקירוב פער האנרגיה של הסגסוגת (ניתן להשתמש בהערכה זו להמשך החישובים)?<br><br>' +
      'נתון כי ל־<span dir="ltr">InAs</span> טהור <span dir="ltr">n<sub>i</sub> = 10<sup>13</sup> cm⁻³</span>, כי הסגסוגת מאולחת ' +
      'בבריליום (<span dir="ltr">Be</span>, מקבל) בריכוז <span dir="ltr">N<sub>Be</sub> = 10<sup>14</sup> cm⁻³</span>, ' +
      'וכי ההפרש בין מרכז הפס לרמת פרמי בסגסוגת המאולחת הוא <span dir="ltr">|E<sub>i</sub> − E<sub>F</sub>| = 0.13 eV</span>.<br><br>' +
      '<b>ב. (8 נק׳)</b> 1. הסבירו ללא חישוב האם האילוח משמעותי או לא. ' +
      '2. חשבו את ריכוז החורים <span dir="ltr">p₀</span>, האלקטרונים <span dir="ltr">n₀</span>, ' +
      'ואת הריכוז האינטרינזי <span dir="ltr">n<sub>i</sub></span> — של הסגסוגת (לא של InAs).<br><br>' +
      '<b>ג. (8 נק׳)</b> כמה אטומים של <span dir="ltr">As</span>, כמה של <span dir="ltr">In</span>, כמה של <span dir="ltr">Ga</span> ' +
      'וכמה של <span dir="ltr">Be</span> יש בכל יחידת נפח?<br><br>' +
      '<b>ד. (9 נק׳)</b> מהי צפיפות המצבים האפקטיבית <span dir="ltr">N<sub>C</sub></span> בפס ההולכה, ' +
      'ומהו הסיכוי לאכלוס אלקטרון בתחתית פס ההולכה בסגסוגת המאולחת?',

    hint:
      'התאמת סריג פירושה שקבוע הסריג של הסגסוגת (ממוצע משוקלל ב-<span dir="ltr">x</span> בין הבינאריים) ' +
      'שווה לקבוע הסריג של המצע. לחישוב ההסתברות בסעיף ד השתמשו ב-<span dir="ltr">E_C − E_F = E_g/2 + (E_i − E_F)</span>.',

    html:
      '<table><thead><tr><th>גודל</th><th>ערך</th></tr></thead><tbody>' +
      '<tr><td>קבוע סריג <span dir="ltr">GaAs</span></td><td><span dir="ltr">5.65 Å</span></td></tr>' +
      '<tr><td>קבוע סריג <span dir="ltr">InAs</span></td><td><span dir="ltr">6.06 Å</span></td></tr>' +
      '<tr><td>קבוע סריג <span dir="ltr">InP</span> (מצע)</td><td><span dir="ltr">5.87 Å</span></td></tr>' +
      '<tr><td>פער אנרגיה <span dir="ltr">GaAs</span></td><td><span dir="ltr">1.42 eV</span></td></tr>' +
      '<tr><td>פער אנרגיה <span dir="ltr">InAs</span></td><td><span dir="ltr">0.35 eV</span></td></tr>' +
      '<tr><td><span dir="ltr">n<sub>i</sub>(InAs)</span></td><td><span dir="ltr">10<sup>13</sup> cm⁻³</span></td></tr>' +
      '<tr><td>אילוח <span dir="ltr">Be</span> (מקבל)</td><td><span dir="ltr">10<sup>14</sup> cm⁻³</span></td></tr>' +
      '<tr><td><span dir="ltr">|E<sub>i</sub> − E<sub>F</sub>|</span></td><td><span dir="ltr">0.13 eV</span></td></tr>' +
      '</tbody></table>' +
      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>א. ריכוז x ופער האנרגיה</h4>' +
      '<p>גידול על מצע <span dir="ltr">InP</span> ללא מתח (strain) מחייב התאמת קבוע סריג — ממוצע משוקלל של שני הבינאריים ' +
      'שווה לקבוע הסריג של המצע:</p>' +
      '<div class="solution-equation" dir="ltr">x·a(GaAs) + (1−x)·a(InAs) = a(InP)</div>' +
      '<div class="solution-equation" dir="ltr">x·5.65 + (1−x)·6.06 = 5.87 &nbsp;→&nbsp; x = 0.19/0.41 ≈ 0.46</div>' +
      '<p>מהגרף (עבור נקודה זו על העקומה בין <span dir="ltr">GaAs</span> ל-<span dir="ltr">InAs</span>, בקבוע סריג ' +
      '<span dir="ltr">5.87 Å</span>) פער האנרגיה נקרא בקירוב <span dir="ltr">E<sub>g</sub> ≈ 0.75 eV</span> ' +
      '(סגסוגת זו קרובה ל-<span dir="ltr">In₀.₅₃Ga₀.₄₇As</span> — חומר מוכר להתקני 1.55μm בעל פער אנרגיה ידוע של כ-0.75eV, מה שמאמת את קריאת הגרף).</p>' +

      '<h4>ב.1 — האם האילוח משמעותי?</h4>' +
      '<p>האילוח (<span dir="ltr">10<sup>14</sup> cm⁻³</span>) גדול פי 10 מ-<span dir="ltr">n<sub>i</sub></span> של InAs טהור, ' +
      'אך לסגסוגת פער אנרגיה גדול משמעותית מזה של InAs (כ-<span dir="ltr">0.75eV</span> לעומת <span dir="ltr">0.35eV</span> — ' +
      'פי כ-2). מכיוון ש-<span dir="ltr">n<sub>i</sub> ∝ exp(−E<sub>g</sub>/2k<sub>B</sub>T)</span>, הבדל אקספוננציאלי כזה בפער האנרגיה ' +
      'גורם ל-<span dir="ltr">n<sub>i</sub></span> של הסגסוגת להיות קטן בהרבה (סדרי גודל) מזה של InAs, ' +
      'ולכן קטן בהרבה גם מריכוז האילוח. <b>המסקנה: האילוח משמעותי.</b></p>' +

      '<h4>ב.2 — חישוב p₀, n₀, n_i של הסגסוגת</h4>' +
      '<p>מאחר והאילוח משמעותי ומדובר במקבלים: <span dir="ltr">p₀ = N_Be = 10¹⁴ cm⁻³</span>.</p>' +
      '<p>משתמשים בקשר <span dir="ltr">p₀ = n_i·exp[(E_i−E_F)/k_BT]</span> (מקבל: <span dir="ltr">E_i &gt; E_F</span>):</p>' +
      '<div class="solution-equation" dir="ltr">n_i = p₀·exp[−(E_i−E_F)/k_BT] = 10¹⁴·exp(−0.13/0.026) = 10¹⁴·e⁻⁵ ≈ 6.74·10¹¹ cm⁻³</div>' +
      '<div class="solution-equation" dir="ltr">n₀ = n_i² / p₀ = (6.74·10¹¹)² / 10¹⁴ ≈ 4.54·10⁹ cm⁻³</div>' +
      '<p>אכן <span dir="ltr">n_i(alloy) ≈ 6.74·10¹¹ ≪ N_Be = 10¹⁴</span> — מאשר את המסקנה האיכותית בסעיף ב.1.</p>' +

      '<h4>ג. ריכוזי אטומים ביחידת נפח</h4>' +
      '<p>המבנה הוא זינק-בלנד עם קבוע סריג <span dir="ltr">a = 5.87 Å = 5.87·10⁻⁸ cm</span> (המצע, כי הסגסוגת מותאמת אליו):</p>' +
      '<div class="solution-equation" dir="ltr">N_uc = 1/a³ = 1/(5.87·10⁻⁸)³ ≈ 4.94·10²¹ cm⁻³</div>' +
      '<p>בכל תא יחידה של זינק-בלנד יש 8 אטומים: 4 מקבוצה V (As) ו-4 מקבוצה III (Ga+In):</p>' +
      '<div class="solution-equation" dir="ltr">N_As = 4·N_uc ≈ 1.98·10²² cm⁻³</div>' +
      '<div class="solution-equation" dir="ltr">N_Ga = x·N_As = 0.46·1.98·10²² ≈ 9.1·10²¹ cm⁻³</div>' +
      '<div class="solution-equation" dir="ltr">N_In = (1−x)·N_As = 0.54·1.98·10²² ≈ 1.07·10²² cm⁻³</div>' +
      '<div class="solution-equation" dir="ltr">N_Be = 10¹⁴ cm⁻³ (ריכוז האילוח הנתון ישירות)</div>' +

      '<h4>ד. צפיפות מצבים אפקטיבית N_C והסתברות אכלוס</h4>' +
      '<p>לפי מודל בולצמן:</p>' +
      '<div class="solution-equation" dir="ltr">f(E_C) = exp[−(E_C−E_F)/k_BT],&nbsp; E_C−E_F = E_g/2 + (E_i−E_F) = 0.375 + 0.13 = 0.505 eV</div>' +
      '<div class="solution-equation" dir="ltr">f(E_C) = exp(−0.505/0.026) ≈ 3.67·10⁻⁹</div>' +
      '<p>זו ההסתברות לאכלוס אלקטרון בתחתית פס ההולכה. מתוך <span dir="ltr">n₀ = N_C·f(E_C)</span>:</p>' +
      '<div class="solution-equation" dir="ltr">N_C = n₀ / f(E_C) = 4.54·10⁹ / 3.67·10⁻⁹ ≈ 1.24·10¹⁸ cm⁻³</div>' +

      '</div></details>'
  },

  /* ============================================================
   * Xq2 — צומת PN בממתח אחורי
   * ============================================================ */
  {
    id: "25s3m1-Xq2",
    cat: "pn-diode",
    difficulty: 4,
    skills: ["צומת PN", "אזור מחסור", "זרם רוויה"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2025 · סמסטר ג׳ · מועד א׳ · טופס X",
    kind: "open",
    qtype: "analysis",

    prompt:
      'נתון פרופיל של צומת <span dir="ltr">PN</span> עשוי צורן בטמפרטורת החדר, ומתחתיו גרף המתאר את צפיפות ' +
      'נושאי מטען המיעוט (הערכים האסימפטוטיים הרחק מאזור המחסור): בצד ה-<span dir="ltr">p</span> ריכוז האלקטרונים ' +
      '<span dir="ltr">n_p = 2·10⁶ cm⁻³</span>, ובצד ה-<span dir="ltr">n</span> ריכוז החורים ' +
      '<span dir="ltr">p_n = 1·10⁵ cm⁻³</span>. הגרפים דועכים לכיוון אפס ככל שמתקרבים לאזור המחסור. ' +
      'רוחב אזור המחסור בצד ה-<span dir="ltr">p</span> נתון: <span dir="ltr">x_p = 5·10⁻⁴ cm</span>.<br><br>' +
      '<b>א. (4 נק׳)</b> האם הצומת בממתח קדמי או אחורי?<br>' +
      '<b>ב. (8 נק׳)</b> חשבו את ריכוזי האילוח משני צידי הצומת.<br>' +
      '<b>ג. (7 נק׳)</b> חשבו את המתח החיצוני המופעל על הצומת.<br>' +
      '<b>ד. (7 נק׳)</b> חשבו את הזרם בצומת.<br>' +
      '<b>ה. (7 נק׳)</b> באזור המחסור, רוב הזרם שחושב בסעיף הקודם הוא זרם סחיפה של חורים / דיפוזיה של חורים / ' +
      'סחיפה של אלקטרונים / דיפוזיה של אלקטרונים? נמקו בקצרה.',

    hint:
      'ריכוז נושא המיעוט הנצפה הרחק מהמחסור הוא ריכוז שיווי-המשקל, כך ש-<span dir="ltr">N = n_i²/(ריכוז המיעוט)</span> ' +
      'בכל צד. לחישוב הזרם השתמשו ב-<span dir="ltr">L = √(Dτ)</span>.',

    html:
      '<table><thead><tr><th>גודל</th><th>ערך</th></tr></thead><tbody>' +
      '<tr><td><span dir="ltr">n_i</span></td><td><span dir="ltr">10¹⁰ cm⁻³</span></td></tr>' +
      '<tr><td><span dir="ltr">ε₀</span></td><td><span dir="ltr">8.85·10⁻¹⁴ F/cm</span></td></tr>' +
      '<tr><td><span dir="ltr">ε_Si</span></td><td><span dir="ltr">11.3</span></td></tr>' +
      '<tr><td><span dir="ltr">D_n</span></td><td><span dir="ltr">36 cm²/s</span></td></tr>' +
      '<tr><td><span dir="ltr">D_p</span></td><td><span dir="ltr">12 cm²/s</span></td></tr>' +
      '<tr><td><span dir="ltr">τ_n = τ_p</span></td><td><span dir="ltr">10⁻⁴ s</span></td></tr>' +
      '<tr><td><span dir="ltr">A</span></td><td><span dir="ltr">10⁻² cm²</span></td></tr>' +
      '<tr><td><span dir="ltr">x_p</span></td><td><span dir="ltr">5·10⁻⁴ cm</span></td></tr>' +
      '<tr><td><span dir="ltr">n_p (בתפזורת, צד p)</span></td><td><span dir="ltr">2·10⁶ cm⁻³</span></td></tr>' +
      '<tr><td><span dir="ltr">p_n (בתפזורת, צד n)</span></td><td><span dir="ltr">1·10⁵ cm⁻³</span></td></tr>' +
      '</tbody></table>' +
      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>א. כיוון ההטיה</h4>' +
      '<p>ריכוז נושאי המטען המיעוט צונח כמעט לאפס ליד אזור המחסור עצמו — מאפיין של <b>ריקון</b> נושאי מיעוט ' +
      'סמוך לצומת, שקורה בממתח אחורי (בממתח קדמי היינו מצפים לריכוז מוגבר/הזרקה ליד הצומת, לא ריקון). ' +
      '<b>מסקנה: ממתח אחורי.</b></p>' +

      '<h4>ב. ריכוזי האילוח</h4>' +
      '<p>הערכים בגרף הם ריכוזי שיווי-משקל של נושאי המיעוט בתפזורת (הרחק מהצומת), ולכן:</p>' +
      '<div class="solution-equation" dir="ltr">N_d = n_i² / p_n = (10¹⁰)² / 10⁵ = 10¹⁵ cm⁻³</div>' +
      '<div class="solution-equation" dir="ltr">N_a = n_i² / n_p = (10¹⁰)² / (2·10⁶) = 5·10¹³ cm⁻³</div>' +
      '<p>קיבלנו <span dir="ltr">N_d &gt; N_a</span>, בהתאמה לכך שרוחב המחסור בצד הקל-אילוח (p) גדול יותר ' +
      '(<span dir="ltr">x_p &gt; x_n</span>) — עקביות פנימית.</p>' +

      '<h4>ג. המתח החיצוני</h4>' +
      '<p>פוטנציאל המגע:</p>' +
      '<div class="solution-equation" dir="ltr">V₀ = (k_BT/q)·ln(N_d·N_a/n_i²) = 0.026·ln(5·10²⁸/10²⁰) ≈ 0.52 V</div>' +
      '<p>רוחב אזור המחסור הכולל, מתוך <span dir="ltr">x_p·N_a = x_n·N_d</span>:</p>' +
      '<div class="solution-equation" dir="ltr">x_n = x_p·(N_a/N_d) = 5·10⁻⁴·0.05 = 2.5·10⁻⁵ cm</div>' +
      '<div class="solution-equation" dir="ltr">W = x_p + x_n = 5.25·10⁻⁴ cm</div>' +
      '<p>מנוסחת רוחב אזור המחסור פותרים עבור המתח הכולל (מגע + חיצוני):</p>' +
      '<div class="solution-equation" dir="ltr">W = √[2ε₀ε_r·V_tot·(N_d+N_a) / (q·N_d·N_a)] &nbsp;→&nbsp; V_tot = q·N_d·N_a·W² / [2ε₀ε_r(N_d+N_a)]</div>' +
      '<div class="solution-equation" dir="ltr">V_tot ≈ 1.05 V</div>' +
      '<div class="solution-equation" dir="ltr">V_ext = V_tot − V₀ ≈ 1.05 − 0.52 = 0.53 V (הטיה אחורית, כצפוי מסעיף א)</div>' +

      '<h4>ד. הזרם בצומת</h4>' +
      '<p>בממתח אחורי (משמעותי) הזרם הוא זרם רוויה שלילי:</p>' +
      '<div class="solution-equation" dir="ltr">I = −I₀ = −qA·[√(D_p/τ_p)·p_n + √(D_n/τ_n)·n_p]</div>' +
      '<p>מציבים: <span dir="ltr">√(D_p/τ_p) = √(12/10⁻⁴) ≈ 346.4 cm/s</span>, ' +
      '<span dir="ltr">√(D_n/τ_n) = √(36/10⁻⁴) = 600 cm/s</span>:</p>' +
      '<div class="solution-equation" dir="ltr">I₀ = 1.602·10⁻¹⁹·10⁻²·[346.4·10⁵ + 600·2·10⁶] = 1.602·10⁻²¹·1.2346·10⁹</div>' +
      '<!-- verified: official solution had I₀ = 1.12·10⁻¹² A, correct is I₀ ≈ 1.98·10⁻¹² A (arithmetic slip in official — the dominant term 600·2·10⁶=1.2·10⁹ alone already gives qA·1.2·10⁹ ≈ 1.92·10⁻¹² A) -->' +
      '<div class="solution-equation" dir="ltr">I₀ ≈ 1.98·10⁻¹² A &nbsp;→&nbsp; I ≈ −1.98·10⁻¹² A (זרם דלף אחורי זעיר, כצפוי)</div>' +

      '<h4>ה. זהות רוב הזרם באזור המחסור</h4>' +
      '<p>בממתח אחורי כמעט ואין דיפוזיה משמעותית באזור המחסור עצמו — הזרם שם נוצר מהשדה החשמלי החזק (זרם סחיפה), ' +
      'הסוחף נושאי מיעוט שמגיעים אליו מבחוץ (מהתפזורת). מאחר ותרומת האלקטרונים ' +
      '(<span dir="ltr">√(D_n/τ_n)·n_p = 1.2·10⁹</span>) גדולה בהרבה מתרומת החורים ' +
      '(<span dir="ltr">√(D_p/τ_p)·p_n ≈ 3.46·10⁷</span>) — כי <span dir="ltr">n_p ≫ p_n</span> — ' +
      '<b>רוב הזרם הוא זרם סחיפה של אלקטרונים.</b></p>' +

      '</div></details>'
  },

  /* ============================================================
   * Xq3 — קבל MOS על צורן מסוג p
   * ============================================================ */
  {
    id: "25s3m1-Xq3",
    cat: "mos-mosfet",
    difficulty: 4,
    skills: ["קבל MOS", "פוטנציאל משטח", "מתח סף"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2025 · סמסטר ג׳ · מועד א׳ · טופס X",
    kind: "open",
    qtype: "analysis",

    prompt:
      'נתון גרף הפוטנציאל <span dir="ltr">φ(x)</span> כתלות במיקום (בתוך המל"מ) של קבל <span dir="ltr">MOS</span> ' +
      'עשוי צורן מסוג <span dir="ltr">p</span>, בטמפרטורת החדר. מהגרף: <span dir="ltr">φ_s = φ(x=0) = 0.25 V</span> ' +
      '(פוטנציאל המשטח — הערך בממשק מבודד/מל"מ), והפוטנציאל דועך לאפס עם המרחק מהמשטח לתוך המל"מ.<br><br>' +
      '<b>ו. (6 נק׳)</b> חשבו את <span dir="ltr">φ_F</span>. מהו מצב העבודה של הקבל?<br>' +
      '<b>ז. (7 נק׳)</b> חשבו את <span dir="ltr">V_ox</span>, את <span dir="ltr">V_g</span> ואת <span dir="ltr">W</span>. ' +
      'העתיקו את הגרף הנתון וסמנו עליו את הערכים <span dir="ltr">V_ox, V_g, W, d_ox</span> (ניתן לסמן ערכים בצירים או כהפרשים).<br>' +
      '<b>ח. (7 נק׳)</b> חשבו את השדה החשמלי בשפת המל"מ (<span dir="ltr">E_s^max</span>) ובמבודד (<span dir="ltr">E_ox</span>). ' +
      'שרטטו גרף של השדה כתלות במיקום, וציינו בו את ערכי השדה והמיקום הרלוונטיים.<br>' +
      '<b>ט. (7 נק׳)</b> חשבו את מתח הסף <span dir="ltr">V_T</span>.<br>' +
      '<b>י. (7 נק׳)</b> מגדילים את המתח החיצוני בוולט אחד. חשבו מחדש את <span dir="ltr">φ_s, V_ox, W</span>.',

    hint:
      'השוו את <span dir="ltr">φ_s</span> הנתון ל-<span dir="ltr">φ_F</span> כדי לקבוע את מצב העבודה. ' +
      'לחישוב <span dir="ltr">V_ox</span> השתמשו בשוויון מטען: <span dir="ltr">Q_dep = C_ox·V_ox</span>, ' +
      'כאשר <span dir="ltr">Q_dep = √(2qN_aε_Siε₀φ_s)</span>.',

    html:
      '<table><thead><tr><th>גודל</th><th>ערך</th></tr></thead><tbody>' +
      '<tr><td><span dir="ltr">ε₀</span></td><td><span dir="ltr">8.85·10⁻¹⁴ F/cm</span></td></tr>' +
      '<tr><td><span dir="ltr">ε_Si</span></td><td><span dir="ltr">11.3</span></td></tr>' +
      '<tr><td><span dir="ltr">ε_ox</span></td><td><span dir="ltr">3.95</span></td></tr>' +
      '<tr><td><span dir="ltr">N_a</span></td><td><span dir="ltr">1·10¹⁵ cm⁻³</span></td></tr>' +
      '<tr><td><span dir="ltr">n_i</span></td><td><span dir="ltr">1·10¹⁰ cm⁻³</span></td></tr>' +
      '<tr><td><span dir="ltr">d_ox</span></td><td><span dir="ltr">100 nm = 10⁻⁵ cm</span></td></tr>' +
      '<tr><td><span dir="ltr">φ_s (מהגרף)</span></td><td><span dir="ltr">0.25 V</span></td></tr>' +
      '</tbody></table>' +
      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>ו. φ_F ומצב העבודה</h4>' +
      '<div class="solution-equation" dir="ltr">φ_F = (k_BT/q)·ln(N_a/n_i) = 0.026·ln(10¹⁵/10¹⁰) = 0.026·ln(10⁵) ≈ 0.30 V</div>' +
      '<p>מאחר ו-<span dir="ltr">φ_s = 0.25 V &lt; φ_F = 0.30 V</span>, הקבל נמצא <b>במצב מחסור (depletion)</b> ' +
      '— טרם הגענו אפילו לתחילת ההיפוך (שהיה מתחיל ב-<span dir="ltr">φ_s = φ_F</span>).</p>' +

      '<h4>ז. V_ox, V_g ו-W</h4>' +
      '<p>מטען אזור המחסור ליחידת שטח:</p>' +
      '<div class="solution-equation" dir="ltr">Q_dep = √(2qN_aε₀ε_Si·φ_s) = √(2·1.602·10⁻¹⁹·10¹⁵·8.85·10⁻¹⁴·11.3·0.25) ≈ 8.95·10⁻⁹ C/cm²</div>' +
      '<div class="solution-equation" dir="ltr">C_ox = ε₀ε_ox/d_ox = (8.85·10⁻¹⁴·3.95)/10⁻⁵ ≈ 3.50·10⁻⁸ F/cm²</div>' +
      '<div class="solution-equation" dir="ltr">V_ox = Q_dep/C_ox ≈ 8.95·10⁻⁹/3.50·10⁻⁸ ≈ 0.26 V</div>' +
      '<div class="solution-equation" dir="ltr">V_g = φ_s + V_ox = 0.25 + 0.26 = 0.51 V</div>' +
      '<div class="solution-equation" dir="ltr">W = √(2ε₀ε_Si·φ_s / (qN_a)) ≈ 5.6·10⁻⁵ cm</div>' +
      '<p>על הגרף המועתק: מסמנים <span dir="ltr">d_ox</span> כקטע אופקי משמאל לתחילת המל"מ (x=0), ' +
      'את <span dir="ltr">φ_s=0.25V</span> על ציר הפוטנציאל בנקודה x=0, את <span dir="ltr">V_g=0.51V</span> כערך הפוטנציאל בקצה השער ' +
      '(x=−d_ox, לפני הירידה הליניארית בתוך המבודד), ואת <span dir="ltr">W≈5.6·10⁻⁵cm</span> כרוחב עד שהעקומה מגיעה לאפס.</p>' +

      '<h4>ח. שדות חשמליים</h4>' +
      '<div class="solution-equation" dir="ltr">E_ox = V_ox/d_ox = 0.26/10⁻⁵ ≈ 2.6·10⁴ V/cm</div>' +
      '<div class="solution-equation" dir="ltr">E_s^max = 2φ_s/W ≈ (2·0.25)/5.6·10⁻⁵ ≈ 8.9·10³ V/cm</div>' +
      '<p>בדיקת עקביות (רציפות <span dir="ltr">D</span> בממשק, ללא מטען ממשק): ' +
      '<span dir="ltr">ε_ox·E_ox = 3.95·2.6·10⁴ ≈ 1.03·10⁵</span> לעומת ' +
      '<span dir="ltr">ε_Si·E_s^max = 11.3·8.9·10³ ≈ 1.01·10⁵</span> — תואם (בטווח העיגול).</p>' +
      '<p>צורת הגרף: השדה קבוע וגבוה יותר במבודד (<span dir="ltr">E_ox=2.6·10⁴ V/cm</span>, קבוע לכל אורך d_ox), ' +
      'ויורד באופן ליניארי מ-<span dir="ltr">E_s^max=8.9·10³ V/cm</span> ב-x=0 (שפת המל"מ) עד 0 ב-<span dir="ltr">x=W</span> ' +
      '(קצה אזור המחסור) — כמצופה מפרופיל שדה בקירוב אזור המחסור (Depletion Approximation).</p>' +

      '<h4>ט. מתח הסף V_T</h4>' +
      '<div class="solution-equation" dir="ltr">V_T = 2φ_F + [2d_ox/(ε₀ε_ox)]·√(qN_aε₀ε_Si·φ_F)</div>' +
      '<div class="solution-equation" dir="ltr">V_T = 0.6 + 5.72·10⁷·6.93·10⁻⁹ ≈ 0.6 + 0.40 ≈ 1.0 V</div>' +

      '<h4>י. הגדלת המתח החיצוני בוולט אחד</h4>' +
      '<p>המתח החדש על השער: <span dir="ltr">V_g,new = V_g + 1V = 0.51 + 1 = 1.51V</span>. ' +
      'מכיוון ש-<span dir="ltr">1.51V &gt; V_T = 1V</span>, הקבל עכשיו <b>בהיפוך חזק (strong inversion)</b>, ' +
      'ופוטנציאל המשטח מוצמד (pinned) לערכו הקבוע בסף:</p>' +
      '<div class="solution-equation" dir="ltr">φ_s = 2φ_F = 0.6 V</div>' +
      '<div class="solution-equation" dir="ltr">V_ox = V_g,new − φ_s = 1.51 − 0.6 = 0.91 V</div>' +
      '<div class="solution-equation" dir="ltr">W = √(2ε₀ε_Si·(2φ_F) / (qN_a)) ≈ 8.66·10⁻⁵ cm</div>' +
      '<p>שימו לב: <span dir="ltr">W</span> הגיע לערכו המקסימלי (<span dir="ltr">W_max</span>) ולא גדל יותר גם אם ' +
      'המתח ימשיך לעלות — כל תוספת מתח מעבר לסף נופלת על המבודד (וגורמת להצטברות אלקטרונים בערוץ ההיפוך), לא על הרחבת אזור המחסור.</p>' +

      '</div></details>'
  }
);
