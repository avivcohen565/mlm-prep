/* ============================================================
 *  questions-25s2m1.js — מבחן 2025, סמסטר ב׳, מועד א׳ (id: 25s2m1).
 *
 *  הערה חשובה: קובץ המבחן המקורי (11 עמודים) מכיל טופס בחינה
 *  יחיד בלבד (מסומן "שאלון X" / "פתרון X" בגוף הקובץ) — אין בו
 *  טופס Y נפרד (לא שאלון Y ולא פתרון Y מופיעים באף אחד מ-11
 *  העמודים). לכן קובץ זה מכיל רק את 3 השאלות של טופס X
 *  (Xq1..Xq3). לא הומצא תוכן לטופס Y.
 * ============================================================ */

window.BANK_OPEN_QUESTIONS = window.BANK_OPEN_QUESTIONS || [];

(function () {
  "use strict";

  var SRC_X = "🎓 מבחן 2025 · סמסטר ב׳ · מועד א׳ · טופס X";

  /* ============================================================
   * Xq1 — sc-transport: גלאי קרינה מבוסס מל"מ (InP) בקונפיגורציית
   * פוטו-מוליכות (photoconductor).
   * ============================================================ */

  var xq1Body =
    '<p>נתון גלאי קרינה בעל המבנה המתואר בסרטוט: פס מל"מ מלבני ' +
    '(רוחב <span dir="ltr">W</span>, אורך <span dir="ltr">L</span>, עובי <span dir="ltr">t</span>), ' +
    'עם מגעים משני קצוות ה-<span dir="ltr">L</span> ומד זרם (A) בטור עם מקור מתח. ' +
    'מתח <span dir="ltr">V = 1V</span> מופעל על המל"מ, ומד הזרם מודד את הזרם הכולל במערכת. ' +
    'הגלאי עשוי ממל"מ מסוג <span dir="ltr">InP</span> בעל אילוח מקבלים משמעותי (מל"מ מסוג p). ' +
    'כמו כן נתון כי כאשר אין קרינה, מד הזרם מראה זרם חושך <span dir="ltr">I<sub>0</sub> = 20.8nA</span>.</p>' +
    '<div class="v-table"><table><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody>' +
    '<tr><td dir="ltr">n<sub>i</sub> = 10⁷cm⁻³</td><td dir="ltr">τ<sub>n</sub> = τ<sub>p</sub> = 10⁻⁷s</td>' +
    '<td dir="ltr">L = 10cm</td><td dir="ltr">t = 10⁻³cm</td></tr>' +
    '<tr><td dir="ltr">μ<sub>n</sub> = 5400 cm²/V·s</td><td dir="ltr">μ<sub>p</sub> = 130 cm²/V·s</td>' +
    '<td dir="ltr">W = 1cm</td><td dir="ltr">E<sub>g</sub> = 1.344eV</td></tr>' +
    '</tbody></table></div>' +
    '<p><b>א. (5 נק׳)</b> מהו אורך הגל המקסימלי <span dir="ltr">λ<sub>max</sub></span> שגלאי זה יכול לגלות?</p>' +
    '<p><b>ב. (5 נק׳)</b> האם יש הבדל ביעילות הגלאי בתחום האור הנראה ' +
    '(<span dir="ltr">400–750nm</span>) בהשוואה לתחום שסמוך מאוד ל-<span dir="ltr">λ<sub>max</sub></span>? נמקו בקצרה.</p>' +
    '<p><b>ג. (6 נק׳)</b> חשבו את ריכוזי נושאי המטען במצב שיווי משקל.</p>' +
    '<p><b>ד. (5 נק׳)</b> חשבו את המרחק הממוצע שאלקטרון עובר מהרגע שעולה לפס ההולכה ועד שהוא חוזר לפס הערכיות.</p>' +
    '<p>מקרינים על הגלאי אור מונוכרומטי בעל אורך גל <span dir="ltr">λ = 775nm</span>. ' +
    'נתון כי הספק הקרינה שנספג בגלאי הוא <span dir="ltr">P = 2.56mW</span>. הניחו כי הקרינה נספגת בכל הגלאי באופן אחיד.</p>' +
    '<p><b>ה. (6 נק׳)</b> חשבו את הספק החום שנמסר לגלאי על ידי הקרינה.</p>' +
    '<p><b>ו. (6 נק׳)</b> חשבו את העלייה בזרם בעקבות ההארה.</p>';

  var xq1Sol =
    '<details class="sol"><summary>פתרון</summary><div class="body">' +
    '<h4>א. אורך הגל המקסימלי</h4>' +
    '<p>גלאי בליעה מגלה פוטון רק אם <span dir="ltr">E<sub>ph</sub> ≥ E<sub>g</sub></span>, כלומר <span dir="ltr">λ ≤ λ<sub>max</sub> = hc/E<sub>g</sub></span>.</p>' +
    '<p><span dir="ltr">λ<sub>max</sub> = 1239.84 eV·nm / 1.344eV ≈ 922nm</span></p>' +
    '<h4>ב. השוואת יעילות</h4>' +
    '<p>מקדם הבליעה <span dir="ltr">α</span> במל"מ בעל פער אנרגיה ישיר (כמו InP) גדל בחדות ממש מעל <span dir="ltr">E<sub>g</sub></span> ' +
    'ומגיע לרוויה (טיפוסית <span dir="ltr">α ~ 10⁴cm⁻¹</span>) כבר קרוב לסף, בעוד שממש ליד <span dir="ltr">E<sub>g</sub></span> ' +
    '(כלומר ליד <span dir="ltr">λ<sub>max</sub></span>) הוא קטן בהרבה. האור הנראה (<span dir="ltr">400–750nm</span>) מתאים לאנרגיית פוטון ' +
    'גבוהה בהרבה מ-<span dir="ltr">E<sub>g</sub>=1.344eV</span> (למשל ב-<span dir="ltr">λ=600nm</span>, <span dir="ltr">E<sub>ph</sub>≈2.07eV</span>) — ' +
    'שם <span dir="ltr">α</span> גדול ואורך הבליעה <span dir="ltr">1/α</span> קצר בהרבה מעובי הגלאי <span dir="ltr">t=10⁻³cm</span>, כך שכמעט ' +
    'כל הפוטונים נבלעים. לעומת זאת ליד <span dir="ltr">λ<sub>max</sub></span>, <span dir="ltr">α</span> קטן, אורך הבליעה ארוך בהרבה מ-<span dir="ltr">t</span>, ' +
    'ורוב הפוטונים חולפים דרך העובי הדק <b>מבלי</b> להיבלע. לכן כן יש הבדל משמעותי — היעילות בתחום הנראה גבוהה בהרבה מהיעילות ליד <span dir="ltr">λ<sub>max</sub></span>.</p>' +
    '<h4>ג. ריכוזי נושאי מטען בשיווי משקל</h4>' +
    '<p>בחושך זורם רק זרם סחף של נושאי הרוב (חורים — המל"מ מסוג p, אילוח מקבלים <span dir="ltr">N<sub>A</sub></span>):</p>' +
    '<p><span dir="ltr">I₀ = jA = σEA = qμ<sub>p</sub>p₀·(V/L)·Wt</span></p>' +
    '<p>מבודדים <span dir="ltr">p₀ = N<sub>A</sub></span> (בהנחת יינון מלא):</p>' +
    '<p><span dir="ltr">p₀ = N<sub>A</sub> = I₀L/(qμ<sub>p</sub>VWt) = (20.8nA)(10cm) / [(1.6×10⁻¹⁹C)(130cm²/Vs)(1V)(1cm)(10⁻³cm)] = 1×10¹³ cm⁻³</span></p>' +
    '<p>מחוק פעולת ההמונים בשיווי משקל:</p>' +
    '<p><span dir="ltr">n₀ = n<sub>i</sub>²/p₀ = (10⁷)²/10¹³ = 10 cm⁻³</span></p>' +
    '<h4>ד. מרחק סחיפה ממוצע של אלקטרון</h4>' +
    '<p>השדה הנוצר על ידי המתח המופעל (קיים גם בלי תאורה): <span dir="ltr">E = V/L = 1V/10cm = 0.1 V/cm</span>.</p>' +
    '<p>מהירות הסחיפה: <span dir="ltr">v<sub>d</sub> = μ<sub>n</sub>E = 5400·0.1 = 540 cm/s</span>.</p>' +
    '<p>המרחק הממוצע שהאלקטרון סוחף בזמן חייו הממוצע <span dir="ltr">τ<sub>n</sub></span> עד שהוא נופל בחזרה (רקומבינציה):</p>' +
    '<p><span dir="ltr">l<sub>av</sub> = v<sub>d</sub>τ<sub>n</sub> = 540 × 10⁻⁷ = 5.4×10⁻⁵ cm (≈0.54μm)</span></p>' +
    '<h4>ה. הספק החום מהקרינה</h4>' +
    '<p>כל פוטון נבלע יוצר זוג אלקטרון-חור עם אנרגיה <span dir="ltr">E<sub>g</sub></span> (שהופכת לאנרגיה חשמלית שימושית); ' +
    'העודף <span dir="ltr">E<sub>ph</sub>−E<sub>g</sub></span> משתחרר כחום בתהליך התרמליזציה עד לשולי הפסים.</p>' +
    '<p><span dir="ltr">E<sub>ph</sub> = hc/λ = 1239.84 eV·nm / 775nm ≈ 1.600eV</span></p>' +
    '<p>חלק ההספק ההופך לחום: <span dir="ltr">(E<sub>ph</sub>−E<sub>g</sub>)/E<sub>ph</sub> = (1.600−1.344)/1.600 = 0.16</span> (16%)</p>' +
    '<p><span dir="ltr">P<sub>heat</sub> = 0.16 × P = 0.16 × 2.56mW ≈ 0.41mW</span></p>' +
    '<h4>ו. העלייה בזרם בעקבות ההארה</h4>' +
    '<p>כל ההספק הנספג <span dir="ltr">P</span> (לא רק החלק ההופך לחום) יוצר זוגות אלקטרון-חור — פוטון אחד נבלע ⟵ זוג אחד נוצר:</p>' +
    '<p><span dir="ltr">N<sub>ph/s</sub> = P/E<sub>ph</sub> = (2.56×10⁻³W)/(1.600×1.6×10⁻¹⁹J) ≈ 1.0×10¹⁶ s⁻¹</span></p>' +
    '<p>קצב היצירה לנפח (בליעה אחידה בנפח <span dir="ltr">V=LWt=10⁻²cm³</span>):</p>' +
    '<p><span dir="ltr">G<sub>op</sub> = N<sub>ph/s</sub>/V ≈ 1.0×10¹⁸ cm⁻³s⁻¹</span></p>' +
    '<p>עודף נושאים במצב מתמיד (מאחר ו-<span dir="ltr">τ<sub>n</sub>=τ<sub>p</sub>=τ</span>):</p>' +
    '<p><span dir="ltr">Δn = Δp = G<sub>op</sub>τ ≈ 1.0×10¹¹ cm⁻³</span></p>' +
    '<p>העלייה בזרם (סחיפה של שני סוגי הנושאים העודפים באותו שדה <span dir="ltr">E=V/L</span>):</p>' +
    '<p><span dir="ltr">ΔI = q(μ<sub>p</sub>+μ<sub>n</sub>)(V/L)Wt·Δn ≈ 8.85nA</span></p>' +
    '<p>(הזרם הכולל בתאורה: <span dir="ltr">I = I₀+ΔI ≈ 20.8+8.85 ≈ 29.6nA</span>.)</p>' +
    '</div></details>';

  window.BANK_OPEN_QUESTIONS.push({
    id: "25s2m1-Xq1",
    cat: "sc-transport",
    difficulty: 4,
    skills: ["גלאי אור למל\"מ", "ריכוזי נשאים בשיווי משקל", "זרם סחף וזרם תאורה"],
    origin: "official",
    sourceLabel: SRC_X,
    kind: "open",
    prompt: xq1Body,
    hint: "התחילו מ-I₀=σEA כדי לחלץ את ריכוז המקבלים מהזרם החשוך; לחישוב הזרם בתאורה חשבו קודם את קצב יצירת הזוגות G_op מתוך ההספק הנספג (לא רק החלק ההופך לחום).",
    qtype: "analysis",
    html: xq1Body + xq1Sol
  });

  /* ============================================================
   * Xq2 — pn-diode: צומת PN רגיל מול צומת PIN (הרחבה).
   * ============================================================ */

  var xq2Body =
    '<p>נתון צומת <span dir="ltr">PN</span> (צד <span dir="ltr">N</span> בצידו החיובי של ציר ה-<span dir="ltr">x</span>) ' +
    'בטמפרטורת החדר, עשוי סיליקון, בעל הנתונים שבטבלה:</p>' +
    '<div class="v-table"><table><tbody>' +
    '<tr><td dir="ltr">n<sub>i</sub> = 1.5×10¹⁰cm⁻³</td><td dir="ltr">ε<sub>r</sub> = 11.8</td></tr>' +
    '<tr><td dir="ltr">N<sub>D</sub> = 10¹⁶cm⁻³</td><td dir="ltr">N<sub>A</sub> = 10¹⁷cm⁻³</td></tr>' +
    '</tbody></table></div>' +
    '<p><b>א. (7 נק׳)</b> חשבו את פוטנציאל המגע <span dir="ltr">V₀</span>, רוחב אזור המחסור <span dir="ltr">W</span>, ' +
    'ואת <span dir="ltr">x⁰<sub>n</sub></span> ו-<span dir="ltr">x⁰<sub>p</sub></span>.</p>' +
    '<p><b>ב. (8 נק׳)</b> סרטטו גרפים של: (1) צפיפות המטען כתלות במיקום <span dir="ltr">x</span>. ' +
    '(2) השדה החשמלי כתלות במיקום <span dir="ltr">x</span>. ציינו בגרפים את המרחקים שחישבתם בסעיף א.</p>' +
    '<p>נתון צומת אחר מסוג <span dir="ltr">PIN</span>, כאשר <span dir="ltr">I</span> מייצג שכבת סיליקון אינטרינזית — ' +
    'הצומת מורכב משלושה אזורים: צד <span dir="ltr">P</span>, ביניהם שכבה אינטרינזית באורך <span dir="ltr">L</span>, וצד <span dir="ltr">N</span>, כבסרטוט ' +
    '(<span dir="ltr">P</span> ב-<span dir="ltr">x&lt;0</span>, השכבה האינטרינזית ב-<span dir="ltr">0≤x≤L</span>, <span dir="ltr">N</span> ב-<span dir="ltr">x&gt;L</span>). ' +
    'יתר נתוני הצומת (<span dir="ltr">N<sub>D</sub>,N<sub>A</sub>,n<sub>i</sub>,ε<sub>r</sub></span>) זהים לצומת הראשון. ' +
    'הניחו שהשכבה האינטרינזית נטרלית. נגדיר גדלים דומים לצומת ה-PN: <span dir="ltr">E₀</span> — השדה המקסימלי בצומת; ' +
    '<span dir="ltr">x⁰<sub>n</sub>, x⁰<sub>p</sub></span> — רוחבי אזורי המחסור משני צידי השכבה האינטרינזית.</p>' +
    '<p><b>ג. (7 נק׳)</b><br>' +
    '1. האם פוטנציאל המגע בצומת השני (PIN) גדול, קטן, או שווה לזה של הצומת הראשון (PN)? נמקו!<br>' +
    '2. האם השדה המקסימלי בצומת השני (PIN) גדול, קטן, או שווה לזה של הצומת הראשון (PN)? נמקו!</p>' +
    '<p><b>ד. (7 נק׳)</b><br>' +
    '1. סרטטו גרף צפיפות מטען כתלות במיקום <span dir="ltr">x</span> עבור צומת ה-PIN.<br>' +
    '2. סרטטו גרף השדה החשמלי כתלות במיקום <span dir="ltr">x</span> עבור צומת ה-PIN.<br>' +
    '3. האם המשוואה <span dir="ltr">N<sub>A</sub>x⁰<sub>p</sub> = N<sub>D</sub>x⁰<sub>n</sub></span> נכונה עבור צומת PIN? ' +
    'אם כן — נמקו. אם לא — איך נראית המשוואה המקבילה?<br>' +
    '4. רשמו משוואה המאפשרת לחשב את <span dir="ltr">E₀</span> מתוך <span dir="ltr">x⁰<sub>n</sub>, x⁰<sub>p</sub></span>.</p>' +
    '<p><b>ה. (5 נק׳)</b> האם בצומת השני (PIN) זרם הזליגה גדול, קטן, או שווה בהשוואה לזרם הזליגה של הצומת הראשון (PN)? נמקו.</p>';

  var xq2Sol =
    '<details class="sol"><summary>פתרון</summary><div class="body">' +
    '<h4>א. פוטנציאל מגע ורוחב אזור מחסור (PN)</h4>' +
    '<p><span dir="ltr">V₀ = (k_BT/q)ln(N_DN_A/n_i²) = 0.0259V·ln[(10¹⁶·10¹⁷)/(1.5×10¹⁰)²] = 0.0259V·ln(4.44×10¹²) ≈ 0.754V</span></p>' +
    '<!-- verified: official solution rounds kT/q≈0.026V and gets V0=0.757V; with the standard value kT/q=0.0259V at T=300K the precise result is V0≈0.754V (a ~0.4% difference from constant rounding, doesn\'t change W/xn/xp to given precision) -->' +
    '<p><span dir="ltr">W = √[2ε<sub>r</sub>ε₀V₀/q · (N_D+N_A)/(N_DN_A)] ≈ 3.3×10⁻⁵cm</span></p>' +
    '<p><span dir="ltr">x⁰<sub>n</sub> = [N_A/(N_A+N_D)]·W ≈ 3.0×10⁻⁵cm</span> &nbsp; (האגף הפחות מסומם — N — מתרחב יותר)</p>' +
    '<p><span dir="ltr">x⁰<sub>p</sub> = [N_D/(N_A+N_D)]·W ≈ 3.0×10⁻⁶cm</span></p>' +
    '<p>בדיקה: <span dir="ltr">N_Ax⁰<sub>p</sub> = 10¹⁷·3×10⁻⁶ = 3×10¹¹ = N_Dx⁰<sub>n</sub> = 10¹⁶·3×10⁻⁵</span> — שימור מטען מתקיים ✓.</p>' +
    '<h4>ב. גרפים — צומת PN</h4>' +
    '<p><b>צפיפות מטען ρ(x):</b> מלבן שלילי בגובה <span dir="ltr">−qN_A</span> בתחום <span dir="ltr">[−x⁰<sub>p</sub>,0]</span> (צד P), ' +
    'ומלבן חיובי בגובה <span dir="ltr">+qN_D</span> בתחום <span dir="ltr">[0,x⁰<sub>n</sub>]</span> (צד N). מאחר ש-<span dir="ltr">N_A≫N_D</span> ' +
    '(פי 10), הגובה בצד P גדול פי 10, אך הרוחב <span dir="ltr">x⁰<sub>p</sub></span> קטן פי 10 — כך שהשטחים (המטען הכולל) שווים ומנוגדים בסימן.</p>' +
    '<p><b>שדה חשמלי E(x):</b> משולש — עולה (בערך מוחלט) לינארית מ-0 ב-<span dir="ltr">x=−x⁰<sub>p</sub></span> עד <span dir="ltr">E₀</span> ' +
    'ב-<span dir="ltr">x=0</span>, ואז יורד לינארית בחזרה ל-0 ב-<span dir="ltr">x=x⁰<sub>n</sub></span>. השיפוע בכל תחום שווה ל-<span dir="ltr">ρ/ε</span> (חוק גאוס).</p>' +
    '<h4>ג. השוואת הצומת השני (PIN) לראשון (PN)</h4>' +
    '<p><b>1. פוטנציאל המגע: שווה.</b> תנאי שיווי המשקל דורש זרם חורים (וזרם אלקטרונים) כולל אפס בכל <span dir="ltr">x</span>, ' +
    'כולל בתוך השכבה האינטרינזית. אינטגרציה של <span dir="ltr">j_p=qμ_ppE−qD_p(dp/dx)=0</span> על פני כל הצומת (מצד P עד צד N, דרך ה-I) ' +
    'נותנת שוב <span dir="ltr">V₀=(k_BT/q)ln(p_p/p_n)=(k_BT/q)ln(N_AN_D/n_i²)</span> — אותה נוסחה בדיוק, בלי תלות באורך <span dir="ltr">L</span>. ' +
    'פוטנציאל המגע נקבע רק על ידי ריכוזי הסימום בשני הקצוות, ולא על ידי המבנה שביניהם.</p>' +
    '<p><b>2. השדה המקסימלי: קטן יותר.</b> אותו <span dir="ltr">V₀</span> הוא שטח הטרפז מתחת לגרף <span dir="ltr">E(x)</span>: ' +
    '<span dir="ltr">V₀ = E₀L + E₀(x⁰<sub>n</sub>+x⁰<sub>p</sub>)/2</span>. יש כעת איבר נוסף <span dir="ltr">E₀L</span> (שדה קבוע על פני האזור האינטרינזי), ' +
    'כך שעבור אותו <span dir="ltr">V₀</span>, ה-<span dir="ltr">E₀</span> הנדרש קטן יותר ככל ש-<span dir="ltr">L</span> ארוך יותר — "פורשים" את אותה נפילת ' +
    'מתח על פני מרחק גדול יותר.</p>' +
    '<h4>ד. גרפים ומשוואות — צומת PIN</h4>' +
    '<p><b>1. צפיפות מטען:</b> זהה בצורתה לצומת ה-PN (מלבן שלילי בצד P, מלבן חיובי בצד N), אך <b>בין</b> שני המלבנים, ' +
    'בתחום <span dir="ltr">[0,L]</span>, הצפיפות אפס (השכבה האינטרינזית נטרלית).</p>' +
    '<p><b>2. שדה חשמלי:</b> עולה לינארית מ-0 ב-<span dir="ltr">x=−x⁰<sub>p</sub></span> עד <span dir="ltr">E₀</span> ב-<span dir="ltr">x=0</span>; ' +
    'נשאר <b>קבוע</b> על <span dir="ltr">E₀</span> לאורך כל <span dir="ltr">[0,L]</span> (אין מטען שם ⟸ חוק גאוס נותן שדה קבוע); ' +
    'ואז יורד לינארית בחזרה ל-0 ב-<span dir="ltr">x=L+x⁰<sub>n</sub></span>.</p>' +
    '<p><b>3. האם N_Ax⁰<sub>p</sub>=N_Dx⁰<sub>n</sub> תקפה? כן, גם ל-PIN.</b> המקור למשוואה הוא שימור מטען (ניטרליות המבנה כולו): ' +
    'המטען השלילי שנחשף בצד P (<span dir="ltr">qN_Ax⁰<sub>p</sub></span> ליחידת שטח) שווה למטען החיובי שנחשף בצד N ' +
    '(<span dir="ltr">qN_Dx⁰<sub>n</sub></span>), ללא קשר לכך שביניהם שוכבת שכבה אינטרינזית נטרלית שאינה תורמת מטען.</p>' +
    '<p><b>4. משוואה ל-E₀:</b> משטח הטרפז מתחת ל-<span dir="ltr">E(x)</span>:</p>' +
    '<p><span dir="ltr">V₀ = E₀L + E₀(x⁰<sub>n</sub>+x⁰<sub>p</sub>)/2 &nbsp;⟹&nbsp; E₀ = 2V₀ / [2L+(x⁰<sub>n</sub>+x⁰<sub>p</sub>)]</span></p>' +
    '<h4>ה. זרם הזליגה</h4>' +
    '<p><b>גדול יותר ב-PIN.</b> זרם הזליגה (זרם הרוויה בהטיה הפוכה) נובע מגנרציה תרמית של זוגות אלקטרון-חור באזור המחסור, ' +
    'שנסחפים בשדה ותורמים לזרם. ב-PIN יש נפח נוסף — השכבה האינטרינזית — שגם בו יש גנרציה תרמית וגם קיים שדה חשמלי (השדה הקבוע <span dir="ltr">E₀</span> ' +
    'שחושב בסעיף ד.4) הסוחף את הנושאים שנוצרים בו. נפח הגנרציה האפקטיבי גדול יותר ⟸ זרם הזליגה גדול יותר.</p>' +
    '</div></details>';

  window.BANK_OPEN_QUESTIONS.push({
    id: "25s2m1-Xq2",
    cat: "pn-diode",
    difficulty: 4,
    skills: ["צומת PN בשיווי משקל", "אזור מחסור", "צומת PIN"],
    origin: "official",
    sourceLabel: SRC_X,
    kind: "open",
    prompt: xq2Body,
    hint: "פוטנציאל המגע תלוי רק בריכוזי הסימום וב-n_i — לא בגיאומטריה של הצומת. חשבו איך זה משפיע על ההשוואה בין PIN ל-PN, ואז חשבו על שטח הטרפז מתחת לגרף השדה כדי להשוות את E₀.",
    qtype: "analysis",
    html: xq2Body + xq2Sol
  });

  /* ============================================================
   * Xq3 — mos-mosfet: קבל MOS, קיבול מינימלי ומצבי פעולה.
   * ============================================================ */

  var xq3Body =
    '<p>מבצעים סדרת מדידות על קבלי <span dir="ltr">MOS</span> שונים, בטמפרטורת החדר, הנבדלים זה מזה רק בעובי ' +
    '<span dir="ltr">d</span> של שכבת האוקסיד. כל הקבלים עשויים על גבי צורן (סיליקון) מסוג p עם ' +
    '<span dir="ltr">N_A = 10¹⁷cm⁻³</span> (<span dir="ltr">n_i = 1.5×10¹⁰cm⁻³</span>). שטח החתך של כל הקבלים הוא ' +
    '<span dir="ltr">A = 1cm²</span>, והמקדמים הדיאלקטריים: <span dir="ltr">ε<sup>ox</sup><sub>r</sub> = 3.9</span>, ' +
    '<span dir="ltr">ε<sup>s</sup><sub>r</sub> = 11.8</span>.</p>' +
    '<p>סימון: <span dir="ltr">C<sub>ox</sub></span> — קיבול שכבת האוקסיד, <span dir="ltr">C<sub>s</sub></span> — קיבול הצורן, ' +
    '<span dir="ltr">C</span> — הקיבול הכולל.</p>' +
    '<p>בסדרת המדידות נמדד הקיבול המינימלי הכולל <span dir="ltr">C<sub>min</sub></span> כפונקציה של ' +
    '<span dir="ltr">C<sub>ox</sub></span> (קיבולים מוחלטים, לא ליחידת שטח): התקבל גרף עולה השואף לערך אסימפטוטי, ' +
    'עם נקודה מסומנת ב-<span dir="ltr">C<sub>ox</sub> = 99nF</span>.</p>' +
    '<p><b>א. (10 נק׳)</b><br>' +
    '1. חשבו את <span dir="ltr">φ<sub>F</sub></span>.<br>' +
    '2. האם הקיבול המינימלי של הצורן, <span dir="ltr">C<sup>min</sup><sub>s</sub></span>, זהה לכל הקבלים? ' +
    'אם כן — כיצד, וחשבו אותו. אם לא — הוכיחו את טענתכם!</p>' +
    '<p><b>ב. (7 נק׳)</b> חשבו את הערך המירבי האפשרי עבור <span dir="ltr">C<sub>min</sub></span> (הערך האסימפטוטי בגרף).</p>' +
    '<p>הסעיפים הבאים מתייחסים לנקודה בגרף שבה <span dir="ltr">C<sub>ox</sub> = 99nF</span> ולמתח שער <span dir="ltr">V<sub>g</sub> = 1V</span>.</p>' +
    '<p><b>ג. (8 נק׳)</b> חשבו את הפוטנציאל על השפה <span dir="ltr">φ<sub>s</sub></span>.</p>' +
    '<p><b>ד. (8 נק׳)</b><br>' +
    '1. חשבו את ריכוז האלקטרונים על השפה, <span dir="ltr">n<sub>s</sub></span>.<br>' +
    '2. מהו מצב הפעולה של הקבל — אגירה (FB), מחסור, אינוורסיה חלשה, סף אינוורסיה, סף אינוורסיה חזקה, או אינוורסיה חזקה? נמקו!<br>' +
    '3. סדרו בסדר עולה, בהתאם למצב הפעולה של הקבל, את הריכוזים <span dir="ltr">n<sub>s</sub>, p<sub>s</sub>, N<sub>A</sub>, n<sub>i</sub></span> ' +
    '(יתכן שיש ביניהם גם כאלו ששווים).</p>';

  var xq3Sol =
    '<details class="sol"><summary>פתרון</summary><div class="body">' +
    '<h4>א.1 חישוב φ_F</h4>' +
    '<p><span dir="ltr">φ<sub>F</sub> = (k_BT/q)ln(N_A/n_i) = 0.0259V·ln(10¹⁷/1.5×10¹⁰) = 0.0259V·ln(6.67×10⁶) ≈ 0.41V</span></p>' +
    '<h4>א.2 קיבול מינימלי של הצורן</h4>' +
    '<p><b>כן, זהה לכל הקבלים.</b> <span dir="ltr">C<sup>min</sup><sub>s</sub></span> מתקבל בסף היפוך חזק ' +
    '(<span dir="ltr">φ<sub>s</sub>=2φ<sub>F</sub></span>), שם רוחב אזור המחסור בצורן מגיע למקסימום <span dir="ltr">w<sub>T</sub></span> ' +
    'ולא גדל יותר (מטען נוסף על השער נכנס לערוץ ההיפוך ולא מרחיב את המחסור). גודל זה תלוי רק ב-<span dir="ltr">N_A</span> ' +
    'ו-<span dir="ltr">φ<sub>F</sub></span> (תכונות הצורן בלבד) — ולא בעובי האוקסיד <span dir="ltr">d</span> — ולכן זהה לכל הקבלים בסדרה.</p>' +
    '<p><span dir="ltr">w<sub>T</sub> = 2√(ε<sup>s</sup>φ<sub>F</sub>/(eN_A)) &nbsp;⟹&nbsp; ' +
    'C<sup>min</sup><sub>s</sub> = ε<sup>s</sup>A/w<sub>T</sub> = (A/2)√(ε<sup>s</sup>eN_A/φ<sub>F</sub>)</span></p>' +
    '<p><span dir="ltr">C<sup>min</sup><sub>s</sub> = (1cm²/2)·√[(11.8×8.85×10⁻¹⁴F/cm)(1.6×10⁻¹⁹C)(10¹⁷cm⁻³)/0.41V] ≈ 1.01×10⁻⁷F ≈ 101nF</span></p>' +
    '<h4>ב. הערך האסימפטוטי המרבי של C_min</h4>' +
    '<p><span dir="ltr">1/C<sub>min</sub> = 1/C<sub>ox</sub> + 1/C<sup>min</sup><sub>s</sub></span>. ' +
    'כאשר <span dir="ltr">C<sub>ox</sub>→∞</span> (אוקסיד דק מאוד), <span dir="ltr">1/C<sub>ox</sub>→0</span>:</p>' +
    '<p><span dir="ltr">C<sup>∞</sup><sub>min</sub> = C<sup>min</sup><sub>s</sub> ≈ 101nF</span></p>' +
    '<h4>ג. פוטנציאל השפה φ_s בנקודה C_ox=99nF, V_g=1V</h4>' +
    '<p>מאזן מתחים: <span dir="ltr">V<sub>g</sub> = V<sub>ox</sub>+φ<sub>s</sub></span>, כאשר ' +
    '<span dir="ltr">V<sub>ox</sub>=Q<sub>dep</sub>/C<sub>ox</sub></span> ו-<span dir="ltr">Q<sub>dep</sub>=A√(2ε<sup>s</sup>eN_Aφ<sub>s</sub>)</span> ' +
    '(מטען המחסור, ליחידת שטח כפול A):</p>' +
    '<p><span dir="ltr">V<sub>g</sub> = φ<sub>s</sub> + (A/C<sub>ox</sub>)√(2ε<sup>s</sup>eN_Aφ<sub>s</sub>)</span></p>' +
    '<p>מעלים בריבוע ומסדרים למשוואה ריבועית ב-<span dir="ltr">φ<sub>s</sub></span>:</p>' +
    '<p><span dir="ltr">φ<sub>s</sub>² − 2(V<sub>g</sub> + A²eε<sup>s</sup>N_A/C²<sub>ox</sub>)φ<sub>s</sub> + V<sub>g</sub>² = 0</span></p>' +
    '<p>מציבים מספרים (<span dir="ltr">A²eε<sup>s</sup>N_A/C²<sub>ox</sub> ≈ 1.70V</span>):</p>' +
    '<p><span dir="ltr">φ<sub>s</sub>² − 5.41φ<sub>s</sub> + 1 = 0 &nbsp;⟹&nbsp; ' +
    'φ<sub>s</sub> = [5.41 ± √(5.41²−4)]/2 ≈ {0.19V, 5.22V}</span></p>' +
    '<p>הפתרון הפיזיקלי הוא הקטן מ-<span dir="ltr">V<sub>g</sub>=1V</span> (אחרת <span dir="ltr">V<sub>ox</sub></span> יהיה שלילי): ' +
    '<span dir="ltr">φ<sub>s</sub> ≈ 0.19V</span>.</p>' +
    '<h4>ד.1 ריכוז האלקטרונים על השפה n_s</h4>' +
    '<p><span dir="ltr">n<sub>s</sub> = n<sub>i</sub>·exp[−(φ<sub>F</sub>−φ<sub>s</sub>)/(k_BT/q)] = ' +
    '1.5×10¹⁰·exp[−(0.407−0.192)/0.0259]</span></p>' +
    '<!-- verified: official solution rounds φ_s to 0.20V and φ_F to 0.41V before the exponential and gets n_s≈4.5×10⁶cm⁻³; ' +
    'because n_s depends exponentially on φ_F−φ_s, that rounding matters — using the unrounded values φ_s≈0.192V, φ_F≈0.407V ' +
    'gives n_s≈3.7×10⁶cm⁻³ (the same order of magnitude; conclusions in ד.2/ד.3 are unaffected either way) -->' +
    '<p><span dir="ltr">n<sub>s</sub> ≈ 3.7×10⁶ cm⁻³</span></p>' +
    '<h4>ד.2 מצב הפעולה</h4>' +
    '<p><b>מחסור.</b> מתקיים <span dir="ltr">0 &lt; φ<sub>s</sub> &lt; φ<sub>F</sub></span> ' +
    '(<span dir="ltr">φ<sub>s</sub>≈0.19V &lt; φ<sub>F</sub>≈0.41V</span>) — השפה כבר לא שטוחה (<span dir="ltr">φ<sub>s</sub>&gt;0</span>, ' +
    'המחסור התרחב), אך עדיין לא הגענו לתנאי היפוך (<span dir="ltr">φ<sub>s</sub>=φ<sub>F</sub></span> מסמן ריכוז אלקטרונים בשפה השווה ל-' +
    '<span dir="ltr">n<sub>i</sub></span>; <span dir="ltr">φ<sub>s</sub>=2φ<sub>F</sub></span> מסמן סף היפוך חזק). מכיוון ש-' +
    '<span dir="ltr">φ<sub>s</sub></span> קטן גם מ-<span dir="ltr">φ<sub>F</sub></span> וגם מ-<span dir="ltr">2φ<sub>F</sub></span>, ' +
    'טרם החל שלב ההיפוך — עדיין במשטר המחסור.</p>' +
    '<h4>ד.3 סדר עולה</h4>' +
    '<p><span dir="ltr">p<sub>s</sub> = n<sub>i</sub>²/n<sub>s</sub> ≈ 6.1×10¹³cm⁻³</span> (ריכוז החורים בשפה — פחת מ-' +
    '<span dir="ltr">N_A</span> בגלל המחסור, אך עדיין הרבה יותר גדול מ-<span dir="ltr">n<sub>i</sub></span>, כלומר טרם הגענו להיפוך).</p>' +
    '<p><span dir="ltr">n<sub>s</sub> ≈ 3.7×10⁶ &nbsp;&lt;&nbsp; n<sub>i</sub> = 1.5×10¹⁰ &nbsp;&lt;&nbsp; ' +
    'p<sub>s</sub> ≈ 6.1×10¹³ &nbsp;&lt;&nbsp; N_A = 10¹⁷ &nbsp;[cm⁻³]</span></p>' +
    '</div></details>';

  window.BANK_OPEN_QUESTIONS.push({
    id: "25s2m1-Xq3",
    cat: "mos-mosfet",
    difficulty: 4,
    skills: ["קבל MOS", "פוטנציאל שטח φ_s", "מצבי פעולה של MOS"],
    origin: "official",
    sourceLabel: SRC_X,
    kind: "open",
    prompt: xq3Body,
    hint: "בסף היפוך חזק φ_s=2φ_F קבוע וגם w_T קבוע — בלי תלות בעובי האוקסיד. זה מה שהופך את C_s^min לזהה לכל הקבלים בסדרה, ולערך שאליו שואף C_min כש-C_ox→∞.",
    qtype: "analysis",
    html: xq3Body + xq3Sol
  });
})();

/* ============================================================
 *  טופס Y — עדכון: טופס Y אכן קיים למבחן הזה, אך במקור נשמר
 *  תחת שם קובץ שגוי (course20132-year2025-semester2-moed21.pdf,
 *  11 עמודים, פותח באותיות "שאלון Y" / "פתרון Y") ולא כעמודים
 *  נוספים בתוך קובץ ה-moed1 (שמכיל רק את טופס X, 11 עמודים משלו).
 *  אומת מול הקובץ הנכון ונוספו כאן 3 השאלות Yq1..Yq3.
 * ============================================================ */

(function () {
  "use strict";

  var SRC_Y = "🎓 מבחן 2025 · סמסטר ב׳ · מועד א׳ · טופס Y";

  /* ============================================================
   * Yq1 — sc-transport: GaAs מאולח אמפוטרית (Si בו-זמנית תורם
   * ומקבל), מוליכות, קצב שחבור, ותגובת נושאים עודפים לתאורה
   * שגדלה לינארית בזמן.
   * ============================================================ */

  var yq1Body =
    '<p>נתונה פיסת <span dir="ltr">GaAs</span> בטמפרטורת החדר, המאולחת ב-<span dir="ltr">N = 10¹⁵cm⁻³</span> ' +
    'אטומי סיליקון. נתון כי <span dir="ltr">55%</span> מאטומי הסיליקון החליפו אטום <span dir="ltr">Ga</span> ' +
    'והיתר החליפו אטומי <span dir="ltr">As</span>. כמו כן נתון כי כל אטומי האילוח יונן.</p>' +
    '<div class="v-table"><table><tbody>' +
    '<tr><td dir="ltr">n<sub>i</sub> = 10⁶cm⁻³</td><td dir="ltr">τ<sub>n</sub> = τ<sub>p</sub> = 10⁻⁶s</td></tr>' +
    '<tr><td dir="ltr">μ<sub>n</sub> = 8000 cm²/V·s</td><td dir="ltr">μ<sub>p</sub> = 400 cm²/V·s</td></tr>' +
    '</tbody></table></div>' +
    '<p><b>א. (6 נק׳)</b> חשבו את <span dir="ltr">σ₀</span>, את <span dir="ltr">n₀</span>, <span dir="ltr">p₀</span> ואת המוליכות.</p>' +
    '<p><b>ב. (6 נק׳)</b> ניתן להגיע לאותם ריכוזים (<span dir="ltr">n₀, p₀</span>) על ידי אילוח אחר בטבלה ' +
    'המחזורית, שיחליף רק אטום מסוג אחד (כלומר רק את ה-<span dir="ltr">Ga</span> או רק את ה-<span dir="ltr">As</span>).<br>' +
    '1. תנו דוגמה לחומר מאלח שיכול לעשות זאת. איזה אטומים הוא יחליף (<span dir="ltr">Ga</span> או <span dir="ltr">As</span>)?<br>' +
    '2. מה יהיה ריכוז האילוח במקרה שכזה?<br>' +
    '3. האם המוליכות במקרה זה תהיה שווה ל-<span dir="ltr">σ₀</span> שחושבה בסעיף א, גבוהה יותר, או נמוכה יותר? נמקו.</p>' +
    '<p><b>ג. (6 נק׳)</b> מהו קצב ההארה האופטי (<span dir="ltr">g<sub>op</sub></span>) הדרוש כדי שהמוליכות תעלה ב-<span dir="ltr">20%</span>?</p>' +
    '<p><b>ד. (6 נק׳)</b><br>' +
    '1. מהו קצב השחבור במצב שיווי משקל (כמה זוגות אלקטרון-חור מושמדים בכל שנייה בכל יחידת נפח)?<br>' +
    '2. מהו קצב השחבור בזמן ההארה של סעיף ג?<br>' +
    '3. הסבירו מדוע יש שינוי בקצב השחבור כאשר יש הארה.</p>' +
    '<p><b>ה. (9 נק׳)</b> בניסוי אחר, בזמן ההארה קצב ההארה גדל לינארית בזמן כך ש-<span dir="ltr">g<sub>op</sub> = αt</span>, ' +
    'כאשר <span dir="ltr">α</span> קבוע נתון ו-<span dir="ltr">t</span> הזמן הנמדד מרגע תחילת ההארה. ניתן להניח הארה בשיעור נמוך.<br>' +
    '1. הראו כי תוספת נושאי המטען כתלות בזמן נתונה על ידי <span dir="ltr">δp(t) = A + Bt + Ce<sup>−t/τ</sup></span>.<br>' +
    '2. מצאו את הקבועים <span dir="ltr">A, B, C</span>.</p>';

  var yq1Sol =
    '<details class="sol"><summary>פתרון</summary><div class="body">' +
    '<h4>א. σ₀, n₀, p₀</h4>' +
    '<p>סיליקון ב-<span dir="ltr">GaAs</span> הוא אילוח אמפוטרי: אטום שיושב על אתר <span dir="ltr">Ga</span> (חבורה III) ' +
    'תורם אלקטרון עודף (פועל כתורם), ואטום שיושב על אתר <span dir="ltr">As</span> (חבורה V) חסר אלקטרון אחד (פועל כמקבל).</p>' +
    '<p><span dir="ltr">N_D = 0.55·N = 5.5×10¹⁴cm⁻³</span> &nbsp; (תורמים, על אתרי Ga)<br>' +
    '<span dir="ltr">N_A = 0.45·N = 4.5×10¹⁴cm⁻³</span> &nbsp; (מקבלים, על אתרי As)</p>' +
    '<p>מאחר ויש יותר תורמים ממקבלים, החומר מסוג n, וההפרש קובע את ריכוז נושאי הרוב:</p>' +
    '<p><span dir="ltr">n₀ = N_D − N_A = 10¹⁴ cm⁻³</span> &nbsp;,&nbsp; <span dir="ltr">p₀ = n_i²/n₀ = (10⁶)²/10¹⁴ = 0.01 cm⁻³</span></p>' +
    '<p><span dir="ltr">σ₀ = q(μ_pp₀+μ_nn₀) ≈ qμ_nn₀ = (1.6×10⁻¹⁹C)(8000 cm²/Vs)(10¹⁴cm⁻³) ≈ 0.128 (Ω·cm)⁻¹</span></p>' +
    '<h4>ב. אילוח חד-כיווני חלופי</h4>' +
    '<p><b>1.</b> כדי לקבל תורמים בלבד (בלי אפקט אמפוטרי) יש לבחור אטום מחבורה VI (למשל <span dir="ltr">Se</span> או ' +
    '<span dir="ltr">S</span>) שיחליף רק אטומי <span dir="ltr">As</span> (חבורה V) — אטום כזה תמיד תורם אלקטרון עודף, ולא ' +
    'יכול לשבת על אתר <span dir="ltr">Ga</span> ולפעול כמקבל.</p>' +
    '<p><b>2.</b> כדי לקבל אותו <span dir="ltr">n₀ = 10¹⁴cm⁻³</span> בלי פיצוי (compensation), מספיק ריכוז אילוח ' +
    '<span dir="ltr">N_D′ = n₀ = 10¹⁴cm⁻³</span> — פי 10 פחות מהריכוז הכולל <span dir="ltr">N=10¹⁵cm⁻³</span> שהיה דרוש קודם ' +
    '(כי שם רוב האילוח "בוזבז" על פיצוי הדדי בין תורמים למקבלים).</p>' +
    '<p><b>3.</b> המוליכות תהיה <b>גבוהה יותר</b> מ-<span dir="ltr">σ₀</span>. הנוסחה <span dir="ltr">σ=qμ_nn₀</span> ' +
    'לא משתנה (אותו <span dir="ltr">n₀</span>), אך המוביליות <span dir="ltr">μ_n</span> עצמה גבוהה יותר: ריכוז המטען המיינן ' +
    'הכולל (המפזר את נושאי המטען) קטן פי 10 (<span dir="ltr">10¹⁴</span> לעומת <span dir="ltr">10¹⁵</span> קודם), ולכן פחות ' +
    'פיזור על יונים מיוננים ⟸ מוביליות גבוהה יותר ⟸ מוליכות גבוהה יותר.</p>' +
    '<h4>ג. קצב הארה עבור עלייה של 20% במוליכות</h4>' +
    '<p><span dir="ltr">σ = 1.2σ₀ &nbsp;⟹&nbsp; Δσ = 0.2σ₀ = 0.2qμ_nn₀</span></p>' +
    '<p>העלייה במוליכות נובעת מנושאים עודפים (<span dir="ltr">Δn=Δp</span> משמירת מטען):</p>' +
    '<p><span dir="ltr">Δσ = q(μ_p+μ_n)Δn = 0.2qμ_nn₀ &nbsp;⟹&nbsp; Δn = 0.2μ_nn₀/(μ_n+μ_p)</span></p>' +
    '<p>במצב מתמיד <span dir="ltr">Δn = g_opτ</span>:</p>' +
    '<p><span dir="ltr">g_op = 0.2μ_nn₀ / [τ(μ_n+μ_p)] = (0.2)(8000)(10¹⁴) / [(10⁻⁶)(8400)] ≈ 1.9×10¹⁹ cm⁻³s⁻¹</span></p>' +
    '<h4>ד. קצב השחבור</h4>' +
    '<p><b>1.</b> בשיווי משקל <span dir="ltr">r = α_rn₀p₀</span>, ומאחר ש-<span dir="ltr">α_rn₀=1/τ</span> (הגדרת זמן החיים):</p>' +
    '<p><span dir="ltr">r_eq = p₀/τ = 0.01 / 10⁻⁶ = 10⁴ cm⁻³s⁻¹</span></p>' +
    '<p><b>2.</b> בזמן ההארה (עם <span dir="ltr">Δn=Δp=g_opτ</span> מסעיף ג, ובהזרקה נמוכה <span dir="ltr">Δn≪n₀</span>):</p>' +
    '<p><span dir="ltr">r = α_r(n₀+Δn)(p₀+Δp) ≈ p₀/τ + Δn/τ = p₀/τ + g_op ≈ g_op ≈ 1.9×10¹⁹ cm⁻³s⁻¹</span></p>' +
    '<p>(האיבר <span dir="ltr">p₀/τ=10⁴</span> זניח לגמרי מול <span dir="ltr">g_op≈1.9×10¹⁹</span>.)</p>' +
    '<p><b>3.</b> קצב השחבור גדל עם ההארה כי <span dir="ltr">r=α_rnp</span> — ההארה מוסיפה הרבה חורים עודפים ' +
    '(<span dir="ltr">Δp</span> גדול), ולכן הסיכוי של אלקטרון לפגוש חור ולהשתחבר גדל בהתאם.</p>' +
    '<h4>ה. תגובת δp(t) לקצב הארה גדל לינארית</h4>' +
    '<p>משוואת הקצב (ללא הזרקה גבוהה, <span dir="ltr">δp≪p₀</span> לא רלוונטי כאן — משתמשים בקירוב הרגיל של זמן חיים קבוע):</p>' +
    '<p><span dir="ltr">d(δp)/dt = g_op − δp/τ = αt − δp/τ</span></p>' +
    '<p><b>1.</b> בודקים שהניחוש <span dir="ltr">δp(t)=A+Bt+Ce<sup>−t/τ</sup></span> פותר את המשוואה. נגזרים:</p>' +
    '<p><span dir="ltr">d(δp)/dt = B − (C/τ)e<sup>−t/τ</sup></span></p>' +
    '<p>מציבים במשוואה:</p>' +
    '<p><span dir="ltr">B − (C/τ)e<sup>−t/τ</sup> = αt − (A+Bt+Ce<sup>−t/τ</sup>)/τ = αt − A/τ − Bt/τ − (C/τ)e<sup>−t/τ</sup></span></p>' +
    '<p>איברי האקספוננט מצטמצמים משני האגפים אוטומטית. משווים את מה שנשאר, לכל <span dir="ltr">t</span>:</p>' +
    '<p>מקדם <span dir="ltr">t</span>: &nbsp; <span dir="ltr">0 = α − B/τ &nbsp;⟹&nbsp; B = ατ</span></p>' +
    '<p>איבר קבוע: &nbsp; <span dir="ltr">B = −A/τ &nbsp;⟹&nbsp; A = −Bτ = −ατ²</span></p>' +
    '<p>הצורה הנתונה אכן פותרת את המשוואה — בתנאי ש-<span dir="ltr">B=ατ</span> ו-<span dir="ltr">A=−ατ²</span>.</p>' +
    '<p><b>2.</b> את <span dir="ltr">C</span> מוצאים מתנאי ההתחלה: לפני תחילת ההארה אין נושאים עודפים, כלומר ' +
    '<span dir="ltr">δp(0)=0</span>:</p>' +
    '<p><span dir="ltr">δp(0) = A+C = 0 &nbsp;⟹&nbsp; C = −A = ατ²</span></p>' +
    '<p>לסיכום: <span dir="ltr">A=−ατ², &nbsp; B=ατ, &nbsp; C=ατ²</span> &nbsp; (כלומר ' +
    '<span dir="ltr">δp(t)=ατ[t−τ(1−e<sup>−t/τ</sup>)]</span> — עלייה לינארית מושהית שמתחילה מ-0).</p>' +
    '</div></details>';

  window.BANK_OPEN_QUESTIONS.push({
    id: "25s2m1-Yq1",
    cat: "sc-transport",
    difficulty: 4,
    skills: ["אילוח אמפוטרי", "מוליכות ותגובה לתאורה", "קצב שחבור G-R"],
    origin: "official",
    sourceLabel: SRC_Y,
    kind: "open",
    prompt: yq1Body,
    hint: "בסעיף א שימו לב שריכוז נושאי הרוב הוא ההפרש N_D−N_A, לא N_D או N_A בנפרד. בסעיף ה נחשו את הפתרון A+Bt+Ce^(−t/τ) והציבו — אל תפתרו את המשוואה הדיפרנציאלית מאפס.",
    qtype: "analysis",
    html: yq1Body + yq1Sol
  });

  /* ============================================================
   * Yq2 — pn-diode: צומת PN בהטיה קדמית — I₀, זרם כולל, ופילוג
   * זרמי המיעוט (חורים/אלקטרונים) סביב אזור המחסור.
   * ============================================================ */

  var yq2Body =
    '<p>נתון צומת <span dir="ltr">PN</span> עשוי סיליקון בטמפרטורת החדר (<span dir="ltr">300K</span>) בעל הנתונים הבאים:</p>' +
    '<div class="v-table"><table><tbody>' +
    '<tr><td dir="ltr">n<sub>i</sub> = 1.5×10¹⁰cm⁻³</td><td dir="ltr">k<sub>B</sub>T = 0.026eV</td><td dir="ltr">μ<sub>n</sub> = 1400 cm²/V·s</td></tr>' +
    '<tr><td dir="ltr">N<sub>D</sub> = 10¹⁶cm⁻³</td><td dir="ltr">N<sub>A</sub> = 10¹⁷cm⁻³</td><td dir="ltr">μ<sub>p</sub> = 500 cm²/V·s</td></tr>' +
    '<tr><td dir="ltr">A = 0.01cm²</td><td dir="ltr">ε<sub>r</sub> = 11.8</td><td dir="ltr">τ<sub>n</sub> = τ<sub>p</sub> = 10⁻⁶s</td></tr>' +
    '</tbody></table></div>' +
    '<p><b>א. (6 נק׳)</b> חשבו את פוטנציאל המגע <span dir="ltr">V₀</span> ואת רוחב אזור המחסור <span dir="ltr">W</span>. ' +
    'מפעילים על הצומת מתח קדמי (forward) של <span dir="ltr">V = 0.6V</span> (רלוונטי לסעיפים הבאים).</p>' +
    '<p><b>ב. (6 נק׳)</b> חשבו את הזרם בצומת.</p>' +
    '<p><b>ג. (8 נק׳)</b><br>' +
    '1. סרטטו גרף זרם החורים בצד <span dir="ltr">N</span> של הצומת (מחוץ לאזור המחסור).<br>' +
    '2. היכן לאורך הצומת הזרם הזה מקסימלי והיכן מינימלי?<br>' +
    '3. חשבו את הזרם המקסימלי והזרם המינימלי.</p>' +
    '<p><b>ד. (7 נק׳)</b><br>' +
    '1. סרטטו גרף זרם האלקטרונים בצד <span dir="ltr">N</span> של הצומת (מחוץ לאזור המחסור).<br>' +
    '2. היכן לאורך הצומת הזרם הזה מקסימלי והיכן מינימלי?<br>' +
    '3. חשבו את הזרם המקסימלי והמינימלי.</p>' +
    '<p><b>ה. (6 נק׳)</b><br>' +
    '1. לגבי כל אחד מארבעת הזרמים שחושבו בשני הסעיפים הקודמים — האם הוא זרם דיפוזיה, זרם סחיפה, או שילוב של שניהם?<br>' +
    '2. הסבירו מדוע חייב להיות שדה חשמלי גם מחוץ לאזור המחסור.<br>' +
    '3. האם השדה הזה גדול יותר סמוך לאזור המחסור, או רחוק ממנו? נמקו!</p>';

  var yq2Sol =
    '<details class="sol"><summary>פתרון</summary><div class="body">' +
    '<h4>א. פוטנציאל מגע ורוחב אזור מחסור</h4>' +
    '<p><span dir="ltr">V₀ = (k_BT/q)ln(N_DN_A/n_i²) = 0.026V·ln[(10¹⁶·10¹⁷)/(1.5×10¹⁰)²] ≈ 0.757V</span></p>' +
    '<p><span dir="ltr">W = √[2ε_rε₀V₀/q · (N_D+N_A)/(N_DN_A)] ≈ 3.3×10⁻⁵cm</span></p>' +
    '<h4>ב. הזרם בצומת (V=0.6V קדמי)</h4>' +
    '<p>מקדמי דיפוזיה (יחס איינשטיין):</p>' +
    '<p><span dir="ltr">D_p = (k_BT/q)μ_p = 0.026×500 = 13 cm²/s</span> &nbsp;,&nbsp; ' +
    '<span dir="ltr">D_n = (k_BT/q)μ_n = 0.026×1400 = 36.4 cm²/s</span></p>' +
    '<p>אורכי דיפוזיה:</p>' +
    '<p><span dir="ltr">L_p = √(D_pτ_p) ≈ 3.6×10⁻³cm</span> &nbsp;,&nbsp; <span dir="ltr">L_n = √(D_nτ_n) ≈ 6×10⁻³cm</span></p>' +
    '<p>ריכוזי מיעוט בשיווי משקל:</p>' +
    '<p><span dir="ltr">p_n = n_i²/N_D = 2.25×10⁴cm⁻³</span> &nbsp;,&nbsp; <span dir="ltr">n_p = n_i²/N_A = 2.25×10³cm⁻³</span></p>' +
    '<p>זרם הרוויה (שוקלי):</p>' +
    '<p><span dir="ltr">I₀ = qA[(D_n/L_n)n_p + (D_p/L_p)p_n] ≈ 1.52×10⁻¹³A</span></p>' +
    '<p>הזרם בהטיה הקדמית:</p>' +
    '<p><span dir="ltr">I = I₀e<sup>qV/k_BT</sup> = (1.52×10⁻¹³A)·e<sup>0.6/0.026</sup> ≈ 1.6×10⁻³A (1.6mA)</span></p>' +
    '<h4>ג. זרם החורים בצד N</h4>' +
    '<p>זרם החורים בצד <span dir="ltr">N</span> הוא זרם דיפוזיה של חורים שהוזרקו מצד <span dir="ltr">P</span>: ' +
    'הוא מקסימלי ממש בקצה אזור המחסור (<span dir="ltr">x=x⁰<sub>n</sub></span>, שם ריכוז החורים העודף הכי גבוה), ודועך ' +
    'אקספוננציאלית (קבוע דעיכה <span dir="ltr">L_p</span>) ככל שמתרחקים מהצומת — ומתאפס (בערך) הרחק מאוד מאזור המחסור, ' +
    'כאשר ריכוז החורים חוזר לערך שיווי המשקל <span dir="ltr">p_n</span> (שם השיפוע ⟶0).</p>' +
    '<p><span dir="ltr">I<sub>p</sub><sup>max</sup> = qA(D_p/L_p)p_n·e<sup>qV/k_BT</sup> ≈ 1.37×10⁻³A</span> &nbsp; (בקצה אזור המחסור)</p>' +
    '<p><span dir="ltr">I<sub>p</sub><sup>min</sup> ≈ 0</span> &nbsp; (הרחק מאוד מאזור המחסור)</p>' +
    '<h4>ד. זרם האלקטרונים בצד N</h4>' +
    '<p>זרם האלקטרונים משלים את זרם החורים לזרם הכולל הקבוע <span dir="ltr">I</span> (שימור זרם): ' +
    '<span dir="ltr">I_n(x)+I_p(x)=I</span> בכל <span dir="ltr">x</span>. לכן הוא <b>מינימלי</b> בדיוק היכן שזרם החורים ' +
    '<b>מקסימלי</b> — בקצה אזור המחסור — ו<b>מקסימלי</b> (שווה לזרם הכולל) הרחק מאזור המחסור, שם זרם החורים כמעט אפס.</p>' +
    '<p><span dir="ltr">I<sub>n</sub><sup>max</sup> = I = 1.6×10⁻³A</span> &nbsp; (הרחק מאזור המחסור)</p>' +
    '<p><span dir="ltr">I<sub>n</sub><sup>min</sup> = I − I<sub>p</sub><sup>max</sup> ≈ 1.6×10⁻³−1.37×10⁻³ ≈ 2.3×10⁻⁴A</span> &nbsp; (בקצה אזור המחסור)</p>' +
    '<h4>ה. דיפוזיה מול סחיפה מחוץ לאזור המחסור</h4>' +
    '<p><b>1.</b> זרם החורים בצד <span dir="ltr">N</span> (גם המקסימלי וגם המינימלי) הוא <b>זרם דיפוזיה טהור</b> — נובע ' +
    'כולו משיפוע ריכוז החורים העודפים. זרם האלקטרונים <b>הרחק</b> מהצומת הוא כמעט <b>זרם סחיפה טהור</b> (ריכוז ' +
    'האלקטרונים שם כמעט אחיד <span dir="ltr">≈N_D</span>, אין שיפוע משמעותי, אך הזרם שם חייב להיות שווה לזרם הכולל ' +
    '<span dir="ltr">I</span>). זרם האלקטרונים <b>סמוך</b> לאזור המחסור הוא <b>שילוב</b> של דיפוזיה וסחיפה: השחבור עם ' +
    'החורים המוזרקים יוצר שם שיפוע קטן (אך לא אפס) גם בריכוז האלקטרונים, אבל בגלל שריכוז האלקטרונים עצמו גדול מאוד ' +
    '(<span dir="ltr">≈N_D</span>), אפילו שדה קטן שם תורם זרם סחיפה משמעותי — ולכן שני האברים קיימים יחד.</p>' +
    '<p><b>2.</b> הרחק מאזור המחסור אין כמעט שיפועי ריכוז (כמעט כל הנושאים העודפים כבר השתחברו במרחק של אורך דיפוזיה ' +
    'אחד או פחות), ולכן זרם הדיפוזיה שם כמעט אפס — אבל זרם כלשהו עדיין חייב לזרום שם (שימור זרם, <span dir="ltr">I</span> ' +
    'קבוע לאורך כל <span dir="ltr">x</span>). הזרם היחיד שיכול להתקיים בלי שיפוע ריכוז הוא זרם סחיפה — ולכן חייב להיות שם שדה חשמלי (קטן).</p>' +
    '<p><b>3.</b> השדה <b>גדול יותר רחוק</b> מאזור המחסור ו<b>קטן יותר סמוך</b> אליו. סמוך לאזור המחסור רוב הזרם עדיין ' +
    'דיפוזיה (שיפועי הריכוז שם גדולים), כך שדרוש רק שדה קטן כדי לספק את החלק הקטן שבסחיפה; רחוק מהצומת, כשהדיפוזיה כבר ' +
    'דעכה כמעט לגמרי, כל הזרם צריך לעבור בסחיפה — ולכן דרוש שם שדה גדול יותר (עדיין קטן בהרבה מהשדה בתוך אזור המחסור עצמו).</p>' +
    '</div></details>';

  window.BANK_OPEN_QUESTIONS.push({
    id: "25s2m1-Yq2",
    cat: "pn-diode",
    difficulty: 4,
    skills: ["צומת PN בהטיה קדמית", "זרם רוויה I₀", "פילוג זרמי מיעוט"],
    origin: "official",
    sourceLabel: SRC_Y,
    kind: "open",
    prompt: yq2Body,
    hint: "זרם החורים בצד N הוא תמיד זרם דיפוזיה טהור שדועך עם L_p; זרם האלקטרונים משלים אותו לזרם הכולל הקבוע I_n(x)+I_p(x)=I בכל x — מזה נובעים המינימום/מקסימום של כל זרם.",
    qtype: "analysis",
    html: yq2Body + yq2Sol
  });

  /* ============================================================
   * Yq3 — mos-mosfet: השוואת שני טרנזיסטורי MOSFET (n+pn+) בעלי
   * מוביליות ומתחי סף שונים, דרך משוואות הזרם באזור הטריודה.
   * ============================================================ */

  var yq3Body =
    '<p>נתונים זוג טרנזיסטורים <span dir="ltr">MOSFET (n⁺pn⁺)</span> זהים לחלוטין בכל פרמטר, מלבד ריכוזי האילוח.</p>' +
    '<p>מסתבר שהזרם <span dir="ltr">I_D</span> בין המקור (Source) לשפך (Drain) זהה בשני הטרנזיסטורים, כאשר על שניהם ' +
    'מופעל אותו מתח שער <span dir="ltr">V_g</span>, אך על טרנזיסטור 1 מופעל מתח <span dir="ltr">V_D1=V</span> בין המקור ' +
    'לשפך, ואילו על טרנזיסטור 2 מופעל מתח <span dir="ltr">V_D2=V/10</span>.</p>' +
    '<p>מבדיקת התנהגות הטרנזיסטורים בסביבת המתחים הנ"ל, עולה כי תלות הזרם <span dir="ltr">I_D</span> במתח ' +
    '<span dir="ltr">V_D</span> היא:</p>' +
    '<p><span dir="ltr">I<sub>D1</sub>(V_D) = aV_D − bV_D²</span> &nbsp;,&nbsp; <span dir="ltr">I<sub>D2</sub>(V_D) ≈ cV_D</span></p>' +
    '<p>כאשר <span dir="ltr">a=0.08, b=0.2, c=0.4</span> (ביחידות המתאימות).</p>' +
    '<p>עוד נתון שבשל השוני בריכוזי האילוח בין שני הטרנזיסטורים, מתקיים גם:</p>' +
    '<p><span dir="ltr">V<sub>T1</sub>/V<sub>T2</sub> = μ₂/(10μ₁) = 4/5</span></p>' +
    '<p>כאשר <span dir="ltr">V_T1, V_T2</span> הם מתחי הסף של שני הטרנזיסטורים, ו-<span dir="ltr">μ₁, μ₂</span> ערכי ' +
    'המוביליות של נושאי המטען על פני שטח התעלה בשניהם. עבור כל הגדלים המבוקשים — התוצאות מספריות.</p>' +
    '<p><b>א. (9 נק׳)</b><br>' +
    '1. מהן היחידות של שלושת הקבועים <span dir="ltr">a, b, c</span>?<br>' +
    '2. חשבו את היחס <span dir="ltr">k₂/k₁</span>, כאשר <span dir="ltr">k₁, k₂</span> הם מקדמי מוליכות התעלה של שני הטרנזיסטורים.</p>' +
    '<p><b>ב. (8 נק׳)</b><br>' +
    '1. הסבירו את משמעות ההבדל בתלות הפונקציונלית של הזרם במתח בין שני הטרנזיסטורים.<br>' +
    '2. חשבו את המתח <span dir="ltr">V_D1=V</span> שעבורו שני הטרנזיסטורים מעבירים את אותו זרם.</p>' +
    '<p><b>ג. (8 נק׳)</b> חשבו את מתח השער <span dir="ltr">V_g</span> המשותף לשני הטרנזיסטורים.</p>' +
    '<p><b>ד. (8 נק׳)</b> במצב המתואר בשאלה, קבלו תנאים על מתחי הסף <span dir="ltr">V_T1, V_T2</span> ' +
    '(כלומר תנאים מהצורה <span dir="ltr">V_T&lt;?</span> או <span dir="ltr">V_T&gt;?</span>; דייקו גם בסימונים כמו ' +
    '<span dir="ltr">≥,≤,≫,≪</span>).</p>';

  var yq3Sol =
    '<details class="sol"><summary>פתרון</summary><div class="body">' +
    '<h4>א.1 יחידות a, b, c</h4>' +
    '<p><span dir="ltr">[c]=[a]=[I]/[V]=A/V=Ω⁻¹</span> (מוליכות) &nbsp;,&nbsp; <span dir="ltr">[b]=[I]/[V]²=A/V²=(VΩ)⁻¹</span></p>' +
    '<h4>א.2 יחס k₂/k₁</h4>' +
    '<p>שני הטרנזיסטורים זהים בכל פרט מלבד האילוח (שקובע את המוביליות), כך שמקדם המוליכות ' +
    '<span dir="ltr">k=ε<sub>ox</sub>Wμ/(Ld)</span> משתנה רק דרך <span dir="ltr">μ</span>: <span dir="ltr">k₂/k₁=μ₂/μ₁</span>. ' +
    'מהנתון <span dir="ltr">μ₂/(10μ₁)=4/5</span> נקבל <span dir="ltr">μ₂/μ₁=8</span>, ולכן:</p>' +
    '<p><span dir="ltr">k₂/k₁ = 8</span></p>' +
    '<h4>ב.1 משמעות התלות הפונקציונלית</h4>' +
    '<p>הצורה <span dir="ltr">I_D1=aV_D−bV_D²</span> היא הנוסחה המלאה לאזור הטריודה: ' +
    '<span dir="ltr">I_D=k[(V_g−V_T)V_D − V_D²/2]</span>, תקפה לכל <span dir="ltr">0≤V_D≤V_g−V_T</span> — ' +
    'כלומר טרנזיסטור 1 עובד בטריודה "מלאה" (הפרבולית), עם <span dir="ltr">V_D1</span> לא זניח לעומת <span dir="ltr">V_g−V_T1</span>. ' +
    'הצורה <span dir="ltr">I_D2≈cV_D</span> היא הקירוב הליניארי (אוהמי) של אותה נוסחה עבור <span dir="ltr">V_D≪V_g−V_T</span> ' +
    '(מזניחים את איבר <span dir="ltr">V_D²</span>) — כלומר טרנזיסטור 2 עובד עמוק בתחום הליניארי.</p>' +
    '<h4>ב.2 המתח V שבו שני הזרמים שווים</h4>' +
    '<p><span dir="ltr">I_D1(V)=I_D2(V/10) &nbsp;⟹&nbsp; aV−bV² = c·(V/10)</span></p>' +
    '<p>מחלקים ב-<span dir="ltr">V</span> (שונה מאפס):</p>' +
    '<p><span dir="ltr">a−bV = c/10 &nbsp;⟹&nbsp; V = (10a−c)/(10b) = (0.8−0.4)/2 = 0.2V</span></p>' +
    '<h4>ג. מתח השער V_g</h4>' +
    '<p>מהתאמת הנוסחאות: <span dir="ltr">a=k₁(V_g−V_T1)</span>, <span dir="ltr">b=k₁/2</span> (כלומר <span dir="ltr">k₁=2b=0.4</span>), ' +
    'ו-<span dir="ltr">c=k₂(V_g−V_T2)</span> עם <span dir="ltr">k₂=8k₁=3.2</span> (מסעיף א.2).</p>' +
    '<p><span dir="ltr">V_g−V_T1 = a/k₁ = 0.08/0.4 = 0.2V &nbsp;⟹&nbsp; V_T1 = V_g−0.2</span></p>' +
    '<p><span dir="ltr">V_g−V_T2 = c/k₂ = 0.4/3.2 = 0.125V &nbsp;⟹&nbsp; V_T2 = V_g−0.125</span></p>' +
    '<p>מציבים ביחס הנתון <span dir="ltr">V_T1/V_T2 = 4/5</span>:</p>' +
    '<p><span dir="ltr">(V_g−0.2)/(V_g−0.125) = 4/5 &nbsp;⟹&nbsp; 5(V_g−0.2) = 4(V_g−0.125) &nbsp;⟹&nbsp; 5V_g−1 = 4V_g−0.5 &nbsp;⟹&nbsp; V_g = 0.5V</span></p>' +
    '<!-- verified: the official solution\'s last algebraic step used V=1V (instead of the V=0.2V correctly found in ב.2) when solving V=2(1−k₂/(10k₁))V_g=0.4V_g, giving V_g=2.5V. Re-deriving directly from a=k₁(V_g−V_T1), c=k₂(V_g−V_T2) and V_T1/V_T2=4/5 (bypassing that step entirely) gives V_g=0.5V, V_T1=0.3V, V_T2=0.375V — and these values plug back into a=k₁(V_g−V_T1)=0.4×0.2=0.08 ✓ and c=k₂(V_g−V_T2)=3.2×0.125=0.4 ✓, exactly matching the given a and c, which confirms V_g=0.5V (not 2.5V) is correct -->' +
    '<p><span dir="ltr">V_g ≈ 0.5V</span> &nbsp; (ואז <span dir="ltr">V_T1=0.3V</span>, <span dir="ltr">V_T2=0.375V</span> — בדיקה: ' +
    '<span dir="ltr">0.3/0.375=0.8=4/5</span> ✓, וגם <span dir="ltr">k₁(V_g−V_T1)=0.4×0.2=0.08=a</span> ✓ ו-' +
    '<span dir="ltr">k₂(V_g−V_T2)=3.2×0.125=0.4=c</span> ✓)</p>' +
    '<h4>ד. תנאים על מתחי הסף</h4>' +
    '<p>מתנאי התוקף של הנוסחה הפרבולית עבור טרנזיסטור 1, <span dir="ltr">0≤V_D1≤V_g−V_T1</span>, עם ' +
    '<span dir="ltr">V_D1=V=0.2V</span> ו-<span dir="ltr">V_g=0.5V</span>:</p>' +
    '<p><span dir="ltr">V_T1 ≤ V_g−V_D1 = 0.5−0.2 = 0.3V</span></p>' +
    '<p>מתנאי התוקף של הקירוב הליניארי עבור טרנזיסטור 2, <span dir="ltr">0≤V_D2≪V_g−V_T2</span>, עם ' +
    '<span dir="ltr">V_D2=V/10=0.02V</span>:</p>' +
    '<p><span dir="ltr">V_T2 ≪ V_g−V_D2 = 0.5−0.02 = 0.48V</span></p>' +
    '</div></details>';

  window.BANK_OPEN_QUESTIONS.push({
    id: "25s2m1-Yq3",
    cat: "mos-mosfet",
    difficulty: 4,
    skills: ["MOSFET באזור הטריודה", "מקדם מוליכות k", "מתח סף V_T"],
    origin: "official",
    sourceLabel: SRC_Y,
    kind: "open",
    prompt: yq3Body,
    hint: "התאימו כל אחת מנוסחאות הזרם הנתונות לצורה הכללית I_D=k[(V_g−V_T)V_D−V_D²/2] כדי לזהות מיהם a,b,c במונחי k,V_g,V_T — ואז יש לכם שתי משוואות פשוטות ב-V_g ו-V_T.",
    qtype: "analysis",
    html: yq3Body + yq3Sol
  });
})();
