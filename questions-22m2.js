/* ============================================================
 *  questions-22m2.js — מבחן 2022 · סמסטר ג׳ · מועד ב׳ (id: 22m2)
 *  נכתב ע"י אבישי אפרת. קובץ המקור מכיל טופס בודד בלבד (מסומן
 *  "Y" בתוך המסמך עצמו) — 3 שאלות + פתרון רשמי. אין טופס X
 *  במסמך המקור, ולכן לא הופקו שאלות מקבילות.
 * ============================================================ */

window.BANK_OPEN_QUESTIONS = window.BANK_OPEN_QUESTIONS || [];
window.BANK_OPEN_QUESTIONS.push(

  /* ============================================================
   * שאלה 1 — מוליכים למחצה, זרמים ונשאי מטען עודפים (34 נק')
   * ============================================================ */
  {
    id: "22m2-Yq1",
    cat: "sc-transport",
    difficulty: 4,
    skills: ["עירור אופטי לא אחיד", "משוואת רציפות", "אורך דיפוזיה"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2022 · סמסטר ג׳ · מועד ב׳",
    kind: "open",

    prompt:
      'נתונה פיסת <span dir="ltr">GaAs</span> בטמפרטורת החדר, המאולחת באופן אחיד באטומים מקבלים ' +
      '(<span dir="ltr">p-type</span>). אורכה של הפיסה <span dir="ltr">L</span>, כך שראשיתה ב-' +
      '<span dir="ltr">x = 0</span> וסופה ב-<span dir="ltr">x = L</span>. ' +
      'מאירים את הפיסה במשך זמן רב אך באופן לא אחיד, כתלות ב-<span dir="ltr">x</span>, באופן הבא: ' +
      '<span dir="ltr">g<sub>op</sub>(x) = c(L − x)</span>, כאשר <span dir="ltr">c</span> קבוע חיובי.' +
      '<br><br><b>(א) (9 נק׳)</b><br>' +
      '(1) האם המערכת בשיווי משקל? נמקו!<br>' +
      '(2) האם המערכת במצב עמיד? נמקו!<br>' +
      '(3) האם קיים שדה חשמלי לאורך המל"מ? נמקו!<br>' +
      '(4) האם קיימים זרמי סחיפה, <span dir="ltr">I<sub>p</sub><sup>drift</sup></span> ו-' +
      '<span dir="ltr">I<sub>n</sub><sup>drift</sup></span>, לאורך המל"מ? נמקו!<br>' +
      '(5) האם קיימים זרמי דיפוזיה, <span dir="ltr">I<sub>p</sub><sup>diff</sup></span> ו-' +
      '<span dir="ltr">I<sub>n</sub><sup>diff</sup></span>, לאורך המל"מ? נמקו!<br>' +
      '(6) האם קיים זרם לאורך המל"מ? נמקו!' +
      '<br><br><b>(ב) (8 נק׳)</b> ידועה משוואת הרצף לעודף המטען החורי: ' +
      '<span dir="ltr">∂δp/∂t = g<sub>op</sub> − δp/τ<sub>p</sub> − (1/e)·∂J<sub>p</sub>/∂x</span>. ' +
      'קבלו ממשוואת הרצף את המשוואה הדיפרנציאלית המתארת את עודף המטען החורי, ' +
      '<span dir="ltr">δp</span>, עבור המערכת הנתונה.' +
      '<br><br><b>(ג) (8 נק׳)</b><br>' +
      '(1) הראו שהביטוי הבא מהווה פתרון למשוואה שקיבלתם: ' +
      '<span dir="ltr">δp(x) = τ<sub>p</sub>[g<sub>op</sub>(x) + A·e<sup>−x/L<sub>p</sub></sup> + B·e<sup>x/L<sub>p</sub></sup>]</span>.<br>' +
      '(2) בהינתן תנאי השפה: <span dir="ltr">δp(0) = τ<sub>p</sub>cL</span>, ' +
      '<span dir="ltr">δp(L) = 0</span>, חשבו את הקבועים <span dir="ltr">A</span> ו-' +
      '<span dir="ltr">B</span> ורשמו באמצעותם את הפתרון המקיים את תנאי השפה.' +
      '<br><br><b>(ד) (9 נק׳)</b> נתון: <span dir="ltr">n<sub>i</sub> = 2.1×10<sup>6</sup> cm⁻³, ' +
      'N<sub>a</sub> = 10<sup>10</sup> cm⁻³, τ<sub>n</sub> = τ<sub>p</sub> = 10⁻⁷ sec, ' +
      'L = 5 cm, c = 10<sup>10</sup> cm⁻⁴sec⁻¹</span>. ' +
      'חשבו את ריכוז האלקטרונים, <span dir="ltr">n(x)</span>, ואת ריכוז החורים, ' +
      '<span dir="ltr">p(x)</span>, כתלות ב-<span dir="ltr">x</span> לאורך המל"מ.',

    hint: 'שימו לב שקצב היצירה תלוי ב-x — גם ללא שדה יכולים להיות זרמי דיפוזיה; בדקו מה קורה למטען הכולל של זוג אלקטרון-חור שנוצר יחד.',

    qtype: "analysis",

    html:
      '<table><tr><th>נתון</th><th>ערך</th></tr>' +
      '<tr><td dir="ltr">g<sub>op</sub>(x)</td><td dir="ltr">c(L − x)</td></tr>' +
      '<tr><td dir="ltr">n<sub>i</sub></td><td dir="ltr">2.1×10⁶ cm⁻³</td></tr>' +
      '<tr><td dir="ltr">N<sub>a</sub></td><td dir="ltr">10¹⁰ cm⁻³</td></tr>' +
      '<tr><td dir="ltr">τ<sub>n</sub> = τ<sub>p</sub></td><td dir="ltr">10⁻⁷ sec</td></tr>' +
      '<tr><td dir="ltr">L</td><td dir="ltr">5 cm</td></tr>' +
      '<tr><td dir="ltr">c</td><td dir="ltr">10¹⁰ cm⁻⁴sec⁻¹</td></tr></table>' +
      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>(א) שאלות איכותיות</h4>' +
      '<p>(1) שיווי משקל הוא מצב שבו העירור היחיד הוא עירור תרמי. כאן קיים בנוסף גם עירור אופטי — לכן ' +
      '<b>המערכת אינה בשיווי משקל</b>.</p>' +
      '<p>(2) מצב עמיד הוא מצב שאינו משתנה בזמן. העירור האופטי אינו אחיד במרחב אך קבוע בזמן (הפיסה מוארת ' +
      'זמן רב) — לכן <b>המערכת במצב עמיד</b>.</p>' +
      '<p>(3) העירור אינו אחיד ולכן נוצר גרדיאנט בריכוזי האלקטרונים והחורים, אך העירור האופטי מייצר זוגות ' +
      'אלקטרון-חור שמטענם הכולל אפס. לכן, למרות הגרדיאנט בריכוזים, <b>אין גרדיאנט במטען ולכן אין שדה חשמלי</b>.</p>' +
      '<p>(4) מאחר ואין שדה — <b>לא קיימים זרמי סחיפה</b>.</p>' +
      '<p>(5) קיים גרדיאנט הן בריכוז האלקטרונים והן בריכוז החורים — <b>שני זרמי הדיפוזיה קיימים</b>.</p>' +
      '<p>(6) הזרם הכולל מורכב מסחיפה ומדיפוזיה של שני סוגי הנשאים. אין סחיפה. זרמי הדיפוזיה קיימים אך ' +
      'מכיוון שכל זוג אלקטרון-חור נע יחד (מטענם הכולל 0), זרמי הדיפוזיה של האלקטרונים והחורים שווים בגודלם ' +
      'ומנוגדים בכיוונם ומבטלים זה את זה — <b>אין זרם כולל לאורך המל"מ</b>.</p>' +

      '<h4>(ב) המשוואה הדיפרנציאלית</h4>' +
      '<p>המצב עמיד ⟸ <span dir="ltr">∂δp/∂t = 0</span>. הזרם הוא זרם דיפוזיה בלבד: ' +
      '<span dir="ltr">J<sub>p</sub><sup>diff</sup> = −eD<sub>p</sub>·dδp/dx</span>. מציבים:</p>' +
      '<p dir="ltr" style="text-align:center">0 = g<sub>op</sub>(x) − δp/τ<sub>p</sub> − (1/e)·d/dx(−eD<sub>p</sub>·dδp/dx)</p>' +
      '<p dir="ltr" style="text-align:center"><b>D<sub>p</sub>·d²δp/dx² − δp/τ<sub>p</sub> + c(L − x) = 0</b></p>' +

      '<h4>(ג1) בדיקת הפתרון המוצע</h4>' +
      '<p>גוזרים פעמיים את הביטוי המוצע:</p>' +
      '<p dir="ltr" style="text-align:center">dδp/dx = τ<sub>p</sub>[−c − (A/L<sub>p</sub>)e<sup>−x/L<sub>p</sub></sup> + (B/L<sub>p</sub>)e<sup>x/L<sub>p</sub></sup>]</p>' +
      '<p dir="ltr" style="text-align:center">d²δp/dx² = (τ<sub>p</sub>/L<sub>p</sub>²)[A e<sup>−x/L<sub>p</sub></sup> + B e<sup>x/L<sub>p</sub></sup>]</p>' +
      '<p>בהיות <span dir="ltr">L<sub>p</sub>² = τ<sub>p</sub>D<sub>p</sub></span> מתקבל ' +
      '<span dir="ltr">τ<sub>p</sub>/L<sub>p</sub>² = 1/D<sub>p</sub></span>, כלומר ' +
      '<span dir="ltr">D<sub>p</sub>·d²δp/dx² = A e<sup>−x/L<sub>p</sub></sup> + B e<sup>x/L<sub>p</sub></sup></span>. ' +
      'מציבים באגף שמאל של המשוואה מסעיף (ב):</p>' +
      '<p dir="ltr" style="text-align:center">[A e<sup>−x/L<sub>p</sub></sup> + B e<sup>x/L<sub>p</sub></sup>] − ' +
      '[g<sub>op</sub>(x) + A e<sup>−x/L<sub>p</sub></sup> + B e<sup>x/L<sub>p</sub></sup>] + c(L − x) = −g<sub>op</sub>(x) + c(L−x) = 0 ✓</p>' +
      '<p>(השוויון האחרון נובע ישירות מכך ש-<span dir="ltr">g<sub>op</sub>(x) = c(L−x)</span> — הביטוי אכן פותר את המשוואה.)</p>' +

      '<h4>(ג2) הפעלת תנאי השפה</h4>' +
      '<p dir="ltr" style="text-align:center">δp(0) = τ<sub>p</sub>[cL + A + B] = τ<sub>p</sub>cL ⟹ A + B = 0 ⟹ A = −B</p>' +
      '<p>ומכיוון ש-<span dir="ltr">g<sub>op</sub>(L) = c(L−L) = 0</span>:</p>' +
      '<p dir="ltr" style="text-align:center">δp(L) = τ<sub>p</sub>[A e<sup>−L/L<sub>p</sub></sup> + B e<sup>L/L<sub>p</sub></sup>] = 0</p>' +
      '<p>מציבים <span dir="ltr">B = −A</span>: <span dir="ltr">A(e<sup>−L/L<sub>p</sub></sup> − e<sup>L/L<sub>p</sub></sup>) = 0</span>. ' +
      'מכיוון ש-<span dir="ltr">e<sup>−L/L<sub>p</sub></sup> ≠ e<sup>L/L<sub>p</sub></sup></span> (עבור <span dir="ltr">L,L<sub>p</sub> &gt; 0</span>), ' +
      'הפתרון היחיד הוא <span dir="ltr">A = 0</span> ולכן גם <span dir="ltr">B = 0</span>:</p>' +
      '<p dir="ltr" style="text-align:center"><b>δp(x) = τ<sub>p</sub>·g<sub>op</sub>(x) = τ<sub>p</sub>c(L − x)</b></p>' +

      '<h4>(ד) חישוב n(x) ו-p(x)</h4>' +
      '<p dir="ltr" style="text-align:center">τ<sub>p</sub>cL = 10⁻⁷ × 10¹⁰ × 5 = 5000 cm⁻³</p>' +
      '<p>מאחר והמל"מ מטיפוס p: <span dir="ltr">p₀ ≈ N<sub>a</sub> = 10¹⁰ cm⁻³</span>, ומכיוון ש-' +
      '<span dir="ltr">δp(x) ≤ 5000 cm⁻³ ≪ p₀</span>:</p>' +
      '<p dir="ltr" style="text-align:center"><b>p(x) ≈ p₀ ≈ 10¹⁰ cm⁻³</b> (כמעט קבוע — תלות ה-x זניחה)</p>' +
      '<p dir="ltr" style="text-align:center">n₀ = n<sub>i</sub>²/p₀ ≈ (2.1×10⁶)²/10¹⁰ = 441 cm⁻³</p>' +
      '<p>ומכיוון שהזוגות נוצרים יחד: <span dir="ltr">δn(x) = δp(x) = τ<sub>p</sub>c(L−x) = 5000 − 1000x</span> ' +
      '(<span dir="ltr">x</span> ב-cm):</p>' +
      '<p dir="ltr" style="text-align:center">n(x) = n₀ + δn(x) = 441 + 5000 − 1000x</p>' +
      '<p dir="ltr" style="text-align:center"><b>n(x) = 5441 cm⁻³ − 1000 cm⁻⁴·x</b></p>' +

      '</div></details>'
  },

  /* ============================================================
   * שאלה 2 — צומת PN והדיודה (33 נק')
   * ============================================================ */
  {
    id: "22m2-Yq2",
    cat: "pn-diode",
    difficulty: 4,
    skills: ["פרופיל אילוח לא אחיד", "צפיפות מטען וגאוס", "פוטנציאל מגע"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2022 · סמסטר ג׳ · מועד ב׳",
    kind: "open",

    prompt:
      'ריכוזי האילוח בצומת <span dir="ltr">pn</span>, המצויה בשיווי משקל, נתונים כתלות ב-' +
      '<span dir="ltr">x</span> ע"י:<br>' +
      '<span dir="ltr">N(x) = N<sub>a</sub></span> עבור <span dir="ltr">x ≤ −a</span><br>' +
      '<span dir="ltr">N(x) = −N<sub>a</sub>·sin(πx/2a)</span> עבור <span dir="ltr">−a ≤ x ≤ 0</span><br>' +
      '<span dir="ltr">N(x) = N<sub>d</sub>·sin(πx/4a)</span> עבור <span dir="ltr">0 ≤ x ≤ 2a</span><br>' +
      '<span dir="ltr">N(x) = N<sub>d</sub></span> עבור <span dir="ltr">2a ≤ x</span><br>' +
      'כאשר האזורים בהם ריכוזי האילוח הם <span dir="ltr">N<sub>a</sub></span> ו-' +
      '<span dir="ltr">N<sub>d</sub></span> הם האזורים הנייטרליים של הצומת. ' +
      'הביעו את תשובותיכם באמצעות <span dir="ltr">x, N<sub>a</sub>, N<sub>d</sub>, a, T</span>, ' +
      'שטח חתך <span dir="ltr">A</span>, המקדם הדיאלקטרי <span dir="ltr">ε<sub>r</sub></span> וקבועים פיזיקליים.' +
      '<br><br><b>(א) (9 נק׳)</b><br>' +
      '(1) בהנחה שהפרופורציות בגרף הנתון נכונות, האם הצומת מטיפוס <span dir="ltr">pn</span>, ' +
      '<span dir="ltr">p⁺n</span> או <span dir="ltr">pn⁺</span>?<br>' +
      '(2) מהם גבולות אזור המחסור, <span dir="ltr">x<sub>p</sub></span> ו-' +
      '<span dir="ltr">x<sub>n</sub></span>? נמקו!<br>' +
      '(3) חשבו את צפיפות המטען, <span dir="ltr">ρ(x)</span>, בכל ארבעת התחומים והציגו על-גבי גרף.' +
      '<br><br><b>(ב) (8 נק׳)</b><br>' +
      '(1) חשבו את סך כל המטען, <span dir="ltr">Q<sub>p</sub></span>, בצד ה-p של אזור המחסור, ' +
      'ואת סך כל המטען, <span dir="ltr">Q<sub>n</sub></span>, בצד ה-n של אזור המחסור.<br>' +
      '(2) הוכיחו שגם במערכת הנתונה מתקיים הקשר <span dir="ltr">x<sub>p</sub>N<sub>a</sub> = x<sub>n</sub>N<sub>d</sub></span>.' +
      '<br><br><b>(ג) (8 נק׳)</b> חשבו את וקטור השדה החשמלי, ' +
      '<span dir="ltr">ε⃗(x)</span>, בכל ארבעת התחומים והציגו על-גבי גרף.' +
      '<br><br><b>(ד) (8 נק׳)</b><br>' +
      '(1) חשבו את פוטנציאל המגע, <span dir="ltr">V₀</span>.<br>' +
      '(2) חשבו את הריכוז האינטרינזי, <span dir="ltr">n<sub>i</sub></span>, של המל"מ.',

    hint: 'האזור הטעון הוא בדיוק האזור שבו N(x) עדיין לא הגיע לערכי הרוויה Na/Nd — משם נובעים גבולות אזור המחסור.',

    qtype: "analysis",

    html:
      '<p dir="ltr">N(x) = N<sub>a</sub> (x≤−a) → −N<sub>a</sub>sin(πx/2a) (−a≤x≤0) → ' +
      'N<sub>d</sub>sin(πx/4a) (0≤x≤2a) → N<sub>d</sub> (x≥2a)</p>' +
      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>(א1) סוג הצומת</h4>' +
      '<p>על-פי הגרף הנתון, <span dir="ltr">N<sub>a</sub></span> ו-<span dir="ltr">N<sub>d</sub></span> ' +
      'הם מאותו סדר גודל — <b>הצומת מטיפוס <span dir="ltr">pn</span> רגילה</b> (לא אסימטרית).</p>' +

      '<h4>(א2) גבולות אזור המחסור</h4>' +
      '<p>האזורים הנייטרליים הם בדיוק אלה בהם <span dir="ltr">N(x)</span> מגיע לערכי הרוויה ' +
      '<span dir="ltr">N<sub>a</sub></span>/<span dir="ltr">N<sub>d</sub></span>. לכן אזור המחסור (הטעון) ' +
      'הוא בדיוק <span dir="ltr">−a ≤ x ≤ 2a</span>:</p>' +
      '<p dir="ltr" style="text-align:center"><b>x<sub>p</sub> = a, &nbsp; x<sub>n</sub> = 2a</b></p>' +

      '<h4>(א3) צפיפות המטען</h4>' +
      '<p>באזורים הנייטרליים <span dir="ltr">ρ = 0</span>. באזור המחסור, ' +
      '<span dir="ltr">ρ(x) = q·N<sub>ionized</sub>(x)</span> (מקבלים מיוננים תורמים מטען שלילי, ' +
      'תורמים מיוננים — מטען חיובי):</p>' +
      '<p dir="ltr" style="text-align:center">ρ(x) = 0, &nbsp; x &lt; −a</p>' +
      '<p dir="ltr" style="text-align:center">ρ(x) = eN<sub>a</sub>·sin(πx/2a), &nbsp; −a ≤ x ≤ 0</p>' +
      '<p dir="ltr" style="text-align:center">ρ(x) = eN<sub>d</sub>·sin(πx/4a), &nbsp; 0 ≤ x ≤ 2a</p>' +
      '<p dir="ltr" style="text-align:center">ρ(x) = 0, &nbsp; x &gt; 2a</p>' +
      '<p>(בתחום השני <span dir="ltr">sin(πx/2a) ≤ 0</span> כי <span dir="ltr">x≤0</span> — ' +
      'התוצאה שלילית כנדרש בצד ה-p; בתחום השלישי היא חיובית כנדרש בצד ה-n.)</p>' +

      '<h4>(ב1) המטען הכולל בכל צד</h4>' +
      '<p dir="ltr" style="text-align:center">Q<sub>p</sub> = eN<sub>a</sub>A∫<sub>−a</sub><sup>0</sup> sin(πx/2a)dx = ' +
      'eN<sub>a</sub>A[−(2a/π)cos(πx/2a)]<sub>−a</sub><sup>0</sup> = <b>−2aeN<sub>a</sub>A/π</b></p>' +
      '<p dir="ltr" style="text-align:center">Q<sub>n</sub> = eN<sub>d</sub>A∫<sub>0</sub><sup>2a</sup> sin(πx/4a)dx = ' +
      'eN<sub>d</sub>A[−(4a/π)cos(πx/4a)]<sub>0</sub><sup>2a</sup> = <b>4aeN<sub>d</sub>A/π</b></p>' +

      '<h4>(ב2) ההוכחה ש-x<sub>p</sub>N<sub>a</sub> = x<sub>n</sub>N<sub>d</sub></h4>' +
      '<p>המטען הכולל משני צדי הצומת חייב להתאזן: <span dir="ltr">|Q<sub>p</sub>| = Q<sub>n</sub></span>:</p>' +
      '<p dir="ltr" style="text-align:center">2aeN<sub>a</sub>A/π = 4aeN<sub>d</sub>A/π &nbsp;⟹&nbsp; N<sub>a</sub> = 2N<sub>d</sub></p>' +
      '<p>ומכיוון ש-<span dir="ltr">x<sub>p</sub> = a</span> ו-<span dir="ltr">x<sub>n</sub> = 2a</span>:</p>' +
      '<p dir="ltr" style="text-align:center">x<sub>p</sub>N<sub>a</sub> = a·N<sub>a</sub>, &nbsp; ' +
      'x<sub>n</sub>N<sub>d</sub> = 2a·N<sub>d</sub> = 2a·(N<sub>a</sub>/2) = a·N<sub>a</sub></p>' +
      '<p dir="ltr" style="text-align:center"><b>⟹ x<sub>p</sub>N<sub>a</sub> = x<sub>n</sub>N<sub>d</sub></b> — הקשר אכן מתקיים.</p>' +

      '<h4>(ג) השדה החשמלי</h4>' +
      '<p>מגאוס הדיפרנציאלי <span dir="ltr">dε/dx = ρ(x)/(ε<sub>r</sub>ε₀)</span> עם דרישת התאפסות ' +
      'בקצוות אזור המחסור (<span dir="ltr">ε(−a)=0, ε(2a)=0</span>):</p>' +
      '<p dir="ltr" style="text-align:center">ε(−a ≤ x ≤ 0) = −(2aeN<sub>a</sub>/πε<sub>r</sub>ε₀)·cos(πx/2a)&nbsp;(−x̂)</p>' +
      '<p dir="ltr" style="text-align:center">ε(0 ≤ x ≤ 2a) = −(4aeN<sub>d</sub>/πε<sub>r</sub>ε₀)·cos(πx/4a)&nbsp;(−x̂)</p>' +
      '<p>בדיקת רציפות ב-<span dir="ltr">x=0</span>: הביטויים שווים בדיוק כאשר ' +
      '<span dir="ltr">2aN<sub>a</sub> = 4aN<sub>d</sub></span>, כלומר <span dir="ltr">N<sub>a</sub>=2N<sub>d</sub></span> — ' +
      'עקבי לחלוטין עם התוצאה מסעיף (ב2). השדה המקסימלי: ' +
      '<span dir="ltr">ε₀ = 2aeN<sub>a</sub>/(πε<sub>r</sub>ε₀) = 4aeN<sub>d</sub>/(πε<sub>r</sub>ε₀)</span>, בכיוון <span dir="ltr">−x̂</span>.</p>' +

      '<h4>(ד1) פוטנציאל המגע</h4>' +
      '<p dir="ltr" style="text-align:center">V₀ = −∫<sub>−a</sub><sup>2a</sup>ε(x)dx = ' +
      '4a²eN<sub>a</sub>/(π²ε<sub>r</sub>ε₀) + 16a²eN<sub>d</sub>/(π²ε<sub>r</sub>ε₀)</p>' +
      '<p>מציבים <span dir="ltr">N<sub>a</sub> = 2N<sub>d</sub></span>:</p>' +
      '<p dir="ltr" style="text-align:center"><b>V₀ = 12a²eN<sub>a</sub>/(π²ε<sub>r</sub>ε₀) = 24a²eN<sub>d</sub>/(π²ε<sub>r</sub>ε₀)</b></p>' +

      '<h4>(ד2) הריכוז האינטרינזי</h4>' +
      '<p>משוואת בולצמן לפוטנציאל מגע, עם <span dir="ltr">N<sub>d</sub>=N<sub>a</sub>/2</span>:</p>' +
      '<p dir="ltr" style="text-align:center">V₀ = (k<sub>B</sub>T/e)·ln(N<sub>a</sub>N<sub>d</sub>/n<sub>i</sub>²) = ' +
      '(k<sub>B</sub>T/e)·ln(N<sub>a</sub>²/2n<sub>i</sub>²)</p>' +
      '<p>משווים ל-<span dir="ltr">V₀ = 12a²eN<sub>a</sub>/(π²ε<sub>r</sub>ε₀)</span> ופותרים עבור ' +
      '<span dir="ltr">n<sub>i</sub></span> (מציבים <span dir="ltr">eV₀/2k<sub>B</sub>T</span> באקספוננט):</p>' +
      '<p dir="ltr" style="text-align:center">n<sub>i</sub> = √(N<sub>a</sub>N<sub>d</sub>)·exp(−eV₀/2k<sub>B</sub>T) = ' +
      '(N<sub>a</sub>/√2)·exp(−6a²e²N<sub>a</sub>/π²ε<sub>r</sub>ε₀k<sub>B</sub>T)</p>' +
      '<p>וכאשר מציבים <span dir="ltr">N<sub>a</sub>=2N<sub>d</sub></span> גם בגורם הקדמי וגם באקספוננט (שם ' +
      'המקדם 6 הופך ל-12 ומשתנה ה-N הופך מ-<span dir="ltr">N<sub>a</sub></span> ל-' +
      '<span dir="ltr">N<sub>d</sub></span>):</p>' +
      '<!-- verified: official solution kept "Na" inside the exponent of the second (Nd-based) equivalent ' +
      'form — exp(−12a²e²Na/π²εrε0kBT) — which is inconsistent with its own Na=2Nd substitution and does not ' +
      'equal the first form algebraically; the correct exponent uses Nd: exp(−12a²e²Nd/π²εrε0kBT). -->' +
      '<p dir="ltr" style="text-align:center"><b>n<sub>i</sub> = (N<sub>a</sub>/√2)·exp(−6a²e²N<sub>a</sub>/π²ε<sub>r</sub>ε₀k<sub>B</sub>T) ' +
      '= √2·N<sub>d</sub>·exp(−12a²e²N<sub>d</sub>/π²ε<sub>r</sub>ε₀k<sub>B</sub>T)</b></p>' +
      '<p style="opacity:.75;font-size:.9em">(בדיקה: שני הביטויים שקולים בדיוק כי ' +
      '<span dir="ltr">N<sub>a</sub>/√2 = 2N<sub>d</sub>/√2 = √2N<sub>d</sub></span> וגם ' +
      '<span dir="ltr">6a²e²N<sub>a</sub> = 6a²e²(2N<sub>d</sub>) = 12a²e²N<sub>d</sub></span> — הפתרון הרשמי ' +
      'השאיר בטעות <span dir="ltr">N<sub>a</sub></span> באקספוננט של הצורה השנייה.)</p>' +

      '</div></details>'
  },

  /* ============================================================
   * שאלה 3 — קבל MOS וטרנזיסטור MOSFET (33 נק')
   * ============================================================ */
  {
    id: "22m2-Yq3",
    cat: "mos-mosfet",
    difficulty: 3,
    skills: ["קבל MOS", "מתח סף", "קיבול מינימלי"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2022 · סמסטר ג׳ · מועד ב׳",
    kind: "open",

    prompt:
      'בגרף מוצגים אופייני הקיבול (ליחידת שטח) של שני קבלי <span dir="ltr">MOS</span> אידאליים מסיליקון, ' +
      'קבל <span dir="ltr">A</span> וקבל <span dir="ltr">B</span>, שניהם בטמפרטורת החדר בעלי מבנה זהה. ' +
      'ריכוזי האילוח במצעי הקבלים (במל"מ) הם <span dir="ltr">10¹⁵cm⁻³</span> ו-' +
      '<span dir="ltr">10¹⁷cm⁻³</span>, אך לא ידוע איזה מהם הוא של קבל <span dir="ltr">A</span> ואיזה ' +
      'של קבל <span dir="ltr">B</span>. על מנת לשייך את ריכוז הזיהום לקבל המתאים בוצעה מדידה של קיבול ' +
      'כתלות במתח השער <span dir="ltr">V<sub>g</sub></span>: שני העקומות יורדות מ-<span dir="ltr">C<sub>max</sub></span> ' +
      '(משותף לשתיהן), עוברות מינימום ב-<span dir="ltr">C<sub>A</sub><sup>min</sup></span>/' +
      '<span dir="ltr">C<sub>B</sub><sup>min</sup></span> במתחי סף <span dir="ltr">V<sub>TA</sub> &lt; V<sub>TB</sub></span>, ' +
      'וחוזרות ל-<span dir="ltr">C<sub>max</sub></span> בהיפוך מלא. נתונים גם: ' +
      '<span dir="ltr">ε<sub>r</sub> = 11.8, ε<sub>r</sub><sup>ox</sup> = 3.9, d = 5nm, ' +
      'n<sub>i</sub> = 1.5×10¹⁰cm⁻³</span>.' +
      '<br><br><b>(א) (8 נק׳)</b><br>' +
      '(1) האם הקבלים הם <span dir="ltr">NMOS</span> או <span dir="ltr">PMOS</span>? נמקו!<br>' +
      '(2) חשבו את הקיבול המקסימלי, <span dir="ltr">C<sub>max</sub></span>, של שני הקבלים.' +
      '<br><br><b>(ב) (7 נק׳)</b> מבין שני ריכוזי האילוח הנתונים, איזה מהם הוא <span dir="ltr">N<sub>A</sub></span> ' +
      '(של קבל <span dir="ltr">A</span>) ואיזה מהם הוא <span dir="ltr">N<sub>B</sub></span> ' +
      '(של קבל <span dir="ltr">B</span>)? נמקו!' +
      '<br><br><b>(ג) (9 נק׳)</b> חשבו את מתחי הסף, <span dir="ltr">V<sub>TA</sub></span> ו-' +
      '<span dir="ltr">V<sub>TB</sub></span>, של שני הקבלים (הסבירו את תשובתכם).' +
      '<br><br><b>(ד) (9 נק׳)</b> חשבו את הקיבולים המינימליים, <span dir="ltr">C<sub>A</sub><sup>min</sup></span> ' +
      'ו-<span dir="ltr">C<sub>B</sub><sup>min</sup></span>, של שני הקבלים.',

    hint: 'מתח הסף עולה עם ריכוז המצע — זה מה שמאפשר לשייך את שני ריכוזי האילוח הנתונים לעקומות ה-C-V הנתונות.',

    qtype: "analysis",

    html:
      '<table><tr><th>נתון</th><th>ערך</th></tr>' +
      '<tr><td dir="ltr">ε<sub>r</sub> (Si)</td><td dir="ltr">11.8</td></tr>' +
      '<tr><td dir="ltr">ε<sub>r</sub><sup>ox</sup></td><td dir="ltr">3.9</td></tr>' +
      '<tr><td dir="ltr">d (עובי מבודד)</td><td dir="ltr">5 nm</td></tr>' +
      '<tr><td dir="ltr">n<sub>i</sub></td><td dir="ltr">1.5×10¹⁰ cm⁻³</td></tr>' +
      '<tr><td>ריכוזי מצע נתונים</td><td dir="ltr">10¹⁵cm⁻³, 10¹⁷cm⁻³</td></tr></table>' +
      '<details class="sol"><summary>פתרון</summary><div class="body">' +

      '<h4>(א1) NMOS או PMOS</h4>' +
      '<p>מתחי הסף של שני הקבלים חיוביים, כלומר נדרש מתח שער חיובי כדי לייצר היפוך — לכן ' +
      '<b>המצע הוא מסוג <span dir="ltr">p-type</span></b> (קבל שכזה, כאשר משמש כטרנזיסטור, נותן ' +
      '<span dir="ltr">NMOS</span> — ערוץ-n).</p>' +

      '<h4>(א2) הקיבול המקסימלי</h4>' +
      '<p>הקיבול המקסימלי הוא קיבול המבודד בלבד:</p>' +
      '<p dir="ltr" style="text-align:center">C<sub>max</sub> = C<sub>ox</sub> = ε<sub>r</sub><sup>ox</sup>ε₀/d = ' +
      '(3.9 × 8.85×10⁻¹⁴ F/cm) / (5×10⁻⁷cm)</p>' +
      '<p dir="ltr" style="text-align:center"><b>C<sub>max</sub> ≈ 6.9×10⁻⁷ F/cm² = 690 nF/cm²</b> (זהה לשני הקבלים)</p>' +

      '<h4>(ב) שיוך ריכוזי האילוח</h4>' +
      '<p>לשני הקבלים אותו קיבול מבודד, לכן מתח הסף נקבע לפי ריכוז המצע בלבד: ככל שריכוז המצע גבוה יותר, ' +
      'נדרשת שכבת היפוך "מטענית" יותר ⟸ נדרש מתח סף גבוה יותר. מכיוון ' +
      '<span dir="ltr">V<sub>TA</sub> &lt; V<sub>TB</sub></span> בגרף הנתון:</p>' +
      '<p dir="ltr" style="text-align:center"><b>N<sub>A</sub> = 10¹⁵cm⁻³, &nbsp; N<sub>B</sub> = 10¹⁷cm⁻³</b></p>' +

      '<h4>(ג) מתחי הסף</h4>' +
      '<p dir="ltr" style="text-align:center">V<sub>T</sub> = 2φ<sub>F</sub> + (2d/ε<sub>r</sub><sup>ox</sup>)·' +
      '√(eε<sub>r</sub>N<sub>a</sub>φ<sub>F</sub>/ε₀)</p>' +
      '<p>המקדם הגיאומטרי: <span dir="ltr">(2d/ε<sub>r</sub><sup>ox</sup>)·√(eε<sub>r</sub>/ε₀) ≈ 1.18×10⁻¹²m²·√(N/C)</span>. ' +
      'פוטנציאל פרמי (<span dir="ltr">k<sub>B</sub>T/e = 0.0259V</span> בטמפ׳ החדר):</p>' +
      '<p dir="ltr" style="text-align:center">φ<sub>FA</sub> = 0.0259·ln(10¹⁵/1.5×10¹⁰) ≈ <b>0.29 V</b></p>' +
      '<p dir="ltr" style="text-align:center">φ<sub>FB</sub> = 0.0259·ln(10¹⁷/1.5×10¹⁰) ≈ <b>0.41 V</b></p>' +
      '<p dir="ltr" style="text-align:center">V<sub>TA</sub> ≈ 2(0.29) + 1.18×10⁻¹²·√(10²¹×0.29) ≈ 0.58 + 0.020 ⟹ <b>V<sub>TA</sub> ≈ 0.60 V</b></p>' +
      '<p dir="ltr" style="text-align:center">V<sub>TB</sub> ≈ 2(0.41) + 1.18×10⁻¹²·√(10²³×0.41) ≈ 0.81 + 0.24 ⟹ <b>V<sub>TB</sub> ≈ 1.06 V</b></p>' +

      '<h4>(ד) הקיבולים המינימליים</h4>' +
      '<p dir="ltr" style="text-align:center">C<sub>min</sub> = ε<sub>r</sub>ε<sub>r</sub><sup>ox</sup>ε₀ / ' +
      '(ε<sub>r</sub>d + ε<sub>r</sub><sup>ox</sup>w<sub>T</sub>), &nbsp; w<sub>T</sub> = 2√(ε<sub>r</sub>ε₀φ<sub>F</sub>/eN<sub>a</sub>)</p>' +
      '<p dir="ltr" style="text-align:center">w<sub>A</sub> = 2√(11.8×8.85×10⁻¹²×0.29 / 1.6×10⁻¹⁹×10²¹) ≈ 8.7×10⁻⁷m = 8.7×10⁻⁵cm</p>' +
      '<p dir="ltr" style="text-align:center">w<sub>B</sub> = 2√(11.8×8.85×10⁻¹²×0.41 / 1.6×10⁻¹⁹×10²³) ≈ 1.03×10⁻⁷m = 1.03×10⁻⁵cm</p>' +
      '<p dir="ltr" style="text-align:center">C<sub>A</sub><sup>min</sup> = (11.8×3.9×8.85×10⁻¹⁴) / (11.8×5×10⁻⁷ + 3.9×8.7×10⁻⁵) F/cm²</p>' +
      '<!-- verified: official solution had C_A^min ≈ 11.6 nF/cm²; recomputing its own stated numerator ' +
      '(4.0728×10⁻¹² F/cm) divided by its own stated denominator (3.452×10⁻⁴ cm) gives 1.180×10⁻⁸ F/cm² — ' +
      'i.e. C_A^min ≈ 11.8 nF/cm², not 11.6. -->' +
      '<p dir="ltr" style="text-align:center"><b>C<sub>A</sub><sup>min</sup> ≈ 11.8 nF/cm²</b></p>' +
      '<p dir="ltr" style="text-align:center">C<sub>B</sub><sup>min</sup> = (11.8×3.9×8.85×10⁻¹⁴) / (11.8×5×10⁻⁷ + 3.9×1.03×10⁻⁵) F/cm²</p>' +
      '<p dir="ltr" style="text-align:center"><b>C<sub>B</sub><sup>min</sup> ≈ 88.4 nF/cm²</b></p>' +

      '</div></details>'
  }
);
