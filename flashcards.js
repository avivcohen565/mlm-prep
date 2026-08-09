/* ============================================================
 *  flashcards.js — כרטיסיות זיכרון עם חזרה מרווחת (Leitner)
 *  + סט "מצא את הטעות" מטעויות אמיתיות שנמצאו בפתרונות הרשמיים.
 *  דירוג עצמי: ידעתי בקלות / התלבטתי / לא ידעתי.
 *  קופסאות 0-4, מרווחים: עכשיו / 5ד' / 30ד' / 3ש' / יום.
 * ============================================================ */
(function () {
  "use strict";

  var host = document.getElementById("flashcards");
  if (!host) return;

  var KEY = ((window.COURSE && window.COURSE.storagePrefix) || "course-") + "flashcards-v1";
  var INTERVALS = [60e3, 5 * 60e3, 30 * 60e3, 3 * 3600e3, 24 * 3600e3]; /* ms לפי קופסה */

  /* ---------- תוכן הכרטיסיות ---------- */
  var CARDS = [

    /* ===== נושא 1 — מוליכים למחצה וזרמים ===== */
    { id: "t1-1", cat: "sc", q: "איך מחשבים את <span dir=\"ltr\">n<sub>0</sub></span> דרך מיקום רמת פרמי?",
      a: "<span dir=\"ltr\">n<sub>0</sub> = n<sub>i</sub>·e<sup>(E<sub>F</sub>−E<sub>i</sub>)/kT</sup></span> — וכשההפרש הפוך בסימן מקבלים את <span dir=\"ltr\">p<sub>0</sub></span>. ככל ש-E<sub>F</sub> רחוק ממרכז הפס, האילוח חזק יותר." },
    { id: "t1-2", cat: "sc", q: "חוק פעולת המסה — מהו ומתי תקף?",
      a: "<span dir=\"ltr\">n<sub>0</sub>·p<sub>0</sub> = n<sub>i</sub>²</span>. תקף <b>בשיווי משקל בלבד</b> — אבל כן תקף בכל נקודה גם באילוח לא-אחיד." },
    { id: "t1-3", cat: "sc", q: "מתי מותר לכתוב <span dir=\"ltr\">n<sub>0</sub>≈N<sub>d</sub></span> ומה עושים כשאסור?",
      a: "מותר רק כש-<span dir=\"ltr\">N<sub>d</sub>−N<sub>a</sub> ≫ n<sub>i</sub></span>. אחרת פותרים ריבועית מעקרון הפיצוי: <span dir=\"ltr\">n² − (N<sub>d</sub>−N<sub>a</sub>)n − n<sub>i</sub>² = 0</span>." },
    { id: "t1-4", cat: "sc", q: "השדה הפנימי בפיסה עם אילוח לא-אחיד <span dir=\"ltr\">N(x)</span>?",
      a: "<span dir=\"ltr\">ε(x) = −(kT/q)·(1/n<sub>0</sub>)·(dn<sub>0</sub>/dx)</span> — שדה שיווי-משקל שמאזן בדיוק את הדיפוזיה. קיים בלי צומת ובלי מתח חיצוני!" },
    { id: "t1-5", cat: "sc", q: "יחס איינשטיין?",
      a: "<span dir=\"ltr\">D/μ = kT/q ≈ 0.0259V</span> ב-300K. אם הטמפרטורה שונה — מתכוונן לינארית: <span dir=\"ltr\">(kT/q)·(T/300)</span>." },
    { id: "t1-6", cat: "sc", q: "מה ההבדל בין שיווי משקל למצב עמיד?",
      a: "שיווי משקל = רק עירור תרמי (אין אור/מתח). מצב עמיד = שום דבר לא משתנה בזמן — יכול לכלול הארה קבועה. הארה רציפה ⟸ עמיד אך לא שיווי משקל." },
    { id: "t1-7", cat: "sc", q: "מאירים פיסה באופן אחיד — האם נוצרים זרמי דיפוזיה או שדה?",
      a: "לא! עירור אחיד לא יוצר גרדיאנט ריכוז ⟸ אין דיפוזיה ⟸ גם אין שדה פנימי. למרות שהמערכת לא בשיווי משקל." },
    { id: "t1-8", cat: "sc", q: "אורך דיפוזיה — נוסחה ומשמעות?",
      a: "<span dir=\"ltr\">L = √(Dτ)</span> — המרחק שבו עודף נשאי המיעוט דועך ל-<span dir=\"ltr\">1/e≈36.8%</span>. אחרי 3L נשאר בערך 5%." },
    { id: "t1-9", cat: "sc", q: "משוואת הרצף המלאה לעודף חורים?",
      a: "<span dir=\"ltr\">dδp/dt = g<sub>op</sub> − δp/τ − (1/q)·dJ/dx</span> — יצירה פחות רקומבינציה פחות זרימה נטו החוצה. במצב עמיד האגף השמאלי מתאפס." },
    { id: "t1-10", cat: "sc", q: "מה קורה לעודף הנשאים אחרי שמכבים את האור?",
      a: "דעיכה מעריכית: <span dir=\"ltr\">δp(t) = δp(0)·e<sup>−t/τ</sup></span>. ובמצב עמיד תחת הארה: <span dir=\"ltr\">δp = g<sub>op</sub>·τ</span>." },
    { id: "t1-11", cat: "sc", q: "קצב השחבור בשיווי משקל לעומת בזמן הארה חזקה?",
      a: "בשיווי משקל: <span dir=\"ltr\">r = p<sub>0</sub>/τ</span> (זעיר). בהארה במצב עמיד: <span dir=\"ltr\">r ≈ g<sub>op</sub></span> — השחבור משתווה בדיוק ליצירה." },
    { id: "t1-12", cat: "sc", q: "התנגדות של פיסה עם אילוח לא-אחיד — איך ניגשים?",
      a: "נגדים בטור: <span dir=\"ltr\">dR = dx/(A·σ(x))</span> ואז אינטגרל על כל האורך. אי אפשר להשתמש ב-<span dir=\"ltr\">ρL/A</span> ישירות כי σ תלוי ב-x." },

    /* ===== נושא 2 — צומת PN והדיודה ===== */
    { id: "t2-1", cat: "pn", q: "שתי הצורות של פוטנציאל המגע <span dir=\"ltr\">V<sub>0</sub></span> — ומתי חובה להשתמש בשנייה?",
      a: "<span dir=\"ltr\">V<sub>0</sub>=(kT/q)ln(N<sub>a</sub>N<sub>d</sub>/n<sub>i</sub>²)</span> או <span dir=\"ltr\">(kT/q)ln(p<sub>p</sub>/p<sub>n</sub>)</span>. השנייה <b>חובה</b> כשאחד הצדדים לא מקיים p≈N (אילוח לא ≫ n<sub>i</sub>)." },
    { id: "t2-2", cat: "pn", q: "ניטרליות מטען בצומת — ומי מקבל אזור מחסור רחב יותר?",
      a: "<span dir=\"ltr\">N<sub>a</sub>·x<sub>p0</sub> = N<sub>d</sub>·x<sub>n0</sub></span> — הצד <b>המאולח פחות</b> מקבל את הרוחב הגדול. בצומת חד-צדדי כמעט כל המחסור בצד החלש." },
    { id: "t2-3", cat: "pn", q: "רוחב אזור המחסור הכולל?",
      a: "<span dir=\"ltr\">W = √[2ε<sub>r</sub>ε<sub>0</sub>V<sub>0</sub>(N<sub>a</sub>+N<sub>d</sub>)/(qN<sub>a</sub>N<sub>d</sub>)]</span>. תחת ממתח מחליפים <span dir=\"ltr\">V<sub>0</sub>→V<sub>0</sub>−V<sub>A</sub></span>." },
    { id: "t2-4", cat: "pn", q: "איך עוברים מ-ρ(x) לשדה — כולל תנאי השפה?",
      a: "גאוס דיפרנציאלי: <span dir=\"ltr\">dε/dx = ρ(x)/(ε<sub>r</sub>ε<sub>0</sub>)</span>, עם דרישת <span dir=\"ltr\">ε=0</span> בשני קצוות אזור המחסור. עובד גם לפרופיל לא-מלבני (סינוס/מעריכי)." },
    { id: "t2-5", cat: "pn", q: "הקשר הגרפי בין השדה לפוטנציאל המגע?",
      a: "V₀ = השטח מתחת לגרף |ε(x)|. בפרופיל מלבני זה משולש: <span dir=\"ltr\">V<sub>0</sub> = ½·ε<sub>max</sub>·W</span>. ב-PIN מתווסף מלבן: <span dir=\"ltr\">V<sub>0</sub> = ε<sub>0</sub>L + ½ε<sub>0</sub>(x<sub>n</sub>+x<sub>p</sub>)</span>." },
    { id: "t2-6", cat: "pn", q: "משוואת שוקלי וזרם הרוויה?",
      a: "<span dir=\"ltr\">I = I<sub>0</sub>(e<sup>qV/kT</sup>−1)</span>, כאשר <span dir=\"ltr\">I<sub>0</sub> = qA·n<sub>i</sub>²·(D<sub>p</sub>/(L<sub>p</sub>N<sub>d</sub>) + D<sub>n</sub>/(L<sub>n</sub>N<sub>a</sub>))</span> — נשלט ע\"י הצד המאולח פחות." },
    { id: "t2-7", cat: "pn", q: "תנאי השפה של ריכוז המיעוט בקצה אזור המחסור תחת ממתח?",
      a: "<span dir=\"ltr\">p<sub>n</sub>(x<sub>n0</sub>) = p<sub>n</sub>·e<sup>qV/kT</sup></span> — בקדמי מוזרק עודף (גדל פי אקספוננט), באחורי נשאב לאפס." },
    { id: "t2-8", cat: "pn", q: "ממתח אחורי — במה הזרם תלוי ובמה לא?",
      a: "<span dir=\"ltr\">I ≈ −I<sub>0</sub></span> — <b>לא תלוי במתח</b>. כן תלוי בטמפרטורה (דרך n<sub>i</sub>²) ובהארה. רובו סחיפה של נשאי מיעוט." },
    { id: "t2-9", cat: "pn", q: "השפעת הארה על זרם הדיודה?",
      a: "<span dir=\"ltr\">ΔI = −qA·G<sub>op</sub>·(L<sub>n</sub>+L<sub>p</sub>+W)</span> — כל זוג שנוצר במרחק אורך-דיפוזיה מאזור המחסור (או בתוכו) נאסף. תמיד לכיוון הזרם האחורי." },
    { id: "t2-10", cat: "pn", q: "צומת PIN מול PN — מה זהה ומה שונה?",
      a: "V<sub>0</sub> <b>זהה</b> (תלוי רק בקצוות). השדה המקסימלי <b>קטן יותר</b> (אותו שטח נפרש על רוחב גדול יותר). זרם הזליגה <b>גדול יותר</b> (נפח גנרציה נוסף)." },
    { id: "t2-11", cat: "pn", q: "איך מזהים מגרף נשאי מיעוט אם הצומת בקדמי או אחורי?",
      a: "ריכוז מיעוט ליד המחסור <b>גבוה</b> מהערך בעומק ⟸ הזרקה ⟸ קדמי. <b>נמוך</b> מהעומק (שאיבה) ⟸ אחורי." },
    { id: "t2-12", cat: "pn", q: "זרם החורים בצד ה-n בהטיה קדמית — איפה מקסימלי ולמה?",
      a: "דיפוזיה טהורה, מקסימלית בדיוק בקצה אזור המחסור ודועכת עם <span dir=\"ltr\">L<sub>p</sub></span>. זרם האלקטרונים משלים בכל נקודה לזרם הכולל הקבוע: <span dir=\"ltr\">I<sub>n</sub>(x)+I<sub>p</sub>(x)=I</span>." },

    /* ===== נושא 3 — קבל MOS ו-MOSFET ===== */
    { id: "t3-1", cat: "mos", q: "הגדרת <span dir=\"ltr\">φ<sub>F</sub></span> והסימן שלה לפי סוג המצע?",
      a: "<span dir=\"ltr\">φ<sub>F</sub> = (E<sub>i</sub>−E<sub>F</sub>)/q</span> בעומק המצע. מצע p: חיובית, <span dir=\"ltr\">φ<sub>F</sub>=(kT/q)ln(N<sub>a</sub>/n<sub>i</sub>)</span>. מצע n: שלילית — וכל אי-השוויונים מתהפכים." },
    { id: "t3-2", cat: "mos", q: "ארבעת מצבי העבודה של קבל MOS (מצע p) לפי <span dir=\"ltr\">φ<sub>s</sub></span>?",
      a: "<span dir=\"ltr\">φ<sub>s</sub>&lt;0</span> צבירה · <span dir=\"ltr\">0&lt;φ<sub>s</sub>&lt;φ<sub>F</sub></span> מחסור · <span dir=\"ltr\">φ<sub>F</sub>&lt;φ<sub>s</sub>&lt;2φ<sub>F</sub></span> אינברסיה חלשה · <span dir=\"ltr\">φ<sub>s</sub>=2φ<sub>F</sub></span> סף אינברסיה חזקה." },
    { id: "t3-3", cat: "mos", q: "מה מיוחד בנקודת סף האינברסיה החזקה?",
      a: "שלושה דברים בבת אחת: <span dir=\"ltr\">φ<sub>s</sub>=2φ<sub>F</sub></span>, <span dir=\"ltr\">V<sub>g</sub>=V<sub>T</sub></span>, ו-<span dir=\"ltr\">n<sub>s</sub>=N<sub>a</sub></span> (ריכוז האלקטרונים בשפה משתווה לאילוח). מעבר לסף φ<sub>s</sub> ו-w ננעלים." },
    { id: "t3-4", cat: "mos", q: "מתח הסף למצע p?",
      a: "<span dir=\"ltr\">V<sub>T</sub> = 2φ<sub>F</sub> + (2d<sub>ox</sub>/ε<sub>ox</sub>)·√(qε<sub>s</sub>ε<sub>0</sub>N<sub>a</sub>φ<sub>F</sub>)</span> = כיפוף הפסים + המתח על האוקסיד. במצע n שני האיברים שליליים." },
    { id: "t3-5", cat: "mos", q: "מאזן המתחים בקבל MOS?",
      a: "<span dir=\"ltr\">V<sub>g</sub> = V<sub>ox</sub> + φ<sub>s</sub></span> — תמיד, בכל מצב עבודה. כשנתונה דיאגרמת פסים אפשר לקרוא ממנה ישירות את שני החלקים." },
    { id: "t3-6", cat: "mos", q: "רוחב המחסור המקסימלי <span dir=\"ltr\">w<sub>T</sub></span> — ובמה הוא תלוי?",
      a: "<span dir=\"ltr\">w<sub>T</sub> = 2√(ε<sub>s</sub>ε<sub>0</sub>φ<sub>F</sub>/(qN<sub>a</sub>))</span> — תלוי <b>רק בסיליקון</b> (N<sub>a</sub>, φ<sub>F</sub>), לא בעובי האוקסיד. לכן זהה לכל הקבלים באותו מצע." },
    { id: "t3-7", cat: "mos", q: "<span dir=\"ltr\">C<sub>max</sub></span> ו-<span dir=\"ltr\">C<sub>min</sub></span> בעקומת C-V בתדר גבוה?",
      a: "<span dir=\"ltr\">C<sub>max</sub>=C<sub>ox</sub>=ε<sub>ox</sub>/d<sub>ox</sub></span> (צבירה). <span dir=\"ltr\">C<sub>min</sub></span> = חיבור טורי של C<sub>ox</sub> עם <span dir=\"ltr\">ε<sub>s</sub>/w<sub>T</sub></span> — מוערך תמיד ב-w<sub>T</sub> בדיוק." },
    { id: "t3-8", cat: "mos", q: "ריכוז האלקטרונים על השפה?",
      a: "<span dir=\"ltr\">n<sub>s</sub> = n<sub>i</sub>·e<sup>q(φ<sub>s</sub>−φ<sub>F</sub>)/kT</sup></span> — רגיש אקספוננציאלית להפרש, לכן אסור לעגל את φ<sub>s</sub>,φ<sub>F</sub> לפני ההצבה." },
    { id: "t3-9", cat: "mos", q: "משוואת הזרם של MOSFET בתחום הטריודי + תנאי התקפות?",
      a: "<span dir=\"ltr\">I<sub>D</sub> = k[(V<sub>g</sub>−V<sub>T</sub>)V<sub>D</sub> − V<sub>D</sub>²/2]</span> עבור <span dir=\"ltr\">0≤V<sub>D</sub>≤V<sub>g</sub>−V<sub>T</sub></span>. כש-<span dir=\"ltr\">V<sub>D</sub>≪V<sub>g</sub>−V<sub>T</sub></span>: קירוב ליניארי <span dir=\"ltr\">I<sub>D</sub>≈k(V<sub>g</sub>−V<sub>T</sub>)V<sub>D</sub></span>." },
    { id: "t3-10", cat: "mos", q: "מה קורה כשמפעילים MOSFET בדיוק ב-<span dir=\"ltr\">V<sub>g</sub>=V<sub>T</sub></span>?",
      a: "<span dir=\"ltr\">I<sub>D</sub>=0</span> ו-<span dir=\"ltr\">R→∞</span> — נקודת ה-pinch-off. הגיאומטריה (W,L) והמתח V<sub>D</sub> שנתונים הם <b>הסחת דעת</b>." },
    { id: "t3-11", cat: "mos", q: "מקדם ההולכה k — ואיך משווים שני טרנזיסטורים?",
      a: "<span dir=\"ltr\">k = ε<sub>ox</sub>Wμ/(L·d<sub>ox</sub>)</span>. אם הכל זהה חוץ מהאילוח: <span dir=\"ltr\">k<sub>2</sub>/k<sub>1</sub> = μ<sub>2</sub>/μ<sub>1</sub></span>." },
    { id: "t3-12", cat: "mos", q: "איך מזהים את סוג המצע מדיאגרמת פסים?",
      a: "E<sub>F</sub> מתחת ל-E<sub>i</sub> בעומק ⟸ מצע p (הקבל NMOS). E<sub>F</sub> מעל E<sub>i</sub> ⟸ מצע n (PMOS). המרחק ביניהם = qφ<sub>F</sub>." },

    /* ===== מצא את הטעות — טעויות אמיתיות מפתרונות רשמיים ===== */
    { id: "b-1", cat: "bug", q: "🐞 <b>מצא את הטעות</b> [מבחן 2025]: מדיאגרמת פסים נתונה <span dir=\"ltr\">E<sub>i</sub>(x)=0.5√x</span> (ב-eV), והפתרון הרשמי כתב: <span dir=\"ltr\">ε(x) = 1/(4q√x)</span>. מה לא בסדר?",
      a: "ה-q מיותר! כש-E<sub>i</sub> נתון כבר ב-eV, החלוקה ב-q כבר \"מובנית\" ביחידות: <span dir=\"ltr\">ε(x) = (1/q)·dE<sub>i</sub>/dx = 1/(4√x)</span> V/cm. הטעות גררה q חסר גם בזרמים בהמשך." },
    { id: "b-2", cat: "bug", q: "🐞 <b>מצא את הטעות</b> [מבחן 2025]: בסעיף ב' נמצא V=0.2V, ובסעיף ג' הפתרון הציב V=1V בפתרון עבור V<sub>g</sub> וקיבל V<sub>g</sub>=2.5V. מה השתבש?",
      a: "הוצב מתח שגוי — צריך להציב את V=0.2V שנמצא קודם. התוצאה הנכונה: <span dir=\"ltr\">V<sub>g</sub>=0.5V</span> (ואז V<sub>T1</sub>=0.3V, V<sub>T2</sub>=0.375V — שמסתדרים בדיוק עם היחס הנתון 4/5). לקח: תמיד להציב תוצאות מסעיפים קודמים, לא נתונים גולמיים." },
    { id: "b-3", cat: "bug", q: "🐞 <b>מצא את הטעות</b> [מבחן 2025]: תחת הארה עם <span dir=\"ltr\">g<sub>op</sub>=1.9×10¹⁹</span>, הפתרון הרשמי כתב שקצב השחבור הוא <span dir=\"ltr\">r=1.9×10¹⁴ cm⁻³s⁻¹</span>. למה זה לא ייתכן?",
      a: "במצב עמיד השחבור חייב להשתוות ליצירה: <span dir=\"ltr\">r ≈ g<sub>op</sub> = 1.9×10<b>¹⁹</b></span>. טעות של 5 סדרי גודל במעריך. בדיקת עקביות פשוטה (יצירה=השמדה) תופסת את זה מיד." },
    { id: "b-4", cat: "bug", q: "🐞 <b>מצא את הטעות</b> [מבחן 2022]: הפתרון הרשמי חישב <span dir=\"ltr\">C<sub>A</sub><sup>min</sup> = 4.073×10⁻¹² / 3.452×10⁻⁴ ≈ 11.6 nF/cm²</span>. בדוק את החשבון.",
      a: "טעות חילוק פשוטה: <span dir=\"ltr\">4.073×10⁻¹²/3.452×10⁻⁴ = 1.18×10⁻⁸ F/cm² = <b>11.8</b> nF/cm²</span>. לקח: גם כשמעתיקים נוסחה נכונה — לוודא את החשבון במחשבון." },
    { id: "b-5", cat: "bug", q: "🐞 <b>מצא את הטעות</b> [מבחן 2024]: הפתרון קבע <span dir=\"ltr\">(e−e⁻⁴)/(e−1) ≈ 1.578</span>. בדוק.",
      a: "<span dir=\"ltr\">(2.71828−0.01832)/1.71828 ≈ <b>1.571</b></span>. כאן ההפרש לא שינה את התשובה הסופית המעוגלת (14.5μA) — אבל בסעיף אחר זה כבר היה עולה נקודות." },
    { id: "b-6", cat: "bug", q: "🐞 <b>מצא את הטעות</b>: סטודנט חישב <span dir=\"ltr\">n<sub>s</sub>=n<sub>i</sub>e<sup>(φ<sub>s</sub>−φ<sub>F</sub>)/kT</sup></span> עם ערכים מעוגלים φ<sub>s</sub>=0.20, φ<sub>F</sub>=0.41 וקיבל 4.5×10⁶. הערכים המדויקים: 0.192, 0.407. מה הבעיה?",
      a: "התלות אקספוננציאלית — עיגול של 8mV בהפרש משנה את התוצאה ב-~20% (הנכון: ≈3.7×10⁶). כלל: באקספוננטים מציבים ערכים לא מעוגלים, מעגלים רק בסוף." },
    { id: "b-7", cat: "bug", q: "🐞 <b>מצא את הטעות</b>: עבור InSb עם <span dir=\"ltr\">N<sub>d</sub>=3×10¹⁶</span> ו-<span dir=\"ltr\">n<sub>i</sub>=2×10¹⁶</span>, סטודנט כתב מיד <span dir=\"ltr\">n<sub>n</sub>≈N<sub>d</sub></span>. למה זה שגוי כאן?",
      a: "כי N<sub>d</sub> ו-n<sub>i</sub> באותו סדר גודל! חובה משוואה ריבועית: <span dir=\"ltr\">n<sub>n</sub>=[N<sub>d</sub>+√(N<sub>d</sub>²+4n<sub>i</sub>²)]/2 = 4×10¹⁶</span> — פער של 33% מהקירוב השגוי." },
    { id: "b-8", cat: "bug", q: "🐞 <b>מצא את הטעות</b>: נתון MOSFET עם W=10nm, L=0.1nm, V<sub>D</sub>=0.7V ו-V<sub>g</sub>=V<sub>T</sub>. סטודנט הציב הכל בנוסחת הזרם הטריודית וחישב I<sub>D</sub>. מה פספס?",
      a: "<span dir=\"ltr\">V<sub>g</sub>−V<sub>T</sub>=0</span> ⟸ pinch-off ⟸ <span dir=\"ltr\">I<sub>D</sub>=0</span> בלי שום חישוב. הנתונים הגיאומטריים הם מלכודת מכוונת." },
    { id: "b-9", cat: "bug", q: "🐞 <b>מצא את הטעות</b>: בשיטת Bulk-Charge מישהו רשם <span dir=\"ltr\">m = 1 + K/(2√(2φ<sub>F</sub>))</span>. השווה לחוברת.",
      a: "לפי חוברת ה-MOSFET (עמ' 8): <span dir=\"ltr\">m = 1 + K/(2√φ<sub>B</sub>)</span> — בלי ה-2 בתוך השורש (φ<sub>B</sub>≡φ<sub>F</sub> בסימוני החוברת). יחד איתה: <span dir=\"ltr\">V<sub>D,sat</sub>=(V<sub>G</sub>−V<sub>T</sub>)/m</span>." }
  ];

  var CATS = [
    { key: "all", label: "הכל" },
    { key: "sc",  label: "מוליכים למחצה" },
    { key: "pn",  label: "צומת PN" },
    { key: "mos", label: "MOS ו-MOSFET" },
    { key: "bug", label: "🐞 מצא את הטעות" }
  ];

  /* ---------- אחסון ---------- */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  var state = load();          /* id -> {box, due, seen} */

  var filter = "all";
  var current = null;          /* הכרטיסייה המוצגת */
  var flipped = false;
  var sessionDone = 0;

  function pool() {
    return CARDS.filter(function (c) { return filter === "all" || c.cat === filter; });
  }
  function rec(c) { return state[c.id] || { box: -1, due: 0, seen: 0 }; }

  function nextCard() {
    var now = Date.now(), p = pool();
    var due = p.filter(function (c) { var r = rec(c); return r.box >= 0 && r.due <= now; });
    var fresh = p.filter(function (c) { return rec(c).box < 0; });
    var later = p.filter(function (c) { var r = rec(c); return r.box >= 0 && r.due > now; })
                 .sort(function (a, b) { return rec(a).due - rec(b).due; });
    var pick = due.length ? due[Math.floor(Math.random() * due.length)]
             : fresh.length ? fresh[Math.floor(Math.random() * fresh.length)]
             : later[0] || null;
    return { card: pick, due: due.length, fresh: fresh.length, early: !due.length && !fresh.length };
  }

  function rate(level) {  /* 0=לא ידעתי 1=התלבטתי 2=בקלות */
    if (!current) return;
    var r = rec(current);
    var box = level === 0 ? 0 : level === 1 ? Math.max(1, r.box) : Math.min(4, (r.box < 0 ? 0 : r.box) + 1);
    state[current.id] = { box: box, due: Date.now() + INTERVALS[box], seen: (r.seen || 0) + 1 };
    save(state);
    sessionDone++;
    flipped = false;
    paint();
  }

  function stats() {
    var p = pool(), known = 0, started = 0;
    p.forEach(function (c) { var r = rec(c); if (r.box >= 3) known++; if (r.box >= 0) started++; });
    return { total: p.length, known: known, started: started };
  }

  function paint() {
    var pick = nextCard();
    current = pick.card;
    var st = stats();

    var chips = CATS.map(function (c) {
      return '<button class="quiz-btn' + (filter === c.key ? " primary on" : "") +
        '" data-fc-cat="' + c.key + '">' + c.label + "</button>";
    }).join("");

    var body;
    if (!current) {
      body = '<div class="quiz-empty">אין כרטיסיות בקטגוריה הזו.</div>';
    } else {
      var earlyNote = pick.early
        ? '<div class="note" style="margin-bottom:10px"><b>כל הכרטיסיות מתוזמנות להמשך</b> — זו חזרה מוקדמת. עדיין שווה!</div>' : "";
      body = earlyNote +
        '<div class="fc-card' + (flipped ? " flipped" : "") + '" data-fc-flip role="button" tabindex="0" aria-label="הפוך כרטיסייה">' +
          '<div class="fc-inner">' +
            '<div class="fc-face fc-front"><div class="fc-tag">שאלה · לחץ להיפוך</div><div class="fc-txt">' + current.q + "</div></div>" +
            '<div class="fc-face fc-back"><div class="fc-tag">תשובה</div><div class="fc-txt">' + current.a + "</div></div>" +
          "</div>" +
        "</div>" +
        (flipped
          ? '<div class="fc-rate">' +
            '<button class="quiz-btn fc-r0" data-fc-rate="0">❌ לא ידעתי<br><small>חוזרת מיד</small></button>' +
            '<button class="quiz-btn fc-r1" data-fc-rate="1">🤔 התלבטתי<br><small>עוד 5 דק\'</small></button>' +
            '<button class="quiz-btn fc-r2" data-fc-rate="2">✅ ידעתי בקלות<br><small>מרווח גדל</small></button>' +
            "</div>"
          : '<div class="fc-hint">לחץ על הכרטיסייה (או רווח) כדי לחשוף את התשובה</div>');
    }

    host.innerHTML =
      '<div class="lab-panel"><h3>🃏 כרטיסיות זיכרון — חזרה מרווחת</h3>' +
      '<p style="margin:0 0 10px;color:var(--fg2);font-size:14px">ענה בראש <b>לפני</b> שאתה הופך. ' +
      'הדירוג שלך קובע מתי הכרטיסייה תחזור: מה שקשה חוזר מהר, מה שקל מתרווח.</p>' +
      '<div class="quiz-pills">' + chips + "</div>" +
      '<div class="quiz-stats" style="grid-template-columns:repeat(auto-fit,minmax(100px,1fr));margin:10px 0">' +
        '<div class="quiz-stat"><b>' + pick.due + '</b><span>ממתינות עכשיו</span></div>' +
        '<div class="quiz-stat"><b>' + pick.fresh + '</b><span>חדשות</span></div>' +
        '<div class="quiz-stat"><b>' + st.known + "/" + st.total + '</b><span>בשליטה (קופסה 3+)</span></div>' +
        '<div class="quiz-stat"><b>' + sessionDone + '</b><span>נענו הפעם</span></div>' +
      "</div>" + body + "</div>";
  }

  host.addEventListener("click", function (e) {
    var c = e.target.closest("[data-fc-cat]");
    if (c) { filter = c.getAttribute("data-fc-cat"); flipped = false; paint(); return; }
    var r = e.target.closest("[data-fc-rate]");
    if (r) { rate(Number(r.getAttribute("data-fc-rate"))); return; }
    if (e.target.closest("[data-fc-flip]") && !flipped) { flipped = true; paint(); }
  });
  host.addEventListener("keydown", function (e) {
    if (e.key === " " && e.target.closest("[data-fc-flip]")) {
      e.preventDefault();
      if (!flipped) { flipped = true; paint(); }
    }
  });
  document.addEventListener("keydown", function (e) {
    if (host.style.display === "none" || !current) return;
    if (e.target.matches("input,textarea,select")) return;
    if (e.key === " " && !flipped) { e.preventDefault(); flipped = true; paint(); }
    else if (flipped && (e.key === "1" || e.key === "2" || e.key === "3")) {
      rate(Number(e.key) - 1);
    }
  });

  window.showFlashcards = function (on) {
    host.style.display = on ? "" : "none";
    if (on) paint();
  };
})();
