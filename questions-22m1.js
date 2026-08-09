/* ============================================================
 *  questions-22m1.js — מבחן 2022, סמסטר ג׳, מועד א׳ (id: 22m1)
 *  מקור: course20132-year2022-semester3-moed1.pdf, אבישי אפרת.
 *
 *  הערה חשובה: קובץ המקור (8 עמ') מכיל אך ורק "שאלון מועד X" /
 *  "פתרון מועד X" — אין בו טופס Y כלל (לא בשאלון ולא בפתרון).
 *  לכן קובץ זה מכיל שלוש שאלות בלבד (Xq1..Xq3), ולא שש כפי
 *  שהתבנית הכללית מניחה. אין המצאה של טופס Y.
 * ============================================================ */

window.BANK_OPEN_QUESTIONS = window.BANK_OPEN_QUESTIONS || [];
window.BANK_OPEN_QUESTIONS.push(
  {
    id: "22m1-Xq1",
    cat: "sc-transport",
    difficulty: 4,
    skills: ["ריכוזי נשאים לא אחידים", "שדה חשמלי בשיווי משקל", "התנגדות אינטגרלית"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2022 · סמסטר ג׳ · מועד א׳ · טופס X",
    kind: "open",

    prompt: `<p>נתונה פיסת צורן (Si) בטמפרטורת החדר, שאורכה <span dir="ltr">L = 10 cm</span> ושטח החתך שלה <span dir="ltr">A = 1 cm²</span>. ראשית הפיסה ב-<span dir="ltr">x = −L/2</span> וסופה ב-<span dir="ltr">x = +L/2</span>.</p>
<p>הפיסה מאולחת באטומים תורמים באופן לא אחיד, כתלות ב-x, באופן הבא:</p>
<p><span dir="ltr">N<sub>d</sub>(x) = N<sub>d</sub>·[1 + cos(πx/L)],&nbsp;&nbsp; N<sub>d</sub> = 10<sup>17</sup> cm⁻³</span></p>
<table>
<tr><td>n<sub>i</sub></td><td><span dir="ltr">1.5 × 10<sup>10</sup> cm⁻³</span></td></tr>
<tr><td>μ<sub>n</sub></td><td><span dir="ltr">1400 cm²/V·sec</span></td></tr>
<tr><td>μ<sub>p</sub></td><td><span dir="ltr">500 cm²/V·sec</span></td></tr>
</table>
<p><b>(א)</b> (9 נק') (1) חשבו את ריכוז האלקטרונים, <span dir="ltr">n₀(x)</span>, ואת ריכוז החורים, <span dir="ltr">p₀(x)</span>, כתלות ב-x לאורך המל״מ.<br>
(2) סרטטו איכותית שני גרפים — האחד של <span dir="ltr">n₀(x)</span> והשני של <span dir="ltr">p₀(x)</span> — לאורך המל״מ. ציינו על כל גרף את הערכים ב-<span dir="ltr">x = −L/2</span>, ב-<span dir="ltr">x = 0</span> וב-<span dir="ltr">x = +L/2</span>.</p>
<p><b>(ב)</b> (9 נק') חשבו את וקטור השדה החשמלי, <span dir="ltr">ε⃗(x)</span>, כתלות ב-x לאורך המל״מ. ציינו על הגרפים מסעיף (א) את כיוונו בכל מקום לאורך המל״מ. נמקו!</p>
<p><b>(ג)</b> (8 נק') (1) חשבו את זרם הסחיפה, <span dir="ltr">I<sub>n</sub><sup>drift</sup>(x)</span>, ואת זרם הדיפוזיה, <span dir="ltr">I<sub>n</sub><sup>diff</sup>(x)</span>, של האלקטרונים כתלות ב-x לאורך המל״מ.<br>
(2) ציינו על הגרף של <span dir="ltr">n₀(x)</span> מסעיף (א) את כיווני הזרמים הנ״ל, ועל הגרף של <span dir="ltr">p₀(x)</span> את כיווני הזרמים <span dir="ltr">I<sub>p</sub><sup>drift</sup>(x)</span> ו-<span dir="ltr">I<sub>p</sub><sup>diff</sup>(x)</span> (אין צורך לחשבם). נמקו!<br>
(3) האם המערכת בשיווי משקל? נמקו!</p>
<p><b>(ד)</b> (8 נק') חשבו את ההתנגדות, R, של פיסת המל״מ.<br>
<i>הדרכה:</i> חשבו תחילה את ההתנגדות, <span dir="ltr">dR</span>, של אלמנט אורך קצר, <span dir="ltr">dx</span>, בפיסה, והתייחסו אל הפיסה כולה כאל אוסף נגדים המחוברים בטור. תוכלו להיעזר בתוצאת האינטגרל: <span dir="ltr">∫₀^(π/2) du/(1+cos u) = 1</span>.</p>`,

    hint: "בכל תחום ה-x מתקיים N_d(x) ≫ n_i (אפילו בקצוות, כש-cos=0), כך שאפשר להניח דלדול מלא ולקבל n₀≈N_d(x); את p₀ קבלו מעקרון הפעולה ההמונית. עבור השדה — בשיווי משקל אין זרם נטו, כך שסחיפה=−דיפוזיה.",

    qtype: "analysis",

    html: `<p>נתונה פיסת צורן (Si) בטמפרטורת החדר, שאורכה <span dir="ltr">L = 10 cm</span> ושטח החתך שלה <span dir="ltr">A = 1 cm²</span>. ראשית הפיסה ב-<span dir="ltr">x = −L/2</span> וסופה ב-<span dir="ltr">x = +L/2</span>.</p>
<p>הפיסה מאולחת באטומים תורמים באופן לא אחיד, כתלות ב-x, באופן הבא:</p>
<p><span dir="ltr">N<sub>d</sub>(x) = N<sub>d</sub>·[1 + cos(πx/L)],&nbsp;&nbsp; N<sub>d</sub> = 10<sup>17</sup> cm⁻³</span></p>
<table>
<tr><td>n<sub>i</sub></td><td><span dir="ltr">1.5 × 10<sup>10</sup> cm⁻³</span></td></tr>
<tr><td>μ<sub>n</sub></td><td><span dir="ltr">1400 cm²/V·sec</span></td></tr>
<tr><td>μ<sub>p</sub></td><td><span dir="ltr">500 cm²/V·sec</span></td></tr>
</table>
<p><b>(א)</b> (9 נק') (1) חשבו את ריכוז האלקטרונים, <span dir="ltr">n₀(x)</span>, ואת ריכוז החורים, <span dir="ltr">p₀(x)</span>, כתלות ב-x לאורך המל״מ.<br>
(2) סרטטו איכותית שני גרפים — האחד של <span dir="ltr">n₀(x)</span> והשני של <span dir="ltr">p₀(x)</span> — לאורך המל״מ. ציינו על כל גרף את הערכים ב-<span dir="ltr">x = −L/2</span>, ב-<span dir="ltr">x = 0</span> וב-<span dir="ltr">x = +L/2</span>.</p>
<p><b>(ב)</b> (9 נק') חשבו את וקטור השדה החשמלי, <span dir="ltr">ε⃗(x)</span>, כתלות ב-x לאורך המל״מ. ציינו על הגרפים מסעיף (א) את כיוונו בכל מקום לאורך המל״מ. נמקו!</p>
<p><b>(ג)</b> (8 נק') (1) חשבו את זרם הסחיפה, <span dir="ltr">I<sub>n</sub><sup>drift</sup>(x)</span>, ואת זרם הדיפוזיה, <span dir="ltr">I<sub>n</sub><sup>diff</sup>(x)</span>, של האלקטרונים כתלות ב-x לאורך המל״מ.<br>
(2) ציינו על הגרף של <span dir="ltr">n₀(x)</span> מסעיף (א) את כיווני הזרמים הנ״ל, ועל הגרף של <span dir="ltr">p₀(x)</span> את כיווני הזרמים <span dir="ltr">I<sub>p</sub><sup>drift</sup>(x)</span> ו-<span dir="ltr">I<sub>p</sub><sup>diff</sup>(x)</span> (אין צורך לחשבם). נמקו!<br>
(3) האם המערכת בשיווי משקל? נמקו!</p>
<p><b>(ד)</b> (8 נק') חשבו את ההתנגדות, R, של פיסת המל״מ.<br>
<i>הדרכה:</i> חשבו תחילה את ההתנגדות, <span dir="ltr">dR</span>, של אלמנט אורך קצר, <span dir="ltr">dx</span>, בפיסה, והתייחסו אל הפיסה כולה כאל אוסף נגדים המחוברים בטור. תוכלו להיעזר בתוצאת האינטגרל: <span dir="ltr">∫₀^(π/2) du/(1+cos u) = 1</span>.</p>
<details class="sol"><summary>פתרון</summary><div class="body">
<h4>סעיף א — ריכוזי הנשאים</h4>
<p>לכל x בתחום <span dir="ltr">−L/2 ≤ x ≤ L/2</span> מתקיים <span dir="ltr">N_d(x) ≥ 10¹⁷ cm⁻³ ≫ n_i</span> (גם בקצוות, שם <span dir="ltr">cos(πx/L)=0</span> ועדיין <span dir="ltr">N_d(±L/2)=10¹⁷cm⁻³</span>), ולכן ניתן להניח דלדול מלא של התורמים:</p>
<p><span dir="ltr">n₀(x) ≈ N_d(x) = 10¹⁷ cm⁻³·[1 + cos(πx/10cm)]</span></p>
<p>ומעקרון הפעולה ההמונית <span dir="ltr">n₀p₀=n_i²</span>:</p>
<p><span dir="ltr">p₀(x) = n_i² / n₀(x) ≈ 2250 cm⁻³ / [1 + cos(πx/10cm)]</span></p>
<p>ערכים לאורך המל״מ (לשרטוט הגרפים האיכותיים):</p>
<table><tr><th>x</th><th>n₀(x)</th><th>p₀(x)</th></tr>
<tr><td dir="ltr">−5 cm</td><td dir="ltr">10¹⁷ cm⁻³</td><td dir="ltr">2250 cm⁻³</td></tr>
<tr><td dir="ltr">0</td><td dir="ltr">2×10¹⁷ cm⁻³</td><td dir="ltr">1125 cm⁻³</td></tr>
<tr><td dir="ltr">+5 cm</td><td dir="ltr">10¹⁷ cm⁻³</td><td dir="ltr">2250 cm⁻³</td></tr>
</table>
<p>הגרף של <span dir="ltr">n₀(x)</span> הוא "גבעה" סימטרית (מקסימום במרכז), והגרף של <span dir="ltr">p₀(x)</span> הוא "עמק" סימטרי (מינימום במרכז) — הפוך ל-n₀(x), כיוון שהם ביחס הופכי דרך <span dir="ltr">n_i²</span>.</p>
<h4>סעיף ב — השדה החשמלי</h4>
<p>בשיווי משקל (הצדקה מלאה בסעיף ג3) זרם האלקטרונים הכולל מתאפס בכל x, כך שזרם הסחיפה מבטל בדיוק את זרם הדיפוזיה:</p>
<p><span dir="ltr">0 = eμ_n n₀(x)ε(x) + eD_n·dn₀/dx&nbsp; ⟹&nbsp; ε(x) = −(k_BT/e)·(1/n₀(x))·dn₀/dx</span></p>
<p>לאחר גזירת <span dir="ltr">n₀(x)</span> והצבה:</p>
<p><span dir="ltr">ε⃗(x) = [πk_BT·sin(πx/L)] / [eL(1+cos(πx/L))] · x̂ ≈ 0.0081 V/cm · sin(πx/10cm)/[1+cos(πx/10cm)] · x̂</span></p>
<p><b>כיוון:</b> הדיפוזיה של האלקטרונים היא מהמרכז (ריכוז גבוה) כלפי הקצוות (ריכוז נמוך); כדי לאזן אותה השדה חייב להפעיל על האלקטרונים כוח כלפי המרכז — ומכיוון שמטענם שלילי, כיוון השדה עצמו הוא <b>מהמרכז כלפי הקצוות</b> בכל מקום. בהתאמה: הדיפוזיה של החורים היא מהקצוות למרכז, והשדה (באותו כיוון, מהמרכז לקצוות) דוחף אותם כלפי הקצוות — עקבי.</p>
<h4>סעיף ג — זרמי האלקטרונים ושיווי המשקל</h4>
<p>(1)</p>
<p><span dir="ltr">I_n<sup>drift</sup>(x) = A·e·μ_n·ε(x)·n₀(x) = (πk_BT·A·μ_n·N_d/L)·sin(πx/L) ≈ 0.18 A · sin(πx/10cm)</span></p>
<p><span dir="ltr">I_n<sup>diff</sup>(x) = A·e·D_n·dn₀/dx = −I_n<sup>drift</sup>(x) ≈ −0.18 A · sin(πx/10cm)</span></p>
<p>(2) כיווני <span dir="ltr">I_n<sup>drift</sup></span> ו-<span dir="ltr">I_n<sup>diff</sup></span> מנוגדים זה לזה בכל x (כנדרש מהשוויון בסעיף ג1). מאותה סיבה שהוסברה בסעיף ב, גם עבור החורים כיווני <span dir="ltr">I_p<sup>drift</sup></span> ו-<span dir="ltr">I_p<sup>diff</sup></span> מנוגדים זה לזה. מכיוון שהחורים תורמים לזרם בכיוון תנועתם, ואילו האלקטרונים תורמים לזרם נגד כיוון תנועתם, מתקבל שבכל מקום כיווני זרם הסחיפה והדיפוזיה של האלקטרונים והחורים — זהים בהתאמה (למשל <span dir="ltr">I_n<sup>drift</sup></span> ו-<span dir="ltr">I_p<sup>diff</sup></span> באותו כיוון).</p>
<p>(3) כן. זרם הסחיפה וזרם הדיפוזיה שווים בגודלם ומנוגדים בכיוונם עבור כל סוג נשא בנפרד, כך שהזרם הכולל (של אלקטרונים ושל חורים) מתאפס בכל x — אין זרם נטו בשום מקום ⟸ המערכת בשיווי משקל תרמודינמי (זהו מבנה מאולח בלבד, ללא מתח מופעל).</p>
<h4>סעיף ד — ההתנגדות הכוללת</h4>
<p>המוליכות תלויה במיקום (שולטים בה האלקטרונים כי <span dir="ltr">n₀≫p₀</span>): <span dir="ltr">σ(x) ≈ eμ_n n₀(x)</span>. לכן מתייחסים לפיסה כאוסף נגדים טוריים אינפיניטסימליים:</p>
<p><span dir="ltr">dR(x) = dx/(A·σ(x)) = dx / {A·e·μ_n·N_d·[1+cos(πx/L)]}</span></p>
<p>אינטגרציה על פני האורך כולו (בעזרת ההצבה <span dir="ltr">u=πx/L</span> וניצול תוצאת האינטגרל הנתון, כפול 2 מסימטריה):</p>
<p><span dir="ltr">R = 2L / (πAeμ_nN_d)</span></p>
<p>הצבת מספרים:</p>
<p><span dir="ltr">R = (2×10cm) / (π×1cm²×1.6×10⁻¹⁹C×1400 cm²/Vsec×10¹⁷cm⁻³) ≈ 0.28 Ω</span></p>
</div></details>`
  },

  {
    id: "22m1-Xq2",
    cat: "pn-diode",
    difficulty: 4,
    skills: ["צומת p⁺n ואילוח לא סימטרי", "פוטנציאל מגע", "זרם רוויה הפוך"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2022 · סמסטר ג׳ · מועד א׳ · טופס X",
    kind: "open",

    prompt: `<p>צומת <span dir="ltr">pn</span>, העשויה <span dir="ltr">InSb</span>, מצויה בטמפ' החדר ומאולחת ב-<span dir="ltr">N<sub>a</sub> = 10²⁰ cm⁻³</span> וב-<span dir="ltr">N<sub>d</sub> = 3×10¹⁶ cm⁻³</span>.</p>
<table>
<tr><td><span dir="ltr">τ<sub>p</sub></span></td><td><span dir="ltr">8 nsec</span></td><td><span dir="ltr">μ<sub>p</sub></span></td><td><span dir="ltr">1700 cm²/Vsec</span></td></tr>
<tr><td><span dir="ltr">τ<sub>n</sub></span></td><td><span dir="ltr">1.9 nsec</span></td><td><span dir="ltr">μ<sub>n</sub></span></td><td><span dir="ltr">10⁵ cm²/Vsec</span></td></tr>
<tr><td><span dir="ltr">ε<sub>r</sub></span></td><td><span dir="ltr">17.7</span></td><td><span dir="ltr">n<sub>i</sub></span></td><td><span dir="ltr">2×10¹⁶ cm⁻³</span></td></tr>
</table>
<p>על הצומת מופעל ממתח אחורי, <span dir="ltr">V<sub>r</sub> = 0.2 V</span>.</p>
<p><b>(א)</b> (9 נק') (1) האם הצומת מטיפוס <span dir="ltr">p⁺n</span>, <span dir="ltr">pn</span> או <span dir="ltr">pn⁺</span>?<br>
(2) חשבו את ריכוזי נושאי המטען הרוב ונושאי המטען המיעוט משני צדי הצומת.</p>
<p><b>(ב)</b> (8 נק') חשבו את פוטנציאל המגע, <span dir="ltr">V₀</span>.</p>
<p><b>(ג)</b> (8 נק') (1) חשבו את גבולות אזור המחסור, <span dir="ltr">x<sub>p0</sub></span> ו-<span dir="ltr">x<sub>n0</sub></span>.<br>
(2) חשבו את וקטור השדה החשמלי, <span dir="ltr">ε⃗₀</span>, במרכז הצומת.</p>
<p><b>(ד)</b> (8 נק') (1) חשבו את צפיפות הזרם, <span dir="ltr">J</span>, דרך המל״מ.<br>
(2) הסבירו את הבעייתיות בצפיפות הזרם שהתקבלה! מעוניינים למזער את הבעייתיות, בין השאר, גם באמצעות שינוי ריכוז האילוח באחד הצדדים של הצומת בלבד. באיזה צד של הצומת ובכמה סדרי גודל ניתן לשנות את ריכוז האילוח כדי לשפר את התוצאה במתח הנתון?</p>`,

    hint: "בדקו את סדרי הגודל של Nd מול ni בצד ה-n — הם קרובים, כך שאי אפשר להניח nn≈Nd; פתרו משוואת ריבועית מעקרון הפעולה ההמונית + נייטרליות מטען. לפוטנציאל המגע השתמשו בנוסחה עם יחס ריכוזי הרוב/מיעוט, לא בנוסחה שמניחה nn≈Nd.",

    qtype: "analysis",

    html: `<p>צומת <span dir="ltr">pn</span>, העשויה <span dir="ltr">InSb</span>, מצויה בטמפ' החדר ומאולחת ב-<span dir="ltr">N<sub>a</sub> = 10²⁰ cm⁻³</span> וב-<span dir="ltr">N<sub>d</sub> = 3×10¹⁶ cm⁻³</span>.</p>
<table>
<tr><td><span dir="ltr">τ<sub>p</sub></span></td><td><span dir="ltr">8 nsec</span></td><td><span dir="ltr">μ<sub>p</sub></span></td><td><span dir="ltr">1700 cm²/Vsec</span></td></tr>
<tr><td><span dir="ltr">τ<sub>n</sub></span></td><td><span dir="ltr">1.9 nsec</span></td><td><span dir="ltr">μ<sub>n</sub></span></td><td><span dir="ltr">10⁵ cm²/Vsec</span></td></tr>
<tr><td><span dir="ltr">ε<sub>r</sub></span></td><td><span dir="ltr">17.7</span></td><td><span dir="ltr">n<sub>i</sub></span></td><td><span dir="ltr">2×10¹⁶ cm⁻³</span></td></tr>
</table>
<p>על הצומת מופעל ממתח אחורי, <span dir="ltr">V<sub>r</sub> = 0.2 V</span>.</p>
<p><b>(א)</b> (9 נק') (1) האם הצומת מטיפוס <span dir="ltr">p⁺n</span>, <span dir="ltr">pn</span> או <span dir="ltr">pn⁺</span>?<br>
(2) חשבו את ריכוזי נושאי המטען הרוב ונושאי המטען המיעוט משני צדי הצומת.</p>
<p><b>(ב)</b> (8 נק') חשבו את פוטנציאל המגע, <span dir="ltr">V₀</span>.</p>
<p><b>(ג)</b> (8 נק') (1) חשבו את גבולות אזור המחסור, <span dir="ltr">x<sub>p0</sub></span> ו-<span dir="ltr">x<sub>n0</sub></span>.<br>
(2) חשבו את וקטור השדה החשמלי, <span dir="ltr">ε⃗₀</span>, במרכז הצומת.</p>
<p><b>(ד)</b> (8 נק') (1) חשבו את צפיפות הזרם, <span dir="ltr">J</span>, דרך המל״מ.<br>
(2) הסבירו את הבעייתיות בצפיפות הזרם שהתקבלה! מעוניינים למזער את הבעייתיות, בין השאר, גם באמצעות שינוי ריכוז האילוח באחד הצדדים של הצומת בלבד. באיזה צד של הצומת ובכמה סדרי גודל ניתן לשנות את ריכוז האילוח כדי לשפר את התוצאה במתח הנתון?</p>
<details class="sol"><summary>פתרון</summary><div class="body">
<h4>סעיף א — סוג הצומת וריכוזי הנשאים</h4>
<p>(1) <span dir="ltr">N_a = 10²⁰cm⁻³</span> גדול פי <span dir="ltr">10⁴</span> מ-<span dir="ltr">N_d = 3×10¹⁶cm⁻³</span> — אילוח צד ה-p חזק בהרבה ⟹ <b><span dir="ltr">p⁺n</span></b>.</p>
<p>(2) בצד ה-p: <span dir="ltr">N_a ≫ n_i</span> (פי 5000) כך שההנחה הרגילה תקפה: <span dir="ltr">p_p ≈ N_a = 10²⁰cm⁻³</span>, ומעקרון הפעולה ההמונית <span dir="ltr">n_p = n_i²/p_p ≈ 4×10¹² cm⁻³</span>.</p>
<p>בצד ה-n: <span dir="ltr">N_d = 3×10¹⁶cm⁻³</span> ו-<span dir="ltr">n_i = 2×10¹⁶cm⁻³</span> מאותו סדר גודל — לא ניתן להניח <span dir="ltr">n_n≈N_d</span>! משתמשים בעקרון הפיצוי (נייטרליות מטען + פעולה המונית):</p>
<p><span dir="ltr">n_n − N_d = p_n = n_i²/n_n&nbsp; ⟹&nbsp; n_n² − N_d·n_n − n_i² = 0&nbsp; ⟹&nbsp; n_n = [N_d+√(N_d²+4n_i²)]/2</span></p>
<p><span dir="ltr">n_n = [3×10¹⁶ + √((3×10¹⁶)²+4(2×10¹⁶)²)]/2 = (3×10¹⁶+5×10¹⁶)/2 ⟹ n_n = 4×10¹⁶ cm⁻³</span></p>
<p><span dir="ltr">p_n = n_i²/n_n = (2×10¹⁶)²/4×10¹⁶ ⟹ p_n = 10¹⁶ cm⁻³</span></p>
<p>וכצפוי, האילוח בצד ה-n אינו משמעותי לעומת <span dir="ltr">n_i</span>.</p>
<h4>סעיף ב — פוטנציאל המגע</h4>
<p>אי אפשר להשתמש בנוסחה הפשוטה שמניחה <span dir="ltr">n_n≈N_d</span> (לא תקפה כאן), ולכן משתמשים בנוסחת היחס הכללית:</p>
<p><span dir="ltr">V₀ = (k_BT/e)·ln(p_p/p_n) = (k_BT/e)·ln(n_n/n_p)</span></p>
<p><span dir="ltr">p_p/p_n = 10²⁰/10¹⁶ = 10⁴ = 4×10¹⁶/4×10¹² = n_n/n_p</span> ✓ (עקביות בין שתי הצורות)</p>
<p><span dir="ltr">V₀ = 0.0259V × ln(10⁴) ≈ 0.24 V</span></p>
<h4>סעיף ג — אזור המחסור והשדה במרכזו</h4>
<p>(1) מכיוון <span dir="ltr">N_d ≪ N_a</span>:</p>
<p><span dir="ltr">w ≈ √[2ε_rε₀(V₀+V_r)/(eN_d)] = √[2×17.7×8.85×10⁻¹²×(0.44V)/(1.6×10⁻¹⁹C×3×10²²m⁻³)] ≈ 1.69×10⁻⁷m = 1.69×10⁻⁵cm</span></p>
<p><span dir="ltr">x_n0 = N_aw/(N_a+N_d) ≈ w ≈ 1.69×10⁻⁵ cm</span></p>
<p><span dir="ltr">x_p0 = N_dw/(N_a+N_d) ≈ (N_d/N_a)w = (3×10¹⁶/10²⁰)×1.69×10⁻⁵cm ≈ 5.07×10⁻⁹ cm</span></p>
<p>(2) כיוון השדה הוא מצד ה-n לצד ה-p של הצומת (מהמטען החיובי החשוף — יונים תורמים מיונן — אל המטען השלילי החשוף):</p>
<p><span dir="ltr">V₀+V_r = ε₀w/2&nbsp; ⟹&nbsp; ε₀ = 2(V₀+V_r)/w ≈ 2×0.44V/1.69×10⁻⁵cm ≈ 5.21×10⁴ V/cm</span></p>
<h4>סעיף ד — צפיפות זרם הזליגה</h4>
<p>(1) בממתח אחורי הזרם הוא זרם הרוויה ההפוך (זליגה):</p>
<p><span dir="ltr">J = −e(D_p/L_p·p_n + D_n/L_n·n_p),&nbsp; D/L=√(D/τ),&nbsp; D=k_BTμ/e&nbsp; ⟹&nbsp; J = −√(k_BTe)·[√(μ_p/τ_p)·p_n + √(μ_n/τ_n)·n_p]</span></p>
<p><span dir="ltr">√(k_BTe) = √(0.0259×1.6×10⁻¹⁹J × 1.6×10⁻¹⁹C) ≈ 2.57×10⁻²⁰ √(J·C)</span></p>
<p><span dir="ltr">√(μ_p/τ_p)·p_n = √(1700cm²/Vsec ÷ 8×10⁻⁹sec) × 10¹⁶cm⁻³ ≈ 4.61×10²¹</span></p>
<p><span dir="ltr">√(μ_n/τ_n)·n_p = √(10⁵cm²/Vsec ÷ 1.9×10⁻⁹sec) × 4×10¹²cm⁻³ ≈ 2.90×10¹⁹</span></p>
<p><span dir="ltr">J ≈ −2.57×10⁻²⁰ × (4.61×10²¹ + 2.90×10¹⁹) ≈ −119.2 A/cm²</span></p>
<p>(2) צפיפות זרם בסדר גודל של מאות אמפר לסמ״ר בממתח אחורי היא בעייתית ביותר — במקום זרם זליגה זעיר כמצופה בממתח אחורי, מתקבל זרם ענק שיגרום לפריצה תרמית/חשמלית של הדיודה. האיבר הדומיננטי הוא זה של <span dir="ltr">p_n</span> (תרומתו גדולה פי כ-160 מזו של <span dir="ltr">n_p</span>), ולכן כדי לצמצם אותו אין טעם להקטין את <span dir="ltr">p_n</span> מעבר לשני סדרי גודל (כי אז שני האיברים יתאזנו). להקטין את <span dir="ltr">p_n</span> בשני סדרי גודל צריך להגדיל את <span dir="ltr">n_n</span> בשני סדרי גודל (כי <span dir="ltr">p_n=n_i²/n_n</span>), ולשם כך יש <b>להגדיל את N_d בצד ה-n בכשני סדרי גודל</b> (כך ש-<span dir="ltr">N_d≫n_i</span> ותקף הקירוב הרגיל <span dir="ltr">n_n≈N_d</span>).</p>
</div></details>`
  },

  {
    id: "22m1-Xq3",
    cat: "mos-mosfet",
    difficulty: 3,
    skills: ["דיאגרמת פסים של MOS", "מתח סף V_T", "רוחב אזור מחסור"],
    origin: "official",
    sourceLabel: "🎓 מבחן 2022 · סמסטר ג׳ · מועד א׳ · טופס X",
    kind: "open",

    prompt: `<p>נתונה דיאגרמת פסים עבור קבל <span dir="ltr">MOS</span> אידאלי בטמפרטורת החדר, עם המל״מ מחובר להארקה ומתח שער <span dir="ltr">V_g</span> מופעל דרך המתכת. מהדיאגרמה: כיפוף הפסים בשפת המל״מ (פוטנציאל השפה) הוא <span dir="ltr">eφ_s = 0.2 eV</span>, ופער האנרגיה הכולל בין רמת פרמי במתכת לרמה התוך-אינטרינזית בעומק המל״מ (הקשור למתח השער) הוא <span dir="ltr">0.3 eV</span>. בדיאגרמה מסומן גם הגודל <span dir="ltr">eφ_F</span> — הפרש האנרגיה בין הרמה התוך-אינטרינזית לרמת פרמי בעומק המל״מ.</p>
<table>
<tr><td><span dir="ltr">n<sub>i</sub></span></td><td><span dir="ltr">1.5 × 10¹⁰ cm⁻³</span></td></tr>
<tr><td><span dir="ltr">d</span> (עובי החמצון)</td><td><span dir="ltr">10⁻⁵ cm</span></td></tr>
<tr><td><span dir="ltr">ε<sub>r</sub><sup>ox</sup></span></td><td><span dir="ltr">3.9</span></td></tr>
<tr><td><span dir="ltr">ε<sub>r</sub></span></td><td><span dir="ltr">11.8</span></td></tr>
</table>
<p><b>(א)</b> (8 נק') (1) האם המל״מ מסוג n או מסוג p?<br>
(2) מהו מצב העבודה של הקבל?<br>
(3) מהו כיוון השדה החשמלי?</p>
<p><b>(ב)</b> (9 נק') חשבו את: (1) המתח על שכבת החמצון, <span dir="ltr">V_ox</span>. (2) ריכוז האילוח.</p>
<p><b>(ג)</b> (8 נק') חשבו את: (1) <span dir="ltr">φ_F</span>. (2) מתח הסף, <span dir="ltr">V_T</span>.</p>
<p><b>(ד)</b> (8 נק') חשבו את: (1) רוחב אזור המחסור, <span dir="ltr">w</span>. (2) השדה החשמלי, <span dir="ltr">ε₀</span>, על שפת המל״מ.</p>`,

    hint: "מכיפוף הפסים כלפי מטה בשפה קובעים את סוג המל״מ ואת מצב העבודה (0<φs<φF ⟹ מחסור). Vox מתקבל ישירות מהדיאגרמה כהפרש בין שני הערכים הנתונים; ריכוז האילוח יוצא מתוך הנוסחה המקשרת Vox לריכוז דרך φs.",

    qtype: "analysis",

    html: `<p>נתונה דיאגרמת פסים עבור קבל <span dir="ltr">MOS</span> אידאלי בטמפרטורת החדר, עם המל״מ מחובר להארקה ומתח שער <span dir="ltr">V_g</span> מופעל דרך המתכת. מהדיאגרמה: כיפוף הפסים בשפת המל״מ (פוטנציאל השפה) הוא <span dir="ltr">eφ_s = 0.2 eV</span>, ופער האנרגיה הכולל בין רמת פרמי במתכת לרמה התוך-אינטרינזית בעומק המל״מ (הקשור למתח השער) הוא <span dir="ltr">0.3 eV</span>. בדיאגרמה מסומן גם הגודל <span dir="ltr">eφ_F</span> — הפרש האנרגיה בין הרמה התוך-אינטרינזית לרמת פרמי בעומק המל״מ.</p>
<table>
<tr><td><span dir="ltr">n<sub>i</sub></span></td><td><span dir="ltr">1.5 × 10¹⁰ cm⁻³</span></td></tr>
<tr><td><span dir="ltr">d</span> (עובי החמצון)</td><td><span dir="ltr">10⁻⁵ cm</span></td></tr>
<tr><td><span dir="ltr">ε<sub>r</sub><sup>ox</sup></span></td><td><span dir="ltr">3.9</span></td></tr>
<tr><td><span dir="ltr">ε<sub>r</sub></span></td><td><span dir="ltr">11.8</span></td></tr>
</table>
<p><b>(א)</b> (8 נק') (1) האם המל״מ מסוג n או מסוג p?<br>
(2) מהו מצב העבודה של הקבל?<br>
(3) מהו כיוון השדה החשמלי?</p>
<p><b>(ב)</b> (9 נק') חשבו את: (1) המתח על שכבת החמצון, <span dir="ltr">V_ox</span>. (2) ריכוז האילוח.</p>
<p><b>(ג)</b> (8 נק') חשבו את: (1) <span dir="ltr">φ_F</span>. (2) מתח הסף, <span dir="ltr">V_T</span>.</p>
<p><b>(ד)</b> (8 נק') חשבו את: (1) רוחב אזור המחסור, <span dir="ltr">w</span>. (2) השדה החשמלי, <span dir="ltr">ε₀</span>, על שפת המל״מ.</p>
<details class="sol"><summary>פתרון</summary><div class="body">
<h4>סעיף א — סוג המל״מ, מצב עבודה וכיוון שדה</h4>
<p>(1) רמת פרמי בעומק המל״מ קרובה יותר לפס הערכיות מאשר לפס ההולכה (כלומר <span dir="ltr">E_F<E_i</span>, כך ש-<span dir="ltr">φ_F=(E_i−E_F)/e>0</span>) ⟹ המל״מ הוא <b><span dir="ltr">type-p</span></b>.</p>
<p>(2) מהדיאגרמה מתקיים <span dir="ltr">0<φ_s<φ_F</span> — הפסים מתכופפים בשפה אך לא מספיק כדי להפוך את הסוג ⟹ <b>מצב מחסור (depletion)</b>.</p>
<p>(3) כיפוף הפסים כלפי מטה בשפת המל״מ ⟹ המתח שם חיובי ⟹ הפוטנציאל במתכת גבוה מזה שבמל״מ ⟹ השדה, המצביע מפוטנציאל גבוה לנמוך, כיוונו <b>מהמתכת אל תוך המל״מ</b> (ימינה, לפי כיווניות הדיאגרמה).</p>
<h4>סעיף ב — מתח החמצון וריכוז האילוח</h4>
<p>(1) ישירות מהדיאגרמה: <span dir="ltr">V_ox = V_g − φ_s = 0.3V − 0.2V = 0.1 V</span></p>
<p>(2) מנוסחת מתח החמצון באזור מחסור, <span dir="ltr">V_ox=(d/ε_r^ox)·√(2eN_aφ_s/ε₀)</span>, מבודדים <span dir="ltr">N_a</span>:</p>
<p><span dir="ltr">N_a = (ε_r^ox·V_ox/d)² · ε₀/(2eε_rφ_s)</span></p>
<p><span dir="ltr">N_a = (3.9×0.1V/10⁻⁷m)² × 8.85×10⁻¹² / (2×1.6×10⁻¹⁹C×11.8×0.2V) ≈ 1.78×10²⁰ m⁻³ = 1.78×10¹⁴ cm⁻³</span></p>
<h4>סעיף ג — φ_F ומתח הסף</h4>
<p>(1) <span dir="ltr">φ_F = (k_BT/e)·ln(N_a/n_i) = 0.0259V × ln(1.78×10¹⁴/1.5×10¹⁰) ≈ 0.24 V</span></p>
<p>(2) <span dir="ltr">V_T = 2φ_F + (2d/ε_r^ox)·√(eN_aε_rφ_F/ε₀)</span></p>
<p><span dir="ltr">V_T ≈ 2×0.24V + (2×10⁻⁷m/3.9)×√(1.6×10⁻¹⁹×1.78×10²⁰×11.8×0.24 / 8.85×10⁻¹²) ≈ 0.63 V</span></p>
<h4>סעיף ד — רוחב אזור המחסור והשדה בשפה</h4>
<p>(1) <span dir="ltr">φ_s = eN_aw²/(2ε)&nbsp; ⟹&nbsp; w = √(2ε_rε₀φ_s/(eN_a))</span></p>
<p><span dir="ltr">w = √(2×11.8×8.85×10⁻¹²×0.2V / (1.6×10⁻¹⁹C×1.78×10²⁰m⁻³)) ≈ 1.2×10⁻⁶ m = 1.2×10⁻⁴ cm</span></p>
<p>(2) <span dir="ltr">φ_s = ε₀w/2&nbsp; ⟹&nbsp; ε₀ = 2φ_s/w ≈ 2×0.2V/1.2×10⁻⁴cm ≈ 3333.3 V/cm</span></p>
</div></details>`
  }
);
