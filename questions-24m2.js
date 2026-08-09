/* ============================================================
 *  questions-24m2.js — מבחן 2024, סמסטר ג׳ (קיץ), מועד ב׳.
 *  מקור: course20132-year2024-semester3-moed2.pdf (אבישי אפרת).
 *
 *  הערה חשובה: הקובץ המקורי נבדק עמוד-אחר-עמוד (9 עמודים, שאלון
 *  + פתרון) ומכיל שאלון יחיד בלבד, שמתויג בגוף המסמך עצמו
 *  "שאלון מועד Y" / "פתרון מועד Y" — כלומר טופס יחיד, לא שני
 *  טפסים מקבילים X/Y כפי שההנחיה המקורית הניחה. בקוד המנוע
 *  (walkthrough-ui.js, termName) המוסכמה היא ש-X=מועד א׳ ו-
 *  Y=מועד ב׳ — כלומר "Y" כאן אינו "טופס שני" אלא פשוט מציין
 *  שזהו מועד ב׳ (בהתאמה ל-moed="ב׳" שבזיהוי המבחן). לכן נוצרו
 *  כאן 3 שאלות בלבד (Yq1..Yq3), ולא בדוי "טופס X" (24m2-Xq*)
 *  שאינו קיים במקור — כדי לא להזין למאגר תוכן מומצא.
 * ============================================================ */

window.BANK_OPEN_QUESTIONS = window.BANK_OPEN_QUESTIONS || [];
window.BANK_OPEN_QUESTIONS.push(

  /* ============================================================
   *  שאלה 1 — מוליכים למחצה, נשאי מטען עודפים מחזוריים וזרם
   * ============================================================ */
  {
    id: "24m2-Yq1",
    cat: "sc-transport",
    difficulty: 4,
    skills: ["נשאים עודפים", "טור הנדסי", "זרם דיפוזיה/סחיפה"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2024 · סמסטר ג׳ · מועד ב׳",
    kind: "open",

    prompt:
      'נתונה פיסת <span dir="ltr">GaAs</span> באורך <span dir="ltr">L = 10cm</span> ' +
      'ושטח חתך <span dir="ltr">A = 1cm²</span>, בטמפרטורת החדר, המאולחת באופן אחיד ' +
      'הן בתורמים והן במקבלים בריכוזים <span dir="ltr">N_a = 10¹⁰cm⁻³, N_d = 10¹¹cm⁻³</span>. ' +
      'מאירים את כל הפיסה באופן אחיד בסדרת הבזקי אור בתדירות <span dir="ltr">f = 10⁸Hz</span>; ' +
      'כל הבזק מייצר נושאי מטען עודפים בריכוז <span dir="ltr">Δp = 10¹⁰cm⁻³</span>. ' +
      'עוד נתון: <span dir="ltr">n_i = 2.1×10⁶cm⁻³, τ_n = τ_p = 10⁻⁸sec, ' +
      'μ_n = 8500cm²/(V·sec), μ_p = 400cm²/(V·sec)</span>.<br><br>' +
      '<b>(א)</b> (1) האם המערכת בשיווי משקל? האם במצב עמיד? נמקו! ' +
      '(2) האם קיימים זרמי דיפוזיה, <span dir="ltr">I_p^diff</span> ו/או <span dir="ltr">I_n^diff</span>, ' +
      'לאורך המל״מ? נמקו! (3) האם קיימים זרמי סחיפה, <span dir="ltr">I_p^drift</span> ו/או ' +
      '<span dir="ltr">I_n^drift</span>, לאורך המל״מ? נמקו!<br>' +
      '<b>(ב)</b> חשבו את ריכוז האלקטרונים <span dir="ltr">n₀</span> וריכוז החורים ' +
      '<span dir="ltr">p₀</span>, בשיווי משקל (לפני תחילת ההארה).<br>' +
      '<b>(ג)</b> לכל <span dir="ltr">m = 1,2,…</span> נסמן ב-<span dir="ltr">δp_m(t)</span> את ' +
      'ריכוז החורים העודפים כפונקציה של הזמן, בין הבזק האור ה-<span dir="ltr">m</span> להבזק ' +
      'האור ה-<span dir="ltr">m+1</span>. (1) הראו שבין הבזק האור השלישי לרביעי, ריכוז החורים ' +
      'העודפים כפונקציה של הזמן נתון ע״י <span dir="ltr">δp₃(t) = Δp(1 + e + e²)e^(−ft)</span>. ' +
      '(2) הראו שבין הבזק ה-<span dir="ltr">m</span> להבזק ה-<span dir="ltr">m+1</span>, ' +
      'ריכוז החורים העודפים נתון ע״י <span dir="ltr">δp_m(t) = Δp(e^m − 1)/(e − 1)·e^(−ft)</span> ' +
      '(ניתן להיעזר בנוסחת הסכום <span dir="ltr">Σ_{n=0}^{m−1} xⁿ = (xᵐ−1)/(x−1)</span>).<br>' +
      '<b>(ד)</b> לאחר זמן רב ללא הארה, מחברים את הפיסה למקור מתח <span dir="ltr">V = 1V</span> ' +
      '(התנגדות החוטים זניחה) וחוזרים על סדרת ההבזקים. נסמן ב-<span dir="ltr">I_m(t)</span> ' +
      'את הזרם בפיסה בין הבזק האור ה-<span dir="ltr">m</span> להבזק האור ה-<span dir="ltr">m+1</span>. ' +
      'חשבו את <span dir="ltr">I₅(t)</span>, מיד לאחר ההבזק החמישי.',

    hint:
      'שימו לב ש-<span dir="ltr">f = 1/τ_p</span> בדיוק — כך שזמן המחזור בין הבזקים ' +
      'שווה בדיוק לזמן החיים של החורים, ו-<span dir="ltr">e^(−ft) = e^(−t/τ_p)</span>.',

    qtype: "analysis",

    html:
      '<table><tr><th>גודל</th><th>ערך</th></tr>' +
      '<tr><td>אורך / שטח חתך</td><td dir="ltr">L=10cm, A=1cm²</td></tr>' +
      '<tr><td>אילוח</td><td dir="ltr">N_a=10¹⁰cm⁻³, N_d=10¹¹cm⁻³</td></tr>' +
      '<tr><td>תדירות הבזקים</td><td dir="ltr">f=10⁸Hz</td></tr>' +
      '<tr><td>תוספת חורים/הבזק</td><td dir="ltr">Δp=10¹⁰cm⁻³</td></tr>' +
      '<tr><td>קבועים</td><td dir="ltr">n_i=2.1×10⁶cm⁻³, τ_n=τ_p=10⁻⁸s, μ_n=8500, μ_p=400 cm²/(V·s)</td></tr>' +
      '<tr><td>מתח (סעיף ד)</td><td dir="ltr">V=1V</td></tr></table>' +
      '<p>ראו את נוסח השאלה המלא למעלה. חשבו: (א) אופי המערכת וזרמים, ' +
      '(ב) <span dir="ltr">n₀,p₀</span>, (ג) <span dir="ltr">δp_m(t)</span> כללי, ' +
      '(ד) <span dir="ltr">I₅(t)</span> מיד לאחר ההבזק החמישי.</p>' +

      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>(א) אופי המערכת</h4>' +
      '<p>(1) שיווי משקל הוא מצב שבו העירור הוא <b>תרמי בלבד</b>. כאן קיים גם עירור ' +
      'אופטי (ההבזקים) — לכן <b>המערכת אינה בשיווי משקל</b>. מצב עמיד הוא מצב שאינו ' +
      'משתנה בזמן; העירור האופטי כאן מתבצע בהבזקים בדידים ולא באופן קבוע — לכן ' +
      '<b>המערכת גם אינה במצב עמיד</b> (אלא במצב מחזורי-עמיד בלבד).</p>' +
      '<p>(2) העירור אינו קבוע בזמן, אך הוא <b>אחיד במרחב</b> (מאירים את כל הפיסה ' +
      'יחד) — כך שאינו יוצר גרדיאנט בריכוזי האלקטרונים/החורים לאורך <span dir="ltr">x</span>. ' +
      'לכן <b>לא קיימים זרמי דיפוזיה</b>.</p>' +
      '<p>(3) אין שדה חיצוני, וללא גרדיאנט ריכוזים גם לא נוצר שדה פנימי (אין הפרדת ' +
      'מטען). לכן <b>גם לא קיימים זרמי סחיפה</b>.</p>' +

      '<h4>(ב) ריכוזי שיווי משקל</h4>' +
      '<p>המל״מ מאולח אפקטיבית כ-<span dir="ltr">type-n</span>:<br>' +
      '<span dir="ltr">N_d − N_a = 10¹¹ − 10¹⁰ = 9×10¹⁰cm⁻³</span><br>' +
      'מאחר ו-<span dir="ltr">n_i = 2.1×10⁶cm⁻³ ≪ 9×10¹⁰cm⁻³</span>:<br>' +
      '<b><span dir="ltr">n₀ ≈ N_d − N_a = 9×10¹⁰cm⁻³</span></b><br>' +
      '<span dir="ltr">p₀ = n_i²/n₀ = (2.1×10⁶)²/9×10¹⁰ ≈</span> <b><span dir="ltr">49cm⁻³</span></b></p>' +

      '<h4>(ג)(1) δp₃(t) — בנייה איטרטיבית</h4>' +
      '<p>ראשית: <span dir="ltr">f = 10⁸Hz = 1/10⁻⁸s = 1/τ_p</span>, ולכן זמן המחזור ' +
      'בין הבזקים הוא <span dir="ltr">T = 1/f = τ_p</span>.</p>' +
      '<p>הבזק 1 (בזמן <span dir="ltr">t=0</span>) עד הבזק 2 (בזמן <span dir="ltr">t=τ_p</span>): ' +
      '<span dir="ltr">δp₁(t) = Δp·e^(−t/τ_p) = Δp·e^(−ft)</span></p>' +
      '<p>הבזק 2 עד הבזק 3 — מוסיפים <span dir="ltr">Δp</span> נוסף בזמן <span dir="ltr">t=τ_p</span> ' +
      'וממשיכים לדעוך:<br>' +
      '<span dir="ltr">δp₂(t) = [δp₁(τ_p)+Δp]e^(−(t−τ_p)/τ_p) = Δp(e⁻¹+1)e^(−t/τ_p)e = Δp(1+e)e^(−ft)</span></p>' +
      '<p>הבזק 3 עד הבזק 4 — אותו תהליך:<br>' +
      '<span dir="ltr">δp₃(t) = [δp₂(2τ_p)+Δp]e^(−(t−2τ_p)/τ_p) = Δp[(1+e)e⁻²+1]e^(−t/τ_p)e²</span><br>' +
      '<span dir="ltr">⟹ δp₃(t) = Δp[(1+e)+e²]e^(−t/τ_p) = </span><b><span dir="ltr">Δp(1+e+e²)e^(−ft)</span></b></p>' +

      '<h4>(ג)(2) הכללה — טור הנדסי</h4>' +
      '<p>מדפוס הסעיף הקודם: <span dir="ltr">δp_m(t) = Δp(1+e+…+e^(m−1))e^(−ft) = ' +
      'Δp(Σ_{n=0}^{m−1} eⁿ)e^(−ft)</span>. באמצעות נוסחת הסכום ' +
      '<span dir="ltr">Σ_{n=0}^{m−1} eⁿ = (eᵐ−1)/(e−1)</span>:</p>' +
      '<p><b><span dir="ltr">δp_m(t) = [Δp(eᵐ−1)/(e−1)]·e^(−ft)</span></b></p>' +

      '<h4>(ד) הזרם I₅ מיד לאחר ההבזק החמישי</h4>' +
      '<p>ביטוי כללי לזרם:<br>' +
      '<span dir="ltr">I = V/R = VA/(Lρ_res) = (VA/L)σ = (VA/L)q[μ_n·n + μ_p·p]</span><br>' +
      'עם <span dir="ltr">n=n₀+δn, p=p₀+δp</span>, ומאחר ש-<span dir="ltr">p₀≈49 ≪ n₀≈9×10¹⁰</span> ' +
      'ניתן להזניח את <span dir="ltr">μ_p·p₀</span>. בנוסף <span dir="ltr">δn_m(t)=δp_m(t)</span> ' +
      '(יצירת זוגות אלקטרון-חור בהבזק שומרת על ניטרליות מטען):<br>' +
      '<b><span dir="ltr">I_m(t) = (VA/L)q[n₀μ_n + (μ_n+μ_p)δp_m(t)]</span></b></p>' +
      '<p>מיד לאחר ההבזק ה-1 הזמן הוא <span dir="ltr">t=0</span>, לכן מיד לאחר ההבזק ה-5 ' +
      'הזמן הוא <span dir="ltr">t=4τ_p</span> (עם <span dir="ltr">m=5</span>):<br>' +
      '<span dir="ltr">I₅(4τ_p) = (VA/L)q[n₀μ_n + (μ_n+μ_p)·Δp·(e⁵−1)/(e−1)·e⁻⁴]</span></p>' +
      '<p>מחשבים את המקדם <span dir="ltr">(e⁵−1)/(e−1)·e⁻⁴ = (e−e⁻⁴)/(e−1)</span>:<br>' +
      '<!-- verified: official solution had ≈1.578, correct is ≈1.5713 (early-rounding did not ' +
      'affect the final answer materially, both round to ≈14.5µA) -->' +
      '<span dir="ltr">(e−e⁻⁴)/(e−1) = (2.71828−0.018316)/1.71828 ≈</span> <b><span dir="ltr">1.5713</span></b></p>' +
      '<p><span dir="ltr">(VA/L)q = (1V×1cm²/10cm)×1.6×10⁻¹⁹c = 1.6×10⁻²⁰V·c·cm</span></p>' +
      '<p><span dir="ltr">I₅(4τ_p) = 1.6×10⁻²⁰[9×10¹⁰×8500 + 1.5713×8900×10¹⁰]</span><br>' +
      '<span dir="ltr">= 1.6×10⁻²⁰[7.65×10¹⁴ + 1.3985×10¹⁴] = 1.6×10⁻²⁰×9.0485×10¹⁴</span></p>' +
      '<p><b><span dir="ltr">I₅(4τ_p) ≈ 1.448×10⁻⁵A ≈ 14.5µA</span></b></p>' +

      '</div></details>'
  },

  /* ============================================================
   *  שאלה 2 — צומת PN עם פרופיל מטען אקספוננציאלי
   * ============================================================ */
  {
    id: "24m2-Yq2",
    cat: "pn-diode",
    difficulty: 4,
    skills: ["פרופיל מטען מרחבי", "חוק גאוס", "פוטנציאל מגע"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2024 · סמסטר ג׳ · מועד ב׳",
    kind: "open",

    prompt:
      'צפיפות המטען הנפחית בצומת <span dir="ltr">pn</span> המצוי בשיווי משקל, כתלות ' +
      'ב-<span dir="ltr">x</span>, נתונה ע״י:<br>' +
      '<span dir="ltr">ρ(x) = 0</span> עבור <span dir="ltr">x &lt; −3a</span>; ' +
      '<span dir="ltr">ρ(x) = ρ·exp(−x/3a − 1)</span> עבור <span dir="ltr">−3a ≤ x &lt; 0</span>; ' +
      '<span dir="ltr">ρ(x) = −3ρ·exp(x/a − 1)</span> עבור <span dir="ltr">0 &lt; x ≤ a</span>; ' +
      '<span dir="ltr">ρ(x) = 0</span> עבור <span dir="ltr">x &gt; a</span>.<br>' +
      'הביעו את תשובותיכם באמצעות <span dir="ltr">x</span>, הפרמטרים <span dir="ltr">ρ</span> ו-' +
      '<span dir="ltr">a</span>, הטמפרטורה <span dir="ltr">T</span>, שטח חתך המל״מ ' +
      '<span dir="ltr">A</span>, המקדם הדיאלקטרי <span dir="ltr">ε_r</span> וקבועים פיזיקליים. ' +
      '<b>הערה:</b> כדי למנוע בלבול בין <span dir="ltr">e</span> כקבוע אוילר לבין <span dir="ltr">e</span> ' +
      'כמטען, השתמשו עבור המטען ב-<span dir="ltr">q</span> במקום ב-<span dir="ltr">e</span>.<br><br>' +
      '<b>(א)</b> (1) מהם גבולות אזור המחסור <span dir="ltr">x_p0</span> ו-' +
      '<span dir="ltr">x_n0</span>? נמקו! (2) בהנחה שבכל צד המל״מ מאולח ברציפות, חשבו את ' +
      'ריכוזי האילוח <span dir="ltr">N_a</span> ו-<span dir="ltr">N_d</span> בכל ארבעת התחומים ' +
      'והציגו על-גבי גרף. (3) בהנחה שהפרופורציות בגרף נכונות, האם הצומת מטיפוס ' +
      '<span dir="ltr">pn</span>, <span dir="ltr">n⁺p</span> או <span dir="ltr">p⁺n</span>?<br>' +
      '<b>(ב)</b> (1) חשבו את סך כל המטען <span dir="ltr">Q_p</span> בצד <span dir="ltr">p</span> ' +
      'ואת סך כל המטען <span dir="ltr">Q_n</span> בצד <span dir="ltr">n</span> של אזור המחסור. ' +
      '(2) הוכיחו שמתקיים הקשר <span dir="ltr">x_p0·N_a = x_n0·N_d</span>.<br>' +
      '<b>(ג)</b> חשבו את וקטור השדה החשמלי <span dir="ltr">ε⃗(x)</span> בכל ארבעת התחומים ' +
      'והציגו על-גבי גרף.<br>' +
      '<b>(ד)</b> (1) חשבו את פוטנציאל המגע <span dir="ltr">V₀</span>. (2) חשבו את הריכוז ' +
      'האינטרינזי <span dir="ltr">n_i</span> של המל״מ.',

    hint:
      'אזור המחסור הוא בדיוק האזור שבו <span dir="ltr">ρ(x)≠0</span> — משם נובעים ' +
      '<span dir="ltr">x_p0</span> ו-<span dir="ltr">x_n0</span> ישירות מתחומי ההגדרה.',

    qtype: "analysis",

    html:
      '<table><tr><th>תחום</th><th dir="ltr">ρ(x)</th></tr>' +
      '<tr><td dir="ltr">x &lt; −3a</td><td dir="ltr">0</td></tr>' +
      '<tr><td dir="ltr">−3a ≤ x &lt; 0</td><td dir="ltr">ρ·exp(−x/3a − 1)</td></tr>' +
      '<tr><td dir="ltr">0 &lt; x ≤ a</td><td dir="ltr">−3ρ·exp(x/a − 1)</td></tr>' +
      '<tr><td dir="ltr">x &gt; a</td><td dir="ltr">0</td></tr></table>' +
      '<p>ראו את נוסח השאלה המלא למעלה. חשבו: (א) גבולות אזור מחסור + אילוח + סוג ' +
      'צומת, (ב) מטען כולל בכל צד + הזהות <span dir="ltr">x_p0N_a=x_n0N_d</span>, ' +
      '(ג) שדה חשמלי, (ד) פוטנציאל מגע ו-<span dir="ltr">n_i</span>.</p>' +

      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>(א)(1) גבולות אזור המחסור</h4>' +
      '<p>אזור המחסור הוא בדיוק האזור שבו <span dir="ltr">ρ(x)≠0</span>, כלומר ' +
      '<span dir="ltr">−3a ≤ x ≤ a</span>. בתחום <span dir="ltr">−3a≤x&lt;0</span> המטען ' +
      'חיובי — צד <span dir="ltr">n</span> (יונים תורמים); בתחום <span dir="ltr">0&lt;x≤a</span> ' +
      'המטען שלילי — צד <span dir="ltr">p</span> (יונים מקבלים). לכן:<br>' +
      '<b><span dir="ltr">x_p0 = a,  x_n0 = 3a</span></b></p>' +

      '<h4>(א)(2) ריכוזי האילוח</h4>' +
      '<p>באמצעות <span dir="ltr">N(x)=ρ(x)/(±q)</span> (+ לצד n, − לצד p):<br>' +
      '<span dir="ltr">N_d(−3a≤x&lt;0) = ρ(x)/q = (ρ/q)exp(−x/3a−1)</span><br>' +
      '<span dir="ltr">N_a(0&lt;x≤a) = ρ(x)/(−q) = (3ρ/q)exp(x/a−1)</span><br>' +
      'ומאחר שהאילוח ברציפות מחוץ לאזור המחסור שווה לערכו בקצה אזור המחסור באותו צד:<br>' +
      '<span dir="ltr">N_d(x≤−3a) = N_d(−3a) = ρ/q</span><br>' +
      '<span dir="ltr">N_a(x≥a) = N_a(a) = 3ρ/q</span></p>' +
      '<div class="v-note">גרף: בצד ה-n (משמאל), האילוח יורד בצורה אקספוננציאלית מ-' +
      '<span dir="ltr">ρ/q</span> (השטח השטוח) עד <span dir="ltr">ρ/qe</span> ב-' +
      '<span dir="ltr">x=−3a</span>; בצד ה-p (מימין), האילוח עולה אקספוננציאלית מ-' +
      '<span dir="ltr">3ρ/qe</span> ב-<span dir="ltr">x=0</span> עד <span dir="ltr">3ρ/q</span> ' +
      '(השטח השטוח) ב-<span dir="ltr">x=a</span> ואילך.</div>' +

      '<h4>(א)(3) סוג הצומת</h4>' +
      '<p>לפי הגרף הנתון, <span dir="ltr">N_d</span> ו-<span dir="ltr">N_a</span> הם מאותו ' +
      'סדר גודל (יחס <span dir="ltr">3</span> ביניהם בלבד) — לכן <b>הצומת מטיפוס ' +
      '<span dir="ltr">pn</span></b> (לא <span dir="ltr">n⁺p</span> ולא ' +
      '<span dir="ltr">p⁺n</span>, שדורשים הפרש סדרי-גודל).</p>' +

      '<h4>(ב)(1) המטען הכולל בכל צד</h4>' +
      '<p><span dir="ltr">Q_p = ∫₀ᵃ ρ(x)A dx = −3ρA∫₀ᵃ exp(x/a−1)dx = ' +
      '−3ρA[a·exp(x/a−1)]₀ᵃ = −3ρAa(1−1/e)</span></p>' +
      '<p><span dir="ltr">Q_n = ∫₋₃ₐ⁰ ρ(x)A dx = ρA∫₋₃ₐ⁰ exp(−x/3a−1)dx = ' +
      'ρA[−3a·exp(−x/3a−1)]₋₃ₐ⁰ = 3ρAa(1−1/e)</span></p>' +
      '<p><b><span dir="ltr">Q_p = −3ρAa(1−1/e),  Q_n = +3ρAa(1−1/e)</span></b> — ' +
      'שווים בגודלם ומנוגדים בסימנם, כצפוי (ניטרליות מטען כוללת).</p>' +

      '<h4>(ב)(2) הוכחת x_p0·N_a = x_n0·N_d</h4>' +
      '<p>באמצעות ערכי הקצה: <span dir="ltr">N_a = 3ρ/q, N_d = ρ/q</span>, ' +
      '<span dir="ltr">x_p0=a, x_n0=3a</span>:<br>' +
      '<span dir="ltr">x_p0·N_a = a·3ρ/q = 3aρ/q = 3a·ρ/q = x_n0·N_d</span> ✓</p>' +

      '<h4>(ג) השדה החשמלי</h4>' +
      '<p>באזורים הנייטרליים <span dir="ltr">ε=0</span> (שיווי משקל). באזור המחסור, ' +
      'מחוק גאוס הדיפרנציאלי <span dir="ltr">dε/dx=ρ(x)/(ε_rε₀)</span>, עם דרישת ' +
      'התאפסות בקצוות:<br>' +
      '<span dir="ltr">ε(−3a≤x≤0) = (3ρa/ε_rε₀)[1−exp(−x/3a−1)]</span><br>' +
      '<span dir="ltr">ε(0≤x≤a) = (3ρa/ε_rε₀)[1−exp(x/a−1)]</span><br>' +
      'רציפות ב-<span dir="ltr">x=0</span>: שני הביטויים נותנים ' +
      '<span dir="ltr">ε₀=(3ρa/ε_rε₀)(1−1/e)</span> — שדה מקסימלי במרכז אזור המחסור, ' +
      'דועך אקספוננציאלית לשני הכיוונים עד 0 בקצוות <span dir="ltr">±</span>.</p>' +

      '<h4>(ד)(1) פוטנציאל המגע</h4>' +
      '<p><span dir="ltr">V₀ = −∫ₐ⁻³ᵃ ε(x)dx = ∫₋₃ₐᵃ ε(x)dx</span>. מפרקים לשני ' +
      'האינטגרלים על שני התחומים ומקבלים <span dir="ltr">9ρa²/(ε_rε₀e) + 3ρa²/(ε_rε₀e)</span>:</p>' +
      '<p><b><span dir="ltr">V₀ = 12ρa²/(ε_rε₀e)</span></b></p>' +

      '<h4>(ד)(2) הריכוז האינטרינזי</h4>' +
      '<p>משוויון <span dir="ltr">V₀ = (k_BT/q)ln(N_aN_d/n_i²)</span> עם ' +
      '<span dir="ltr">N_aN_d = 3ρ²/q²</span>:<br>' +
      '<span dir="ltr">(k_BT/q)ln(3ρ²/(q²n_i²)) = 12ρa²/(ε_rε₀e)</span><br>' +
      'פותרים עבור <span dir="ltr">n_i</span>:</p>' +
      '<p><b><span dir="ltr">n_i = (√3·ρ/q)·exp(−6ρa²q/(ε_rε₀e·k_BT))</span></b></p>' +

      '</div></details>'
  },

  /* ============================================================
   *  שאלה 3 — קבלי MOS עם אוקסידים שונים
   * ============================================================ */
  {
    id: "24m2-Yq3",
    cat: "mos-mosfet",
    difficulty: 4,
    skills: ["קיבול MOS מקס/מין", "מתח סף", "אופייני C-V"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2024 · סמסטר ג׳ · מועד ב׳",
    kind: "open",

    prompt:
      'באיור מוצגים אופייני הקיבול (ליחידת שטח) של שני קבלי <span dir="ltr">MOS</span> ' +
      'אידאליים מסיליקון, קבל <span dir="ltr">A</span> וקבל <span dir="ltr">B</span>, שניהם ' +
      'בטמפרטורת החדר ובעלי מבנה זהה, פרט לאוקסיד (המבודד): באחד הקבלים האוקסיד הוא ' +
      '<span dir="ltr">SiO₂</span>, בעובי <span dir="ltr">d₁=150nm</span> ומקדם דיאלקטרי ' +
      '<span dir="ltr">ε_r1=3.9</span>; בקבל השני האוקסיד הוא <span dir="ltr">HfO₂</span>, ' +
      'בעובי <span dir="ltr">d₂=300nm</span> ומקדם דיאלקטרי <span dir="ltr">ε_r2=25</span>. ' +
      'לא ידוע איזה מבודד שייך לאיזה קבל. ריכוז האילוח בשני הקבלים הוא ' +
      '<span dir="ltr">N_a=10¹⁵cm⁻³</span>. מדדו קיבול (ליחידת שטח) כתלות במתח השער ' +
      '<span dir="ltr">V_g</span> וקיבלו אופיינים שבהם <span dir="ltr">C_A^max &gt; C_B^max</span> ' +
      'ו-<span dir="ltr">V_TA &lt; V_TB</span> (איור 1). נתונים גם ' +
      '<span dir="ltr">ε_r(Si)=11.8, n_i=1.5×10¹⁰cm⁻³</span>.<br><br>' +
      '<b>(א)</b> (1) האם הקבלים הם <span dir="ltr">n-type</span> או ' +
      '<span dir="ltr">p-type</span>? נמקו! (2) איזה מבודד שייך לאיזה קבל? הוכיחו את ' +
      'טענתכם!<br>' +
      '<b>(ב)</b> חשבו את מתחי הסף, <span dir="ltr">V_TA</span> ו-<span dir="ltr">V_TB</span>, ' +
      'של שני הקבלים (הסבירו את תשובתכם).<br>' +
      '<b>(ג)</b> חשבו את הקיבולים המינימליים, <span dir="ltr">C_A^min</span> ו-' +
      '<span dir="ltr">C_B^min</span>, של שני הקבלים.<br>' +
      '<b>(ד)</b> באיור 2 מוצג מצב זהה לאיור 1 מבחינת סדר הקיבולים המקסימליים ' +
      '(<span dir="ltr">C_A^max &gt; C_B^max</span>) אך עם סדר <b>הפוך</b> של הקיבולים ' +
      'המינימליים (<span dir="ltr">C_B^min &gt; C_A^min</span>). האם המצב המתואר באיור 2 ' +
      'אפשרי? הוכיחו את טענתכם!',

    hint:
      'מתח סף חיובי מרמז מיד על סוג המצע; והשוו את הביטוי ל-' +
      '<span dir="ltr">C^min</span> כפונקציה מונוטונית של <span dir="ltr">C^max</span>.',

    qtype: "analysis",

    html:
      '<table><tr><th>קבל</th><th dir="ltr">Oxide</th><th dir="ltr">d</th><th dir="ltr">ε_r,ox</th></tr>' +
      '<tr><td>1</td><td dir="ltr">SiO₂</td><td dir="ltr">150nm</td><td dir="ltr">3.9</td></tr>' +
      '<tr><td>2</td><td dir="ltr">HfO₂</td><td dir="ltr">300nm</td><td dir="ltr">25</td></tr>' +
      '</table>' +
      '<p dir="ltr">N_a = 10¹⁵cm⁻³ (both) · ε_r(Si) = 11.8 · n_i = 1.5×10¹⁰cm⁻³</p>' +
      '<p>ראו את נוסח השאלה המלא למעלה. חשבו: (א) סוג הקבלים והתאמת המבודד, ' +
      '(ב) מתחי סף, (ג) קיבולים מינימליים, (ד) האם היפוך הסדר באיור 2 אפשרי.</p>' +

      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>(א)(1) סוג הקבלים</h4>' +
      '<p>מתחי הסף של שני הקבלים חיוביים (נראה בגרף) — כלומר נדרש מתח חיובי על ' +
      'השער כדי לייצר היפוך. זהו המצב עבור מצע <b><span dir="ltr">p-type</span></b> ' +
      '(צריך למשוך אלקטרוני מיעוט להיפוך).</p>' +

      '<h4>(א)(2) התאמת המבודד</h4>' +
      '<p>הקיבול המקסימלי הוא קיבול המבודד: <span dir="ltr">C^max=C_ox=ε_r,oxε₀/d</span>:<br>' +
      '<span dir="ltr">C₁^max (SiO₂) = 3.9×8.85×10⁻¹⁴/1.5×10⁻⁵ = 23.01nF/cm²</span><br>' +
      '<span dir="ltr">C₂^max (HfO₂) = 25×8.85×10⁻¹⁴/3×10⁻⁵ = 73.75nF/cm²</span><br>' +
      'מאחר ונתון <span dir="ltr">C_A^max &gt; C_B^max</span> וכאן ' +
      '<span dir="ltr">C₂^max &gt; C₁^max</span>:</p>' +
      '<p><b>קבל <span dir="ltr">A</span> = אוקסיד <span dir="ltr">HfO₂</span> ' +
      '(<span dir="ltr">d₂,ε_r2</span>), קבל <span dir="ltr">B</span> = אוקסיד ' +
      '<span dir="ltr">SiO₂</span> (<span dir="ltr">d₁,ε_r1</span>)</b></p>' +

      '<h4>(ב) מתחי הסף</h4>' +
      '<p><span dir="ltr">V_T = 2φ_F + 2√(qε_rε₀N_aφ_F)/C_ox^max</span>, ' +
      '<span dir="ltr">φ_F = (k_BT/q)ln(N_a/n_i)</span>:<br>' +
      '<span dir="ltr">φ_F = 0.0259V·ln(10¹⁵/1.5×10¹⁰) ≈ 0.2877V</span><br>' +
      '<span dir="ltr">2√(qε_rε₀N_aφ_F) ≈ 1.387×10⁻⁸ c/cm²</span></p>' +
      '<!-- verified: official solution rounded φ_F to 0.29V early, which propagated to ' +
      'V_TA≈0.77V and C^min values ~0.3–1% high; carrying full precision gives V_TA≈0.76V ' +
      '(V_TB unaffected at reported precision) -->' +
      '<p><span dir="ltr">V_TA = 2(0.2877) + 1.387×10⁻⁸/7.375×10⁻⁸ ≈ 0.575+0.188 ≈</span> ' +
      '<b><span dir="ltr">0.76V</span></b></p>' +
      '<p><span dir="ltr">V_TB = 2(0.2877) + 1.387×10⁻⁸/2.301×10⁻⁸ ≈ 0.575+0.603 ≈</span> ' +
      '<b><span dir="ltr">1.18V</span></b></p>' +

      '<h4>(ג) הקיבולים המינימליים</h4>' +
      '<p>רוחב תחום המחסור המקסימלי: <span dir="ltr">w_T = 2√(ε_rε₀φ_F/(qN_a)) ≈ ' +
      '8.667×10⁻⁵cm</span>.<br>' +
      '<span dir="ltr">C^min = ε_rε₀C_ox^max/(ε_rε₀+C_ox^max·w_T)</span>:</p>' +
      '<p><span dir="ltr">C_A^min ≈ (11.8×8.85×10⁻¹⁴×7.375×10⁻⁸)/(11.8×8.85×10⁻¹⁴+7.375×10⁻⁸×8.667×10⁻⁵) ≈</span> ' +
      '<b><span dir="ltr">10.36nF/cm²</span></b></p>' +
      '<p><span dir="ltr">C_B^min ≈ (11.8×8.85×10⁻¹⁴×2.301×10⁻⁸)/(11.8×8.85×10⁻¹⁴+2.301×10⁻⁸×8.667×10⁻⁵) ≈</span> ' +
      '<b><span dir="ltr">7.91nF/cm²</span></b></p>' +

      '<h4>(ד) האם המצב באיור 2 אפשרי?</h4>' +
      '<p><span dir="ltr">C^min</span> הוא פונקציה עולה מונוטונית של <span dir="ltr">C^max</span> ' +
      '(עבור אותו <span dir="ltr">w_T,ε_r,ε₀</span>): <span dir="ltr">C^min = ε_rε₀/(ε_rε₀/C^max+w_T)</span> ' +
      '— ככל ש-<span dir="ltr">C^max</span> גדל, <span dir="ltr">ε_rε₀/C^max</span> קטן, ' +
      'המכנה קטן, ו-<span dir="ltr">C^min</span> גדל. לכן <span dir="ltr">C_A^max&gt;C_B^max</span> ' +
      'מחייב <span dir="ltr">C_A^min&gt;C_B^min</span> (כפי שאכן מתקבל בסעיף ג׳). מצב הפוך ' +
      '(<span dir="ltr">C_B^min&gt;C_A^min</span> יחד עם <span dir="ltr">C_A^max&gt;C_B^max</span>, ' +
      'כמתואר באיור 2) <b>סותר את המונוטוניות ולכן אינו אפשרי</b>. הוכחה פורמלית בשלילה: ' +
      'בהנחת <span dir="ltr">C_A^min&lt;C_B^min</span> מתקבל לאחר צמצום ' +
      '<span dir="ltr">1/C_B^max &lt; 1/C_A^max ⟹ C_A^max&lt;C_B^max</span> — בסתירה לנתון ' +
      '<span dir="ltr">C_A^max&gt;C_B^max</span>. <b>לכן המצב באיור 2 אינו אפשרי.</b></p>' +

      '</div></details>'
  }
);
