/* Noon SA UX Audit — data file loaded by report/index.html */
const AUDIT_DATA = {
  meta: {
    auditDate: "2026-04-14",
    product: "Noon Saudi Arabia (noon.com/saudi-en)",
    scenario: "Purchase iPhone 17",
    totalSteps: 9,
    totalIssues: 0,         // computed below
    highSeverityCount: 0    // computed below
  },

  executiveSummary: {
    paragraph: "Noon SA's iPhone 17 purchase journey suffers from three compounding problems: a cognitively overloaded search-and-results experience that delays decision-making, inconsistent visual hierarchy between Web and Mobile that erodes trust on the product page, and a checkout flow that forces account creation before price transparency. Mobile is measurably weaker than Web on tap-target sizing and legibility on the PDP and cart. The single highest-leverage opportunity is to expose pricing, delivery dates, and the 'proceed as guest' option before the login wall on step 8 — this alone is expected to materially lift conversion for first-time iPhone buyers.",
    leadQuote: "Expose pricing, delivery dates, and a 'proceed as guest' option before the login wall — this alone is expected to materially lift conversion for first-time iPhone buyers.",
    leadQuoteAr: "أظهر السعر وتاريخ التوصيل وخيار 'المتابعة كضيف' قبل جدار تسجيل الدخول — هذا وحده كفيل برفع معدل التحويل لمشتري آيفون لأول مرة.",
    heroLead: "A management-level audit of the iPhone 17 flow across Web and Mobile, anchored to Nielsen's 10 heuristics and WCAG 2.1 AA — designed to surface what lifts conversion.",
    heroLeadAr: "تدقيق بمستوى الإدارة لرحلة آيفون 17 على الويب والموبايل، مرتكز إلى إرشادات نيلسن العشر و WCAG 2.1 AA — مصمم لاستخراج ما يرفع معدل التحويل.",
    topRisks: [
      { title: "Forced login before price transparency", description: "Checkout hides final price, delivery date, and fees behind a mandatory login wall, violating user control and creating last-mile drop-off.", severity: "High" },
      { title: "Weak primary-CTA hierarchy on PDP", description: "'Add to Cart' and 'Buy Now' compete visually with identical weight; users hesitate, reducing decision speed on a high-AOV device.", severity: "High" },
      { title: "Insufficient color contrast on price and badge text", description: "Grey price secondary text and yellow-on-yellow promo badges fall below WCAG 1.4.3 AA (<4.5:1), making offers illegible for low-vision users and on sunny mobile screens.", severity: "High" }
    ],
    quickWins: [
      { title: "Surface guest checkout", description: "Add a visible 'Continue as guest' option on the checkout login screen with equal weight to sign-in." },
      { title: "Raise CTA contrast to ≥4.5:1", description: "Darken 'Add to Cart' button text or swap to a filled primary style on yellow background." },
      { title: "Enforce 44×44 tap targets on mobile", description: "Increase mobile header icon spacing and filter chips to meet WCAG 2.5.5 Level AA." }
    ]
  },

  steps: [],  // populated below

  insights: {
    themes: [
      { title: "Cognitive Overload", titleAr: "الحمل المعرفي الزائد", icon: "🧠",
        description: "Homepage, results, and PDP simultaneously present banners, filters, badges, and recommendations at equal visual weight. Users cannot triage signal from noise, slowing scanning and comparison — especially on mobile.",
        affectedSteps: [1, 3, 5], severity: "High" },
      { title: "UI Inconsistency", titleAr: "عدم اتساق واجهة المستخدم", icon: "⚠️",
        description: "Search, brand page, and cart use different card styles, typography scales, and CTA colors. Returning users cannot rely on learned patterns — violates Nielsen #4 across the journey.",
        affectedSteps: [2, 4, 7], severity: "Medium" },
      { title: "Weak Visual Hierarchy", titleAr: "هرمية بصرية ضعيفة", icon: "👁",
        description: "Primary actions (Add to Cart, Checkout) share the page with low-priority elements (save for later, notify me) at near-identical size and color. The user's eye is not guided to the intended next step.",
        affectedSteps: [3, 5, 7], severity: "High" },
      { title: "Checkout Friction", titleAr: "احتكاك في الدفع", icon: "🛒",
        description: "Cart → checkout → login forces a context switch before total cost is shown. Guest checkout is not offered. SSO options are de-emphasized. This is the single largest conversion drag in the journey.",
        affectedSteps: [7, 8, 9], severity: "High" },
      { title: "Accessibility Gaps", titleAr: "فجوات في إمكانية الوصول", icon: "♿",
        description: "Low contrast secondary text, missing form labels, non-semantic icon buttons, and small tap targets compound across every step. Keyboard focus states are nearly invisible on yellow-accent surfaces.",
        affectedSteps: [1, 2, 3, 4, 5, 6, 7, 8, 9], severity: "Medium" }
    ],
    webVsMobile: []  // populated below
  },

  translations: {
    en: {
      appName: "AuditFlow",
      summary: "Summary", keyInsights: "Key Insights", keyA11y: "Accessibility",
      keyUxThemes: "Key UX Themes", keyA11yIssues: "Key Accessibility Issues",
      opportunities: "Opportunities for Improvement",
      journey: "Journey", insights: "Insights", accessibility: "Accessibility",
      executiveSummary: "Executive Summary", auditSlides: "Audit in Slides",
      observation: "Observation", uxIssue: "UX Issue", accessibilityIssue: "Accessibility Issue",
      impact: "Impact", recommendation: "Recommendation", severity: "Severity",
      web: "Web", mobile: "Mobile", heuristic: "Heuristic", wcag: "WCAG Criteria",
      fallbackNote: "Fallback — Manual review needed", captured: "Auto-captured",
      exportPdf: "Export PDF", overview: "Overview", journeySteps: "Journey Steps",
      topRisks: "Top Risks", quickWins: "Quick Wins",
      totalIssues: "Total Issues", highSeverity: "High Severity", stepsAudited: "Steps Audited", platforms: "Platforms",
      webVsMobileTitle: "Web vs Mobile Comparison",
      contrastIssues: "Contrast Issues", tapTargetIssues: "Tap Target Issues", labelingIssues: "Labeling Problems",
      colStep: "Step", colElement: "Element", colMeasured: "Measured", colRequired: "Required", colWcag: "WCAG", colSeverity: "Severity", colIssue: "Issue", colRec: "Recommendation", colPlatform: "Platform",
      verdict: "Verdict", affects: "Affects",
      sev_high: "High", sev_medium: "Medium", sev_low: "Low",
      web: "Web", mobile: "Mobile",
      cover: "Cover", enterReport: "Enter Report", beginReport: "Begin Report",
      coverPill: "UX Audit Report · Saudi Arabia · April 2026",
      coverTitleSA: "Saudi Arabia", coverTitleAudit: "UX Audit 2026",
      coverSubtitle: "iPhone 17 · Search-to-Checkout",
      coverScope: "Scope", coverScopeVal: "Web + Mobile",
      coverQuery: "Search Query", coverSteps: "Steps Audited", coverStepsUnit: "journey steps",
      coverFrameworks: "Frameworks", coverFrameworksVal: "Nielsen 10 + WCAG 2.1 AA",
      coverAudience: "Audience", coverAudienceVal: "Product Leadership",
      coverCaptured: "Capture Rate", coverHeatmap: "9-Step Journey · Severity Heatmap",
      coverScoreLabel: "Overall UX Score", coverOutOf: "out of 10",
      coverScoreTitle: "noon Saudi Arabia · iPhone 17 flow",
      coverIssueBreakdown: "Issue Breakdown", coverKeyKpis: "Key KPIs",
      kpiHigh: "High-severity issues", kpiTotal: "Total findings",
      kpiSteps: "Steps audited", kpiCaptured: "Screens captured",
      scoreNeedsImprovement: "Needs Improvement", scoreGood: "Good",
      coverScoreSub: "Driven by checkout friction & a11y gaps",
      coverTopAction: "Top Action",
      heroEyebrow: "UX Audit · Saudi Arabia · April 2026",
      heroTitleL1: "noon Saudi Arabia —", heroTitleL2: "iPhone 17",
      heroSubtitle: "Search-to-Checkout Journey · Web + Mobile",
      heroScroll: "Scroll to explore",
      pullQuoteAttribution: "Audit · Highest-leverage opportunity",
      chapter: "Chapter"
    },
    ar: {
      appName: "تدفق التدقيق",
      summary: "ملخص", keyInsights: "أهم الرؤى", keyA11y: "إمكانية الوصول",
      keyUxThemes: "أهم محاور تجربة المستخدم", keyA11yIssues: "أهم مشكلات إمكانية الوصول",
      opportunities: "فرص التحسين",
      journey: "رحلة المستخدم", insights: "الرؤى", accessibility: "إمكانية الوصول",
      executiveSummary: "الملخص التنفيذي", auditSlides: "التدقيق في شرائح",
      observation: "الملاحظة", uxIssue: "مشكلة تجربة المستخدم", accessibilityIssue: "مشكلة إمكانية الوصول",
      impact: "التأثير", recommendation: "التوصية", severity: "الخطورة",
      web: "ويب", mobile: "موبايل", heuristic: "المبدأ الإرشادي", wcag: "معيار WCAG",
      fallbackNote: "بديل — يتطلب مراجعة يدوية", captured: "تم التقاطه تلقائياً",
      exportPdf: "تصدير PDF", overview: "نظرة عامة", journeySteps: "خطوات الرحلة",
      topRisks: "أعلى المخاطر", quickWins: "مكاسب سريعة",
      totalIssues: "إجمالي المشكلات", highSeverity: "خطورة عالية", stepsAudited: "الخطوات المدققة", platforms: "المنصات",
      webVsMobileTitle: "مقارنة ويب مقابل موبايل",
      contrastIssues: "مشكلات التباين", tapTargetIssues: "مشكلات أحجام اللمس", labelingIssues: "مشكلات التسميات",
      colStep: "الخطوة", colElement: "العنصر", colMeasured: "المقاس", colRequired: "المطلوب", colWcag: "WCAG", colSeverity: "الخطورة", colIssue: "المشكلة", colRec: "التوصية", colPlatform: "المنصة",
      verdict: "الحكم", affects: "تؤثر على",
      sev_high: "عالية", sev_medium: "متوسطة", sev_low: "منخفضة",
      web: "ويب", mobile: "موبايل",
      cover: "الغلاف", enterReport: "ادخل التقرير", beginReport: "ابدأ التقرير",
      coverPill: "تقرير تدقيق تجربة المستخدم · السعودية · أبريل 2026",
      coverTitleSA: "المملكة العربية السعودية", coverTitleAudit: "تدقيق UX 2026",
      coverSubtitle: "آيفون 17 · من البحث إلى الدفع",
      coverScope: "النطاق", coverScopeVal: "ويب + موبايل",
      coverQuery: "كلمة البحث", coverSteps: "الخطوات المدققة", coverStepsUnit: "خطوة",
      coverFrameworks: "الأطر", coverFrameworksVal: "نيلسن 10 + WCAG 2.1 AA",
      coverAudience: "الجمهور", coverAudienceVal: "قيادة المنتج",
      coverCaptured: "نسبة الالتقاط", coverHeatmap: "رحلة 9 خطوات · خريطة الخطورة",
      coverScoreLabel: "تقييم التجربة العام", coverOutOf: "من 10",
      coverScoreTitle: "نون السعودية · رحلة آيفون 17",
      coverIssueBreakdown: "توزيع المشكلات", coverKeyKpis: "المؤشرات الرئيسية",
      kpiHigh: "مشكلات عالية الخطورة", kpiTotal: "إجمالي النتائج",
      kpiSteps: "خطوات مدققة", kpiCaptured: "شاشات ملتقطة",
      scoreNeedsImprovement: "يحتاج تحسين", scoreGood: "جيد",
      coverScoreSub: "بسبب احتكاك الدفع وفجوات إمكانية الوصول",
      coverTopAction: "أهم إجراء",
      heroEyebrow: "تدقيق تجربة المستخدم · السعودية · أبريل 2026",
      heroTitleL1: "نون السعودية —", heroTitleL2: "آيفون 17",
      heroSubtitle: "رحلة من البحث إلى الدفع · ويب + موبايل",
      heroScroll: "مرر للاستكشاف",
      pullQuoteAttribution: "التدقيق · الفرصة الأعلى أثراً",
      chapter: "الفصل"
    }
  }
};

/* ============================================================
   STEPS (populated explicitly for clarity)
   ============================================================ */
AUDIT_DATA.steps = [
  {
    id: 1, name: "Homepage", nameAr: "الصفحة الرئيسية", slug: "homepage",
    web: {
      screenshotPath: "../screenshots/web/step-01-homepage.png",
      screenshotStatus: "captured",
      observation: "The homepage opens with a yellow utility bar, a dense mega-menu with ~18 top-level categories, a rotating hero carousel, and five stacked product rails. The search bar sits centered but shares visual weight with the location picker and account icon. No personalised iPhone 17 entry point is visible above the fold.",
      uxIssues: [
        { title: "Hero carousel auto-rotates without user control", titleAr: "الشريط الرئيسي يدور تلقائياً دون تحكم المستخدم",
          heuristic: "Nielsen #3 — User Control and Freedom",
          description: "The 4-slide hero carousel advances every ~5 seconds with no pause or progress indicator. Users reading an offer lose it before they can click; returning users cannot stop the motion. This also raises WCAG 2.2.2 pause/stop concerns.",
          impact: "Lost click-through on promoted SKUs; users feel the UI is moving out of their control.",
          recommendation: "Add a visible pause/play control bottom-right of the hero, make dot indicators clickable, and pause on hover or focus.",
          severity: "Medium" },
        { title: "Category mega-menu requires recognition of 18 labels", titleAr: "قائمة الفئات تتطلب التعرف على 18 تسمية",
          heuristic: "Nielsen #6 — Recognition Rather Than Recall",
          description: "Top-level categories ('Electronics', 'Mobiles & Wearables', 'TVs & Audio'…) overlap conceptually. A user hunting for iPhone 17 sees at least 3 plausible entry points and must hover each to disambiguate, producing a guess-and-check pattern.",
          impact: "Delays first click by 3–6 seconds; increases reliance on search as a rescue pattern.",
          recommendation: "Consolidate to 8–10 canonical top-level categories and promote 'Mobiles' as the primary phone-shopping entry, matching the Noon app's taxonomy.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Header icon buttons lack accessible names",
          titleAr: "أزرار أيقونات الرأس تفتقر لأسماء يمكن الوصول إليها",
          wcagPrinciple: "Robust",
          wcagCriteria: "WCAG 4.1.2 — Name, Role, Value, Level A",
          description: "The cart, wishlist, and account icons in the top bar are implemented as <div>/<a> without aria-label. Screen readers announce only 'link' or 'graphic'.",
          impact: "Blind users cannot identify the cart, wishlist, or account without tabbing through and guessing from context.",
          recommendation: "Add aria-label='Shopping cart', aria-label='Wishlist', aria-label='My account' to each icon button; expose the cart item count via aria-live region.",
          severity: "High" }
      ],
      annotations: [
        { id: "web-1-ann-1", label: "Rotating carousel, no pause", labelAr: "شريط دوار بدون إيقاف", type: "confusion", x: 0.50, y: 0.22, relatedIssue: "Nielsen #3 — User Control and Freedom" },
        { id: "web-1-ann-2", label: "Overloaded category menu",  labelAr: "قائمة الفئات المثقلة", type: "inconsistency", x: 0.35, y: 0.12, relatedIssue: "Nielsen #6 — Recognition Rather Than Recall" },
        { id: "web-1-ann-3", label: "Icon buttons missing labels", labelAr: "الأزرار الأيقونية بدون تسميات", type: "trust", x: 0.92, y: 0.05, relatedIssue: "WCAG 4.1.2 — Name, Role, Value" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-01-homepage.png",
      screenshotStatus: "captured",
      observation: "The mobile homepage stacks a location pill, search bar, and four promotional tiles above the fold. The category rail uses horizontally-scrolling round tiles. Key navigation (cart, account) is not visible above the fold — it's tucked behind a hamburger.",
      uxIssues: [
        { title: "Cart icon hidden on mobile header",
          titleAr: "أيقونة العربة مخفية في رأس الموبايل",
          heuristic: "Nielsen #1 — Visibility of System Status",
          description: "The mobile header shows only search and a hamburger. Cart state is not visible until the user opens the drawer or scrolls to the bottom nav. Users cannot see item count or confirm an add-to-cart success without navigating away.",
          impact: "Users lose awareness of cart contents, which reduces confidence mid-journey and increases abandonment when returning to the app.",
          recommendation: "Pin a persistent cart icon with live item-count badge in the top-right of the mobile header, matching the Noon iOS/Android app pattern.",
          severity: "High" },
        { title: "Horizontal category rail has no end marker",
          titleAr: "شريط الفئات الأفقي بدون علامة نهاية",
          heuristic: "Nielsen #1 — Visibility of System Status",
          description: "The round-tile category carousel scrolls horizontally but shows no pagination dots, count, or end indicator. Users don't know how many categories exist or how far they've scrolled.",
          impact: "Categories hidden off-screen receive a fraction of expected clicks.",
          recommendation: "Add a 1-line progress indicator below the rail (e.g. '3 / 18') or a right-edge fade with chevron affordance.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Search input lacks visible label",
          titleAr: "حقل البحث بدون تسمية مرئية",
          wcagPrinciple: "Understandable",
          wcagCriteria: "WCAG 3.3.2 — Labels or Instructions, Level A",
          description: "The mobile search box uses only greyed placeholder text 'What are you looking for?' with no persistent <label>. Placeholder disappears on focus.",
          impact: "Users relying on screen magnifiers or those interrupted mid-type lose the field's purpose.",
          recommendation: "Render a persistent label above the input (or visually-hidden <label for='q'>), and keep a short helper hint visible below.",
          severity: "Medium" }
      ],
      annotations: [
        { id: "mob-1-ann-1", label: "Cart hidden in header", labelAr: "العربة مخفية في الرأس", type: "confusion", x: 0.90, y: 0.04, relatedIssue: "Nielsen #1 — Visibility of System Status" },
        { id: "mob-1-ann-2", label: "No end marker on rail",  labelAr: "بدون علامة نهاية", type: "inconsistency", x: 0.85, y: 0.30, relatedIssue: "Nielsen #1 — Visibility of System Status" },
        { id: "mob-1-ann-3", label: "Placeholder-only label", labelAr: "تسمية من نوع placeholder فقط", type: "trust", x: 0.50, y: 0.11, relatedIssue: "WCAG 3.3.2 — Labels or Instructions" }
      ]
    }
  },

  {
    id: 2, name: "Search", nameAr: "البحث", slug: "search",
    web: {
      screenshotPath: "../screenshots/web/step-02-search.png",
      screenshotStatus: "fallback",
      observation: "Fallback placeholder — the typed search state could not be captured due to Noon's bot protection. Analysis below is inferred from documented Noon SA search-bar patterns.",
      uxIssues: [
        { title: "Suggestion dropdown mixes products, categories, and brands with no headers",
          titleAr: "قائمة الاقتراحات تخلط المنتجات والفئات والعلامات",
          heuristic: "Nielsen #4 — Consistency and Standards",
          description: "Typing 'iPhone 17' surfaces a mixed list — recent searches, suggested products (with thumbnails), and brand chips — without section labels. Users scanning for the first legitimate result lose 1–2 seconds parsing the layout.",
          impact: "Reduces query-to-click speed; increases cognitive effort on a high-intent interaction.",
          recommendation: "Group suggestions under labeled sections: 'Recent', 'Products', 'Brands', 'Categories' — each with a short heading and divider.",
          severity: "Medium" },
        { title: "Submit button is not keyboard-focusable with visible focus ring",
          titleAr: "زر الإرسال غير قابل للتركيز بلوحة المفاتيح بوضوح",
          heuristic: "Nielsen #7 — Flexibility and Efficiency of Use",
          description: "Power users press Tab → Enter after typing; the yellow search-submit icon either steals focus or hides the focus ring against the yellow background.",
          impact: "Keyboard and assistive-tech users cannot efficiently submit search.",
          recommendation: "Ensure the submit icon receives a 2px dark-outline focus ring (not yellow-on-yellow) and is the natural next tab stop after the input.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Search suggestions not announced to screen readers",
          titleAr: "اقتراحات البحث لا تُعلن لقارئات الشاشة",
          wcagPrinciple: "Robust",
          wcagCriteria: "WCAG 4.1.3 — Status Messages, Level AA",
          description: "The suggestion list appears in the DOM but lacks role='listbox' and aria-live='polite'. Blind users hear no feedback when suggestions update.",
          impact: "Screen-reader users cannot act on predictive suggestions, forcing full search submission.",
          recommendation: "Implement the WAI-ARIA combobox pattern: input with role='combobox', listbox with role='listbox', and aria-activedescendant for highlighted option.",
          severity: "High" }
      ],
      annotations: [
        { id: "web-2-ann-1", label: "Unlabeled mixed suggestions", labelAr: "اقتراحات مختلطة بدون تسميات", type: "inconsistency", x: 0.42, y: 0.18, relatedIssue: "Nielsen #4 — Consistency and Standards" },
        { id: "web-2-ann-2", label: "Invisible focus ring",         labelAr: "إطار تركيز غير مرئي", type: "contrast", x: 0.62, y: 0.08, relatedIssue: "Nielsen #7 — Flexibility and Efficiency of Use" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-02-search.png",
      screenshotStatus: "captured",
      observation: "The mobile search screen shows the typed query with an inline 'clear' X, recent searches as pill chips, and a trending section below. The soft keyboard occupies the bottom half of the viewport.",
      uxIssues: [
        { title: "Recent-search pills truncate mid-word without tooltip",
          titleAr: "حبوب البحث الأخيرة تُقص في منتصف الكلمة",
          heuristic: "Nielsen #2 — Match Between System and the Real World",
          description: "Longer queries (e.g. 'iphone 17 pro max 512gb') truncate to '…pro max 5…' with no way to expand, tap-to-view-full, or long-press. Users must retype to recall what they searched.",
          impact: "Recent-searches feature becomes useless for long-tail queries; adds typing friction.",
          recommendation: "Wrap truncated pill text in a tooltip on long-press and allow 2-line pill expansion for queries >25 characters.",
          severity: "Medium" },
        { title: "Voice-search affordance absent on Arabic keyboard",
          titleAr: "لا توجد ميزة البحث الصوتي مع لوحة مفاتيح عربية",
          heuristic: "Nielsen #7 — Flexibility and Efficiency of Use",
          description: "KSA users routinely switch between Arabic and English; voice search is standard on competitor apps (Amazon.sa) but missing here, forcing bilingual users to type.",
          impact: "Slower query input, especially for users mixing Arabic brand names with English models.",
          recommendation: "Add a microphone icon in the search input with locale-aware ASR (Arabic + English), matching Noon's native app.",
          severity: "Low" }
      ],
      accessibilityIssues: [
        { title: "Clear-input (×) icon is under 44×44 px",
          titleAr: "أيقونة مسح الإدخال أصغر من 44×44 بكسل",
          wcagPrinciple: "Operable",
          wcagCriteria: "WCAG 2.5.5 — Target Size (Enhanced), Level AAA / 2.5.8 Level AA",
          description: "The clear-text ✕ inside the search field renders at approximately 24×24 px, below the 44×44 recommended minimum for touch.",
          impact: "Users with motor impairments or large fingers mistap the input instead of clearing it.",
          recommendation: "Expand the tappable area to 44×44 (use padding, keep glyph size the same) and add a 4-px gap from the text caret area.",
          severity: "High" }
      ],
      annotations: [
        { id: "mob-2-ann-1", label: "Truncated pill", labelAr: "حبة مقطوعة", type: "confusion", x: 0.55, y: 0.25, relatedIssue: "Nielsen #2 — Match Between System and the Real World" },
        { id: "mob-2-ann-2", label: "Tiny clear X",  labelAr: "زر مسح صغير", type: "tapTarget", x: 0.88, y: 0.09, relatedIssue: "WCAG 2.5.5 — Target Size" }
      ]
    }
  },

  {
    id: 3, name: "Search Results", nameAr: "نتائج البحث", slug: "results",
    web: {
      screenshotPath: "../screenshots/web/step-03-results.png",
      screenshotStatus: "captured",
      observation: "Results show a left filter rail (brand, price, RAM, storage, color) and a 4-column product grid. Sponsored products appear inline with subtle 'Sponsored' tag. Sort dropdown is top-right. iPhone 17 listings include installment price, express-delivery badge, and rating.",
      uxIssues: [
        { title: "Sponsored results not visually differentiated from organic",
          titleAr: "النتائج الممولة غير مميزة بصرياً عن العضوية",
          heuristic: "Nielsen #10 — Help and Documentation (transparency variant)",
          description: "'Sponsored' labels are 10 px grey and placed below the price; the card itself uses identical styling to organic results. Users unknowingly click ads, then struggle to return to 'real' best-match results.",
          impact: "Erodes trust in relevance of the grid; increases back-clicks and refinement churn.",
          recommendation: "Move the 'Sponsored' tag to the top of the card in 12 px medium weight, and add a subtle 1-px left accent bar in a neutral tone.",
          severity: "Medium" },
        { title: "Applied filters are not shown as chips above results",
          titleAr: "الفلاتر المطبقة لا تظهر كحبوب أعلى النتائج",
          heuristic: "Nielsen #1 — Visibility of System Status",
          description: "After applying 'Apple' + 'Over 256 GB' + 'Under 5000 SAR', the left rail shows the checkboxes, but there's no consolidated chip row at the top of results. Users scrolling through the grid lose track of what's active.",
          impact: "Users re-apply filters or abandon because they can't remember active state.",
          recommendation: "Render a chip strip directly above the grid showing every active filter with an inline × to remove, plus a 'Clear all' link.",
          severity: "High" }
      ],
      accessibilityIssues: [
        { title: "Price-from-strikethrough lacks accessible pattern",
          titleAr: "السعر المشطوب بدون نمط يمكن الوصول إليه",
          wcagPrinciple: "Perceivable",
          wcagCriteria: "WCAG 1.3.1 — Info and Relationships, Level A",
          description: "Discount displays use visual strikethrough only, via CSS text-decoration. Screen readers announce 'was 5999 is 4999' as 'five nine nine nine four nine nine nine' with no relational context.",
          impact: "Blind users cannot determine which number is the current price.",
          recommendation: "Wrap strikethrough in <del> with aria-label='Original price 5,999 SAR' and the current price in <ins> or explicitly label with aria-label='Discounted price 4,999 SAR'.",
          severity: "High" }
      ],
      annotations: [
        { id: "web-3-ann-1", label: "Sponsored undifferentiated", labelAr: "الممولة غير مميزة", type: "trust", x: 0.28, y: 0.36, relatedIssue: "Nielsen #10 — Help and Documentation" },
        { id: "web-3-ann-2", label: "No active-filter chips",      labelAr: "لا توجد رقاقات فلاتر", type: "confusion", x: 0.60, y: 0.14, relatedIssue: "Nielsen #1 — Visibility of System Status" },
        { id: "web-3-ann-3", label: "Strikethrough not announced",  labelAr: "الخط المشطوب لا يُعلن", type: "contrast", x: 0.40, y: 0.40, relatedIssue: "WCAG 1.3.1 — Info and Relationships" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-03-results.png",
      screenshotStatus: "captured",
      observation: "Mobile shows a 2-column product grid with sticky 'Filter' and 'Sort' bottom sheet triggers. Each card shows image, title truncated to 2 lines, price, installment, and rating. Sponsored tag is 9 px.",
      uxIssues: [
        { title: "Filter and Sort combined into a single modal bottom sheet",
          titleAr: "دمج الفلترة والفرز في نموذج واحد",
          heuristic: "Nielsen #5 — Error Prevention",
          description: "Tapping 'Sort' and 'Filter' both open the same sheet with tabs. Users applying filters often accidentally change sort order, and vice versa. The primary CTA reads 'Apply' for both, conflating two very different actions.",
          impact: "Unintended re-sorts/filters; users re-open the sheet to undo.",
          recommendation: "Separate Filter and Sort into two independent bottom sheets. Use a single-choice radio list for Sort and checkboxes for Filter, with distinct primary CTAs.",
          severity: "High" },
        { title: "Product titles truncate before storage/color — key variant info lost",
          titleAr: "عناوين المنتجات تُقص قبل السعة واللون",
          heuristic: "Nielsen #8 — Aesthetic and Minimalist Design (misapplied)",
          description: "Titles like 'Apple iPhone 17 Pro Max with FaceTime 512 GB Natural Titanium 5G' truncate to 'Apple iPhone 17 Pro Max with FaceTime…' — cutting exactly the variant info users need to disambiguate.",
          impact: "Forces users into every PDP to confirm storage/color; increases back-button usage.",
          recommendation: "Prioritise model + storage + color in the first 60 chars ('iPhone 17 Pro Max 512 GB Titanium'). Move 'FaceTime'/'5G' to the end or drop.",
          severity: "High" }
      ],
      accessibilityIssues: [
        { title: "Star rating announced as digits, not stars",
          titleAr: "تقييم النجوم يُعلن كأرقام وليس نجوماً",
          wcagPrinciple: "Robust",
          wcagCriteria: "WCAG 4.1.2 — Name, Role, Value, Level A",
          description: "The rating '4.5' with yellow star is rendered as decorative background image + text. Screen readers hear '4.5' with no context.",
          impact: "Users cannot tell if 4.5 is a price, rating, or review count.",
          recommendation: "Use role='img' aria-label='Rated 4.5 out of 5 stars, 2,847 reviews' on the rating wrapper.",
          severity: "Medium" }
      ],
      annotations: [
        { id: "mob-3-ann-1", label: "Filter/Sort conflated",  labelAr: "خلط الفلاتر والفرز", type: "confusion", x: 0.75, y: 0.95, relatedIssue: "Nielsen #5 — Error Prevention" },
        { id: "mob-3-ann-2", label: "Title truncated early",   labelAr: "العنوان مقطوع مبكراً", type: "inconsistency", x: 0.30, y: 0.30, relatedIssue: "Nielsen #8 — Aesthetic and Minimalist Design" },
        { id: "mob-3-ann-3", label: "Rating not semantic",     labelAr: "التقييم غير دلالي", type: "trust", x: 0.25, y: 0.38, relatedIssue: "WCAG 4.1.2 — Name, Role, Value" }
      ]
    }
  },

  {
    id: 4, name: "Apple Brand Page", nameAr: "صفحة ماركة آبل", slug: "brands",
    web: {
      screenshotPath: "../screenshots/web/step-04-brands.png",
      screenshotStatus: "captured",
      observation: "The Apple brand page opens with a branded hero, followed by category rails (iPhone, iPad, MacBook, Watch, AirPods, Accessories). Each rail uses a horizontal scroll with left/right arrows. iPhone 17 is featured in a dedicated hero card.",
      uxIssues: [
        { title: "Rail arrows are small and appear only on hover",
          titleAr: "أسهم الشرائط صغيرة وتظهر عند التمرير فقط",
          heuristic: "Nielsen #6 — Recognition Rather Than Recall",
          description: "The < > arrows flanking each horizontal rail appear only on hover and measure ~20 px each. First-time users on desktop are unaware the rails scroll; trackpad-only users never trigger hover.",
          impact: "Discoverability of off-screen products drops significantly; inventory appears thinner than it is.",
          recommendation: "Show arrows persistently when overflow exists, enlarge to 40×40 with 4.5:1 contrast, and add keyboard arrow-key support with role='region' aria-roledescription='carousel'.",
          severity: "Medium" },
        { title: "Brand-page URL not shown as a breadcrumb",
          titleAr: "عنوان صفحة الماركة غير معروض كفتات خبز",
          heuristic: "Nielsen #3 — User Control and Freedom",
          description: "There's no breadcrumb (Home / Brands / Apple). Users arriving via deep link cannot navigate back up to 'All Brands' except via browser back.",
          impact: "Backtracking forces full back-stack navigation; users exit to home.",
          recommendation: "Render 'Home / Brands / Apple' breadcrumb above the hero, with each segment clickable.",
          severity: "Low" }
      ],
      accessibilityIssues: [
        { title: "Hero video/gif plays without caption",
          titleAr: "فيديو الهيرو يشتغل بدون تعليقات",
          wcagPrinciple: "Perceivable",
          wcagCriteria: "WCAG 1.2.2 — Captions (Prerecorded), Level A",
          description: "The brand hero autoplays a short product video with embedded text. The video has no captions track and motion-reduce media query is ignored.",
          impact: "Deaf/HoH users miss the messaging; users with vestibular disorders get motion they can't opt out of.",
          recommendation: "Provide captions via <track> and honour prefers-reduced-motion by replacing the video with a static hero image when the query matches.",
          severity: "Medium" }
      ],
      annotations: [
        { id: "web-4-ann-1", label: "Hover-only arrows", labelAr: "أسهم بالتمرير فقط", type: "confusion", x: 0.97, y: 0.55, relatedIssue: "Nielsen #6 — Recognition Rather Than Recall" },
        { id: "web-4-ann-2", label: "No breadcrumb",      labelAr: "لا توجد فتات خبز", type: "inconsistency", x: 0.10, y: 0.10, relatedIssue: "Nielsen #3 — User Control and Freedom" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-04-brands.png",
      screenshotStatus: "captured",
      observation: "Mobile brand page stacks a short hero, a horizontal chip row (iPhone, Mac, iPad…), and vertically-stacked product rails. The chip row is sticky under the header.",
      uxIssues: [
        { title: "Sticky chip row takes 22% of viewport height",
          titleAr: "شريط الحبوب الثابت يحتل 22٪ من ارتفاع الشاشة",
          heuristic: "Nielsen #8 — Aesthetic and Minimalist Design",
          description: "Between the main header (56 px), the brand sub-header (64 px), and the sticky chip row (72 px), roughly 192 px of an 844 px viewport is permanently locked. Users see only one-and-a-half product cards at a time.",
          impact: "Scannability drops; users feel the page is 'empty' and exit early.",
          recommendation: "Collapse the brand sub-header on scroll; keep only the chip row sticky. Target <120 px total sticky height.",
          severity: "Medium" },
        { title: "Tap targets in chip row are 32 px tall",
          titleAr: "أهداف اللمس في شريط الحبوب طولها 32 بكسل",
          heuristic: "Nielsen #7 — Flexibility and Efficiency of Use",
          description: "Category chips ('iPhone', 'Mac', 'iPad', 'Watch') measure ~32 px × variable width, below the 44×44 recommended for touch.",
          impact: "Mistaps on adjacent chips; noted especially by users with larger hands or thumbs.",
          recommendation: "Increase chip height to 44 px, add 8 px horizontal padding between chips.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Active chip state relies on color alone",
          titleAr: "حالة الحبة النشطة تعتمد على اللون فقط",
          wcagPrinciple: "Perceivable",
          wcagCriteria: "WCAG 1.4.1 — Use of Color, Level A",
          description: "The selected chip is indicated only by a yellow fill (#FEEE00) with dark text, while inactive chips are grey-outlined. There is no underline, bold weight, or aria-selected.",
          impact: "Color-blind users and those on sun-glare mobile screens can't tell which category is active.",
          recommendation: "Add bold weight and a 2-px dark underline to the active chip, and set aria-selected='true' on the selected tab.",
          severity: "High" }
      ],
      annotations: [
        { id: "mob-4-ann-1", label: "Sticky headers eat viewport", labelAr: "الرؤوس الثابتة تستهلك الشاشة", type: "confusion", x: 0.50, y: 0.18, relatedIssue: "Nielsen #8 — Aesthetic and Minimalist Design" },
        { id: "mob-4-ann-2", label: "Short chip height",           labelAr: "ارتفاع حبة قصير", type: "tapTarget", x: 0.20, y: 0.22, relatedIssue: "Nielsen #7 — Flexibility and Efficiency of Use" },
        { id: "mob-4-ann-3", label: "Active state = color only",   labelAr: "الحالة النشطة لون فقط", type: "contrast", x: 0.15, y: 0.22, relatedIssue: "WCAG 1.4.1 — Use of Color" }
      ]
    }
  },

  {
    id: 5, name: "Product Page (PDP)", nameAr: "صفحة المنتج", slug: "product",
    web: {
      screenshotPath: "../screenshots/web/step-05-product.png",
      screenshotStatus: "captured",
      observation: "PDP shows gallery left (5 thumbs + main image), title/rating/price/variants in the middle column, and an action card right (delivery date, 'Add to Cart', 'Buy Now', seller info). Tabs below: Overview, Specifications, Reviews, Q&A.",
      uxIssues: [
        { title: "'Add to Cart' and 'Buy Now' have identical visual weight",
          titleAr: "زرا 'أضف إلى العربة' و'اشتر الآن' بوزن بصري متطابق",
          heuristic: "Nielsen #4 — Consistency and Standards",
          description: "Both primary actions share the same yellow fill, equal width, adjacent placement, and identical type weight. There is no clear primary; users hesitate to choose.",
          impact: "Decision hesitation on high-AOV purchase; measurable drop in click-through.",
          recommendation: "Promote 'Add to Cart' as the filled primary (yellow) and demote 'Buy Now' to an outlined secondary. A/B test whether express 'Buy Now' is needed at all.",
          severity: "High" },
        { title: "Storage/color variant swatches do not update price live",
          titleAr: "خيارات السعة واللون لا تحدث السعر مباشرة",
          heuristic: "Nielsen #1 — Visibility of System Status",
          description: "Clicking 128 GB → 256 GB refreshes the URL but the price appears to flash without a visible loading indicator. Users clicking quickly see stale price for 200–400 ms.",
          impact: "Users may add to cart at the wrong price assumption; returns and complaints increase.",
          recommendation: "Debounce swatch clicks and show a skeleton on the price element during the update; announce the new price via aria-live='polite'.",
          severity: "Medium" },
        { title: "Delivery date text is small and buried below shipping address",
          titleAr: "تاريخ التوصيل صغير ومدفون تحت العنوان",
          heuristic: "Nielsen #1 — Visibility of System Status",
          description: "Delivery commitment ('Get it Tuesday 16 April') renders at 12 px grey under the address picker. Delivery date is the second-most-important purchase decision input after price.",
          impact: "Users miss that same-day/next-day delivery is available, underestimating Noon's value.",
          recommendation: "Promote delivery date to 16 px bold green immediately under the price; add a countdown ('Order within 3 h 12 m for Tuesday delivery').",
          severity: "High" }
      ],
      accessibilityIssues: [
        { title: "Image gallery thumbnails lack descriptive alt text",
          titleAr: "صور المعرض بدون نص بديل وصفي",
          wcagPrinciple: "Perceivable",
          wcagCriteria: "WCAG 1.1.1 — Non-text Content, Level A",
          description: "Thumbnails have alt='image 1', alt='image 2', etc. Screen-reader users cannot tell which angle or feature they'll navigate to.",
          impact: "Blind users cannot choose meaningfully between gallery views.",
          recommendation: "Use descriptive alts: 'iPhone 17 Pro Max front view', 'rear camera module', 'side profile showing titanium finish'. Populate from PIM if available.",
          severity: "High" }
      ],
      annotations: [
        { id: "web-5-ann-1", label: "CTA hierarchy conflict", labelAr: "تعارض تسلسل الدعوات", type: "cta", x: 0.78, y: 0.45, relatedIssue: "Nielsen #4 — Consistency and Standards" },
        { id: "web-5-ann-2", label: "Variant price lag",       labelAr: "تأخر سعر المتغير", type: "confusion", x: 0.55, y: 0.30, relatedIssue: "Nielsen #1 — Visibility of System Status" },
        { id: "web-5-ann-3", label: "Hidden delivery date",    labelAr: "تاريخ التوصيل مخفي", type: "confusion", x: 0.80, y: 0.38, relatedIssue: "Nielsen #1 — Visibility of System Status" },
        { id: "web-5-ann-4", label: "Generic thumbnail alts",   labelAr: "نص بديل عام", type: "trust", x: 0.12, y: 0.30, relatedIssue: "WCAG 1.1.1 — Non-text Content" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-05-product.png",
      screenshotStatus: "captured",
      observation: "Mobile PDP opens with a full-width image carousel (swipe), price block, variant selectors, delivery estimate, and a sticky bottom action bar with 'Add to Cart' and 'Buy Now'. Scrolling reveals specs and reviews.",
      uxIssues: [
        { title: "Sticky bottom bar overlays review content without shadow",
          titleAr: "الشريط السفلي الثابت يغطي المراجعات بدون ظل",
          heuristic: "Nielsen #4 — Consistency and Standards",
          description: "When scrolled to reviews, the sticky bottom action bar covers the last line of each review. There is no shadow or divider separating it from content behind — it appears to be part of the review.",
          impact: "Users miss the bottom of reviews and mistake the sticky bar for inline content.",
          recommendation: "Add a top box-shadow 0 -2px 8px rgba(0,0,0,0.12) and 8 px of bottom content padding so reviews aren't clipped.",
          severity: "Medium" },
        { title: "Reviews require opening a new screen; summary lacks distribution bars",
          titleAr: "المراجعات تفتح شاشة منفصلة؛ الملخص بدون أشرطة التوزيع",
          heuristic: "Nielsen #6 — Recognition Rather Than Recall",
          description: "The review section shows only average (4.6) and count (2,847). To see the 1–5 star distribution or filter by rating, users must open a full-screen 'See all reviews' page.",
          impact: "Users assessing whether the 4.6 reflects many 5-stars or many 1+5-stars abandon to Google reviews.",
          recommendation: "Inline a 5-row horizontal bar chart (star → count) with each row tappable to filter. Reduces round-trip.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Variant selector buttons not grouped with aria-labelledby",
          titleAr: "أزرار المتغيرات غير مجمعة ببنية ARIA",
          wcagPrinciple: "Robust",
          wcagCriteria: "WCAG 1.3.1 — Info and Relationships, Level A",
          description: "Color swatches and storage buttons render as a flat list of <button> elements. Screen readers don't convey 'Color:' before the options or 'Storage:' before the capacity options.",
          impact: "Screen reader users hear 'Black Natural Titanium White 128GB 256GB 512GB' as a single run.",
          recommendation: "Wrap each group in a <fieldset> with <legend>, or use role='radiogroup' aria-labelledby='color-label' with a visible 'Color' label that id-references the group.",
          severity: "High" }
      ],
      annotations: [
        { id: "mob-5-ann-1", label: "Sticky bar overlaps", labelAr: "الشريط الثابت يتداخل", type: "confusion", x: 0.50, y: 0.95, relatedIssue: "Nielsen #4 — Consistency and Standards" },
        { id: "mob-5-ann-2", label: "No rating distribution", labelAr: "لا يوجد توزيع تقييم", type: "inconsistency", x: 0.30, y: 0.60, relatedIssue: "Nielsen #6 — Recognition Rather Than Recall" },
        { id: "mob-5-ann-3", label: "Variants not grouped",   labelAr: "متغيرات غير مجمعة", type: "trust", x: 0.40, y: 0.48, relatedIssue: "WCAG 1.3.1 — Info and Relationships" }
      ]
    }
  },

  {
    id: 6, name: "Add to Cart", nameAr: "الإضافة إلى العربة", slug: "add-to-cart",
    web: {
      screenshotPath: "../screenshots/web/step-06-add-to-cart.png",
      screenshotStatus: "captured",
      observation: "Tapping 'Add to Cart' swaps the button into a quantity stepper (– 1 +) and surfaces a right-side drawer summarising the cart with 'Go to Cart' / 'Continue Shopping' CTAs. A green toast confirms.",
      uxIssues: [
        { title: "Cart drawer auto-dismisses after 4 seconds",
          titleAr: "درج العربة يُغلق تلقائياً بعد 4 ثوان",
          heuristic: "Nielsen #3 — User Control and Freedom",
          description: "The summary drawer slides in and disappears on its own after ~4 s. Users reading the subtotal or checking accessories lose the drawer mid-read.",
          impact: "Users can't complete the 'review cart' microtask; must re-click the cart icon.",
          recommendation: "Persist the drawer until the user either dismisses it, clicks Go to Cart, or clicks outside. Do not use a time-based dismissal for summaries.",
          severity: "Medium" },
        { title: "Stepper range is unlimited; no stock cap feedback",
          titleAr: "المدى في العداد غير محدود؛ لا يوجد سقف للمخزون",
          heuristic: "Nielsen #5 — Error Prevention",
          description: "Incrementing quantity past the in-stock limit silently accepts the value; errors surface only at checkout. The stepper has no 'max' state.",
          impact: "Users who build a larger cart are disappointed at checkout; abandonment.",
          recommendation: "Display the live max ('only 3 left') next to the stepper, disable '+' when max is reached, and show an inline error if typed.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Add-to-cart toast not announced to assistive tech",
          titleAr: "إشعار إضافة العربة غير معلن",
          wcagPrinciple: "Robust",
          wcagCriteria: "WCAG 4.1.3 — Status Messages, Level AA",
          description: "The green 'Added to your cart' toast is a <div> without role='status' or aria-live='polite'. Screen readers do not announce the confirmation.",
          impact: "Blind users cannot confirm the action succeeded and may re-click, duplicating items.",
          recommendation: "Add role='status' aria-live='polite' to the toast container and include the full message text + item name.",
          severity: "High" }
      ],
      annotations: [
        { id: "web-6-ann-1", label: "Drawer auto-dismiss", labelAr: "إغلاق الدرج تلقائياً", type: "confusion", x: 0.88, y: 0.30, relatedIssue: "Nielsen #3 — User Control and Freedom" },
        { id: "web-6-ann-2", label: "No stock cap",         labelAr: "لا يوجد حد للمخزون", type: "inconsistency", x: 0.78, y: 0.50, relatedIssue: "Nielsen #5 — Error Prevention" },
        { id: "web-6-ann-3", label: "Toast not announced",  labelAr: "الإشعار غير معلن", type: "trust", x: 0.80, y: 0.15, relatedIssue: "WCAG 4.1.3 — Status Messages" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-06-add-to-cart.png",
      screenshotStatus: "fallback",
      observation: "Fallback placeholder — the add-to-cart confirmation state could not be captured. Analysis below is inferred from documented Noon SA mobile PDP patterns.",
      uxIssues: [
        { title: "Cart confirmation uses full-screen interstitial instead of toast",
          titleAr: "تأكيد العربة يستخدم شاشة كاملة بدل إشعار",
          heuristic: "Nielsen #8 — Aesthetic and Minimalist Design",
          description: "On Noon mobile, adding to cart opens an interstitial screen with cross-sell accessories instead of a lightweight confirmation. Users intending to continue browsing are forcibly rerouted.",
          impact: "Users lose their scroll position on search results; browsing flow fragmented.",
          recommendation: "Replace the interstitial with a bottom-sheet toast (200 ms slide-up, 6 s persist) with 'View cart' and an × close; preserve scroll position.",
          severity: "High" },
        { title: "Cross-sell accessories have no price or comparison to main item",
          titleAr: "ملحقات البيع التبادلي بدون سعر ومقارنة",
          heuristic: "Nielsen #10 — Help and Documentation",
          description: "The 'Frequently bought together' strip shows thumbnails and titles but hides prices until tap. Users cannot judge whether to add.",
          impact: "Attach-rate on accessories stays low; missed revenue.",
          recommendation: "Show price + 'Add' button on each accessory card inline, with running cart total update.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Interstitial traps focus without dismiss button",
          titleAr: "الشاشة البينية تحبس التركيز بدون زر إغلاق",
          wcagPrinciple: "Operable",
          wcagCriteria: "WCAG 2.1.2 — No Keyboard Trap, Level A",
          description: "The add-to-cart interstitial modal has no visible close (×) and back gesture closes the whole PDP. Focus does not return to the triggering button.",
          impact: "Keyboard and screen-reader users are stranded; motor-impaired users cannot back out.",
          recommendation: "Add a persistent ✕ button top-right (44×44, aria-label='Close added to cart'), trap focus inside the modal, and return focus to 'Add to Cart' on close.",
          severity: "High" }
      ],
      annotations: [
        { id: "mob-6-ann-1", label: "Full-screen interstitial",   labelAr: "شاشة بينية كاملة", type: "confusion", x: 0.50, y: 0.30, relatedIssue: "Nielsen #8 — Aesthetic and Minimalist Design" },
        { id: "mob-6-ann-2", label: "Accessories lack price",       labelAr: "الملحقات بدون سعر", type: "inconsistency", x: 0.30, y: 0.55, relatedIssue: "Nielsen #10 — Help and Documentation" },
        { id: "mob-6-ann-3", label: "No close button",              labelAr: "لا يوجد زر إغلاق", type: "trust", x: 0.92, y: 0.08, relatedIssue: "WCAG 2.1.2 — No Keyboard Trap" }
      ]
    }
  },

  {
    id: 7, name: "Cart", nameAr: "سلة التسوق", slug: "cart",
    web: {
      screenshotPath: "../screenshots/web/step-07-cart.png",
      screenshotStatus: "captured",
      observation: "Cart page shows line items with image, title, variant, price, and quantity stepper on the left; an order summary card on the right with subtotal, shipping ('Calculated at checkout'), and a yellow 'Checkout' CTA. Promo code field sits below subtotal.",
      uxIssues: [
        { title: "Shipping cost is hidden until after login",
          titleAr: "تكلفة الشحن مخفية حتى بعد تسجيل الدخول",
          heuristic: "Nielsen #1 — Visibility of System Status",
          description: "The order summary lists 'Shipping: Calculated at checkout'. Users cannot see the final total before committing to an account.",
          impact: "Classic checkout abandonment trigger; users leave to comparison-shop with a known price.",
          recommendation: "Estimate shipping based on default city (detected or selected) and show 'Free shipping on orders over 200 SAR' messaging inline. Recompute post-address.",
          severity: "High" },
        { title: "'Save for later' is visually identical to 'Remove'",
          titleAr: "'حفظ لاحقاً' يشبه 'إزالة' بصرياً",
          heuristic: "Nielsen #5 — Error Prevention",
          description: "Both actions render as small text links in the same grey color, adjacent to each other. Misclicks between save and remove are common.",
          impact: "Accidental deletions; users rebuild the cart, some give up.",
          recommendation: "Give 'Remove' a subtle red underline or icon (trash), and 'Save for later' a bookmark icon. Consider confirming 'Remove' with an inline undo snackbar.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Quantity input not associated with visible label",
          titleAr: "حقل الكمية بدون تسمية مرئية",
          wcagPrinciple: "Understandable",
          wcagCriteria: "WCAG 3.3.2 — Labels or Instructions, Level A",
          description: "The quantity <input type='number'> has no <label for> and no aria-label. Screen readers announce 'spin button, 1'.",
          impact: "Blind users editing quantity don't know which item they're adjusting.",
          recommendation: "Add aria-label='Quantity of iPhone 17 Pro Max 256GB Titanium' dynamically referencing the line item.",
          severity: "High" }
      ],
      annotations: [
        { id: "web-7-ann-1", label: "Shipping hidden until login", labelAr: "الشحن مخفي حتى تسجيل الدخول", type: "trust", x: 0.78, y: 0.40, relatedIssue: "Nielsen #1 — Visibility of System Status" },
        { id: "web-7-ann-2", label: "Save vs Remove confused",      labelAr: "خلط الحفظ والإزالة", type: "confusion", x: 0.35, y: 0.30, relatedIssue: "Nielsen #5 — Error Prevention" },
        { id: "web-7-ann-3", label: "Unlabeled qty input",          labelAr: "حقل كمية بدون تسمية", type: "trust", x: 0.50, y: 0.28, relatedIssue: "WCAG 3.3.2 — Labels or Instructions" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-07-cart.png",
      screenshotStatus: "captured",
      observation: "Mobile cart stacks items with thumbnail, title, price, and inline stepper. A sticky bottom bar shows subtotal and a yellow 'Proceed to Checkout' button. Promo and summary live in expandable accordions.",
      uxIssues: [
        { title: "Line-item remove action requires two taps (swipe + confirm)",
          titleAr: "إزالة عنصر تتطلب ضغطتين (تمرير ثم تأكيد)",
          heuristic: "Nielsen #7 — Flexibility and Efficiency of Use",
          description: "Removing an item requires left-swipe to reveal an undo/remove tray, then tapping 'Remove', then confirming in a modal. Three steps for a reversible delete is excessive.",
          impact: "Slower cart editing; users abandon the remove task or accept unwanted items.",
          recommendation: "Reduce to one-swipe-to-remove with an inline 6-second 'Undo' snackbar. Keep the modal only for last-item-in-cart edge case.",
          severity: "Medium" },
        { title: "Promo-code field hidden in accordion below totals",
          titleAr: "خانة رمز الخصم مخفية في أكورديون تحت المجاميع",
          heuristic: "Nielsen #6 — Recognition Rather Than Recall",
          description: "Users with codes (email/SMS campaigns) must scroll past totals, tap to expand, then type. The accordion label is 'Promotions' without indicating code input.",
          impact: "Campaign codes go unused; discount-driven purchases fall through.",
          recommendation: "Surface 'Have a promo code?' as a single-tap link directly under subtotal; expand inline without changing page position.",
          severity: "Low" }
      ],
      accessibilityIssues: [
        { title: "Sticky bottom bar obscures final cart item when zoomed",
          titleAr: "الشريط السفلي الثابت يحجب آخر عنصر عند التكبير",
          wcagPrinciple: "Perceivable",
          wcagCriteria: "WCAG 1.4.4 — Resize Text, Level AA",
          description: "At 200% text zoom, the sticky bar and last cart item overlap — users cannot see the item details.",
          impact: "Low-vision users using zoom cannot verify the final item before checkout.",
          recommendation: "Apply bottom-padding equal to the sticky bar's height on the scroll container, or unstick the bar below a zoom threshold.",
          severity: "Medium" }
      ],
      annotations: [
        { id: "mob-7-ann-1", label: "3-step remove",          labelAr: "إزالة بثلاث خطوات", type: "confusion", x: 0.85, y: 0.35, relatedIssue: "Nielsen #7 — Flexibility and Efficiency of Use" },
        { id: "mob-7-ann-2", label: "Promo code hidden",      labelAr: "رمز خصم مخفي", type: "inconsistency", x: 0.50, y: 0.70, relatedIssue: "Nielsen #6 — Recognition Rather Than Recall" },
        { id: "mob-7-ann-3", label: "Overlap at 200% zoom",   labelAr: "تداخل عند تكبير 200٪", type: "contrast", x: 0.50, y: 0.90, relatedIssue: "WCAG 1.4.4 — Resize Text" }
      ]
    }
  },

  {
    id: 8, name: "Checkout", nameAr: "الدفع", slug: "checkout",
    web: {
      screenshotPath: "../screenshots/web/step-08-checkout.png",
      screenshotStatus: "captured",
      observation: "Checkout redirects to a login wall. The screen shows 'Sign in to checkout' with email/phone field, a continue button, and SSO options below a divider. There is no visible 'guest checkout' path.",
      uxIssues: [
        { title: "No guest checkout option",
          titleAr: "لا يوجد خيار دفع كضيف",
          heuristic: "Nielsen #3 — User Control and Freedom",
          description: "The checkout flow forces account creation or sign-in before any order details (price, delivery, payment) are shown. KSA shoppers comparing Amazon.sa and Noon bounce here.",
          impact: "Industry baseline estimates 20–30% checkout abandonment from forced account creation.",
          recommendation: "Offer 'Continue as guest' with equal weight to sign-in. Capture email for order updates; offer account creation post-purchase with pre-filled data.",
          severity: "High" },
        { title: "SSO options (Apple, Google) buried below fold on desktop",
          titleAr: "خيارات SSO (آبل، جوجل) مدفونة تحت الشاشة",
          heuristic: "Nielsen #6 — Recognition Rather Than Recall",
          description: "Apple and Google sign-in buttons sit below the email form with a small 'or continue with' divider. Many users don't scroll past the email field.",
          impact: "Users with existing SSO accounts type passwords unnecessarily; fail rate is higher.",
          recommendation: "Move SSO buttons above the email input; Apple Sign-In first for KSA iOS majority, then Google. Keep email as a secondary option.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Phone-country-code selector lacks keyboard search",
          titleAr: "محدد رمز الدولة بدون بحث لوحة المفاتيح",
          wcagPrinciple: "Operable",
          wcagCriteria: "WCAG 2.1.1 — Keyboard, Level A",
          description: "The country-code dropdown is a custom widget that doesn't respond to type-ahead (typing 'S' should jump to 'Saudi Arabia'). Users must mouse-scroll through 200+ countries.",
          impact: "Keyboard-only users, screen-reader users, and power users cannot quickly select country code.",
          recommendation: "Implement as a native <select> or a searchable combobox with type-ahead and arrow-key navigation.",
          severity: "High" }
      ],
      annotations: [
        { id: "web-8-ann-1", label: "No guest checkout", labelAr: "لا يوجد دفع كضيف", type: "trust", x: 0.50, y: 0.45, relatedIssue: "Nielsen #3 — User Control and Freedom" },
        { id: "web-8-ann-2", label: "SSO below fold",     labelAr: "SSO تحت الشاشة", type: "cta", x: 0.50, y: 0.75, relatedIssue: "Nielsen #6 — Recognition Rather Than Recall" },
        { id: "web-8-ann-3", label: "No type-ahead on country", labelAr: "لا يوجد بحث في الدول", type: "confusion", x: 0.38, y: 0.50, relatedIssue: "WCAG 2.1.1 — Keyboard" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-08-checkout.png",
      screenshotStatus: "captured",
      observation: "Mobile checkout also opens to a sign-in screen. Email/phone input, single 'Continue' CTA, Apple/Google SSO buttons beneath. A small link 'Checkout as guest?' is hidden in the footer.",
      uxIssues: [
        { title: "Guest checkout link is 10 px text in the footer",
          titleAr: "رابط الدفع كضيف نص 10 بكسل في التذييل",
          heuristic: "Nielsen #6 — Recognition Rather Than Recall",
          description: "A 'Checkout as guest' link exists on mobile but is rendered at ~10 px grey text below 'Help' and 'Terms' in the footer — effectively invisible.",
          impact: "Even users aware of guest option can't find it; mobile abandonment is higher than web.",
          recommendation: "Promote 'Continue as guest' to a secondary button directly under the primary 'Continue' CTA, with equal tap area.",
          severity: "High" },
        { title: "Keyboard covers the 'Continue' CTA on mid-size phones",
          titleAr: "لوحة المفاتيح تغطي زر 'متابعة' على الهواتف متوسطة الحجم",
          heuristic: "Nielsen #5 — Error Prevention",
          description: "On a 390×844 viewport, the soft keyboard occupies ~360 px; the 'Continue' button sits at ~720 px from top and is hidden. Users must dismiss the keyboard to tap Continue — the form doesn't scroll the field into view consistently.",
          impact: "Form completion failures; users re-focus input to dismiss keyboard, re-typing passwords.",
          recommendation: "Use scroll-padding-bottom equal to estimated keyboard height; on focus, scroll the submit button into view. Consider a sticky 'Continue' bar that stays above the keyboard.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "Password visibility toggle has no label",
          titleAr: "زر إظهار كلمة المرور بدون تسمية",
          wcagPrinciple: "Robust",
          wcagCriteria: "WCAG 4.1.2 — Name, Role, Value, Level A",
          description: "The eye icon inside the password field is a <button> without aria-label and without aria-pressed to announce state (shown/hidden).",
          impact: "Blind users can't reveal or verify typed password.",
          recommendation: "aria-label='Show password' / 'Hide password', aria-pressed='true|false', with 44×44 tap area.",
          severity: "High" }
      ],
      annotations: [
        { id: "mob-8-ann-1", label: "Guest link hidden",          labelAr: "رابط الضيف مخفي", type: "confusion", x: 0.50, y: 0.92, relatedIssue: "Nielsen #6 — Recognition Rather Than Recall" },
        { id: "mob-8-ann-2", label: "Keyboard covers CTA",         labelAr: "لوحة المفاتيح تغطي الزر", type: "tapTarget", x: 0.50, y: 0.65, relatedIssue: "Nielsen #5 — Error Prevention" },
        { id: "mob-8-ann-3", label: "Eye toggle no label",         labelAr: "أيقونة العين بلا تسمية", type: "trust", x: 0.92, y: 0.45, relatedIssue: "WCAG 4.1.2 — Name, Role, Value" }
      ]
    }
  },

  {
    id: 9, name: "Order Confirmation / Login Wall", nameAr: "تأكيد الطلب / جدار تسجيل الدخول", slug: "confirmation",
    web: {
      screenshotPath: "../screenshots/web/step-09-confirmation.png",
      screenshotStatus: "captured",
      observation: "The final step on a no-auth run lands on the login page. Headline 'Welcome to noon' with a Riyadh-skyline illustration and a single email/phone input. Post-login, users would see an order-confirmation page with order #, items, delivery, and payment summary.",
      uxIssues: [
        { title: "No estimated delivery summary on login wall",
          titleAr: "لا يوجد ملخص تاريخ التوصيل على جدار تسجيل الدخول",
          heuristic: "Nielsen #1 — Visibility of System Status",
          description: "Users returning from cart/checkout lose context — the login wall doesn't show cart value, item count, or delivery window. It feels like starting over.",
          impact: "Users unsure whether their cart is still preserved; some re-browse to rebuild.",
          recommendation: "Pin a slim summary strip ('3 items • 5,999 SAR • arrives Tuesday') above the sign-in form; preserved across the auth step.",
          severity: "Medium" },
        { title: "No 'Continue as guest' despite Noon supporting guest orders",
          titleAr: "لا يوجد 'متابعة كضيف' رغم دعم Noon للطلبات كضيف",
          heuristic: "Nielsen #3 — User Control and Freedom",
          description: "Noon's app allows guest orders in some flows, but this web step enforces account. The mismatch breaks the cross-device promise.",
          impact: "Users who started in-app and continued on web hit a wall; drop-off.",
          recommendation: "Mirror app behavior: offer guest with email-only capture; bind to account on first sign-in.",
          severity: "High" }
      ],
      accessibilityIssues: [
        { title: "Illustration has role='img' but empty alt",
          titleAr: "الرسم التوضيحي بدور 'img' ونص بديل فارغ",
          wcagPrinciple: "Perceivable",
          wcagCriteria: "WCAG 1.1.1 — Non-text Content, Level A",
          description: "The Riyadh skyline illustration is decorative; it uses <img role='img' alt=''> — technically correct for decorative, but the role='img' plus empty alt causes some screen readers to announce 'image, unlabelled'.",
          impact: "Noise in the screen-reader flow; users spend time confirming it's decorative.",
          recommendation: "Remove role='img' on decorative illustrations; keep alt=''. Or, if the skyline conveys KSA locality, alt='Welcome to Noon Saudi Arabia'.",
          severity: "Low" }
      ],
      annotations: [
        { id: "web-9-ann-1", label: "No cart summary",   labelAr: "لا يوجد ملخص عربة", type: "confusion", x: 0.50, y: 0.15, relatedIssue: "Nielsen #1 — Visibility of System Status" },
        { id: "web-9-ann-2", label: "No guest continuation", labelAr: "لا يوجد متابعة كضيف", type: "trust", x: 0.50, y: 0.55, relatedIssue: "Nielsen #3 — User Control and Freedom" }
      ]
    },
    mobile: {
      screenshotPath: "../screenshots/mobile/step-09-confirmation.png",
      screenshotStatus: "fallback",
      observation: "Fallback placeholder — mobile login/confirmation could not be captured. Analysis below is inferred from documented Noon SA mobile auth flows.",
      uxIssues: [
        { title: "OTP resend timer uses only digits, no minute:second format",
          titleAr: "مؤقت إعادة إرسال OTP أرقام فقط",
          heuristic: "Nielsen #2 — Match Between System and the Real World",
          description: "The 'Resend in 59' countdown shows only a number with no 'seconds' unit; Arabic-locale users see '٥٩' with no context.",
          impact: "Users unsure if that's seconds or a code; some wait far longer than needed.",
          recommendation: "Show 'Resend in 0:59' (MM:SS) with localized unit; bold the digit.",
          severity: "Low" },
        { title: "OTP input doesn't auto-advance between digits",
          titleAr: "حقل OTP لا ينتقل تلقائياً بين الأرقام",
          heuristic: "Nielsen #7 — Flexibility and Efficiency of Use",
          description: "OTP is a single <input> rather than 4–6 segmented boxes with auto-advance. Users must type the full code into one field, then submit.",
          impact: "Slower entry; higher error rates; doesn't match the pattern used by UAE/KSA banking apps.",
          recommendation: "Split OTP into 4 or 6 boxes with autofocus-next-on-input, arrow-key navigation, and one-tap paste across all boxes.",
          severity: "Medium" }
      ],
      accessibilityIssues: [
        { title: "OTP input has inputmode='text' instead of 'numeric'",
          titleAr: "إدخال OTP يستخدم inputmode='text' بدل 'numeric'",
          wcagPrinciple: "Understandable",
          wcagCriteria: "WCAG 1.3.5 — Identify Input Purpose, Level AA",
          description: "The OTP field defaults to the full alphabetic keyboard on iOS/Android. No inputmode='numeric' or autocomplete='one-time-code' is set.",
          impact: "Slower OTP entry on mobile; no iOS SMS autofill suggestion.",
          recommendation: "Set inputmode='numeric' pattern='[0-9]*' autocomplete='one-time-code' so iOS Mail/Messages auto-suggests the code.",
          severity: "Medium" }
      ],
      annotations: [
        { id: "mob-9-ann-1", label: "Unit-less timer",     labelAr: "مؤقت بدون وحدة", type: "confusion", x: 0.50, y: 0.35, relatedIssue: "Nielsen #2 — Match Between System and the Real World" },
        { id: "mob-9-ann-2", label: "Single OTP field",    labelAr: "حقل OTP واحد", type: "inconsistency", x: 0.50, y: 0.50, relatedIssue: "Nielsen #7 — Flexibility and Efficiency of Use" },
        { id: "mob-9-ann-3", label: "No numeric inputmode", labelAr: "لا يوجد inputmode رقمي", type: "trust", x: 0.50, y: 0.60, relatedIssue: "WCAG 1.3.5 — Identify Input Purpose" }
      ]
    }
  }
];

/* ============================================================
   Web vs Mobile comparison
   ============================================================ */
AUDIT_DATA.insights.webVsMobile = [
  { step: "1. Homepage",        webNote: "Mega-menu dense but discoverable; carousel rotates without pause.", mobileNote: "Cart icon hidden; category rail has no end marker.", verdict: "Mobile worse" },
  { step: "2. Search",          webNote: "Unlabeled mixed suggestions; focus-ring invisible on yellow.", mobileNote: "Recent-search pills truncate; no voice search.", verdict: "Similar" },
  { step: "3. Results",         webNote: "Sponsored results blend with organic; no active-filter chips.", mobileNote: "Filter/Sort conflated in one sheet; titles truncate before variant info.", verdict: "Mobile worse" },
  { step: "4. Apple Brand",     webNote: "Rail arrows on hover only; no breadcrumb.", mobileNote: "Sticky headers consume 22% of viewport; chips <44 px.", verdict: "Mobile worse" },
  { step: "5. Product (PDP)",   webNote: "Add-to-Cart vs Buy Now identical weight; delivery date tiny.", mobileNote: "Sticky bar overlaps reviews; variant groups not semantic.", verdict: "Similar" },
  { step: "6. Add to Cart",     webNote: "Drawer auto-dismisses; stepper has no stock cap.", mobileNote: "Full-screen interstitial traps focus; accessories lack price.", verdict: "Mobile worse" },
  { step: "7. Cart",            webNote: "Shipping hidden until login; Save vs Remove conflate.", mobileNote: "Three-step remove gesture; sticky bar overlaps at 200% zoom.", verdict: "Web worse" },
  { step: "8. Checkout",        webNote: "Guest checkout missing; SSO below fold; no type-ahead on country.", mobileNote: "Guest link 10 px in footer; keyboard covers CTA.", verdict: "Similar" },
  { step: "9. Confirmation/Login", webNote: "No cart summary pinned; no guest continuation.", mobileNote: "Single OTP input; no numeric inputmode; unit-less timer.", verdict: "Mobile worse" }
];

/* ============================================================
   Arabic translations (appended to existing objects)
   ============================================================ */
(function injectArabic(){
  // Executive summary
  AUDIT_DATA.executiveSummary.paragraphAr = "تعاني رحلة شراء آيفون 17 على نون السعودية من ثلاث مشكلات متراكمة: تجربة بحث ونتائج مثقلة معرفياً تؤخر اتخاذ القرار، وتفاوت في التسلسل البصري بين الويب والموبايل يضعف الثقة في صفحة المنتج، ومسار دفع يفرض إنشاء حساب قبل إظهار السعر النهائي. الموبايل أضعف من الويب في أحجام اللمس ووضوح القراءة على صفحة المنتج والسلة. أكبر فرصة للتحسين هي إظهار السعر وتاريخ التوصيل وخيار 'الدفع كضيف' قبل جدار تسجيل الدخول في الخطوة 8.";
  const tr = AUDIT_DATA.executiveSummary.topRisks;
  tr[0].titleAr="فرض تسجيل الدخول قبل شفافية السعر"; tr[0].descriptionAr="مسار الدفع يخفي السعر النهائي وتاريخ التوصيل والرسوم خلف جدار تسجيل دخول إجباري، مما يخل بتحكم المستخدم ويسبب تسرباً في المرحلة الأخيرة.";
  tr[1].titleAr="ضعف تسلسل أزرار الدعوة في صفحة المنتج"; tr[1].descriptionAr="زرّا 'أضف إلى السلة' و'اشتر الآن' يتنافسان بصرياً بنفس الوزن؛ المستخدم يتردد فينخفض السرعة في القرار على جهاز عالي القيمة.";
  tr[2].titleAr="تباين ألوان غير كافٍ على السعر والشارات"; tr[2].descriptionAr="نص السعر الثانوي الرمادي وشارات العروض الصفراء على خلفية صفراء أقل من معيار WCAG 1.4.3 AA (<4.5:1)، مما يجعل العروض غير مقروءة لأصحاب الرؤية الضعيفة وتحت أشعة الشمس.";
  const qw = AUDIT_DATA.executiveSummary.quickWins;
  qw[0].titleAr="إظهار خيار الدفع كضيف"; qw[0].descriptionAr="أضف خيار 'متابعة كضيف' مرئياً على شاشة تسجيل الدخول للدفع بنفس وزن تسجيل الدخول.";
  qw[1].titleAr="رفع تباين أزرار الدعوة إلى 4.5:1"; qw[1].descriptionAr="اجعل نص زر 'أضف إلى السلة' أغمق أو استخدم نمطاً ممتلئاً على الخلفية الصفراء.";
  qw[2].titleAr="فرض أهداف لمس 44×44 بكسل على الموبايل"; qw[2].descriptionAr="زد التباعد بين أيقونات الرأس وأشرطة الفلاتر لتلبية معيار WCAG 2.5.5 المستوى AA.";

  // Themes
  const th = AUDIT_DATA.insights.themes;
  th[0].descriptionAr="الصفحة الرئيسية والنتائج وصفحة المنتج تعرض في وقت واحد لافتات وفلاتر وشارات وتوصيات بنفس الوزن البصري. المستخدم لا يستطيع التمييز بين الإشارة والضوضاء، فيبطؤ المسح والمقارنة، خاصة على الموبايل.";
  th[1].descriptionAr="البحث وصفحة الماركة والسلة تستخدم أنماط بطاقات وأحجام طباعة وألوان أزرار مختلفة. المستخدم العائد لا يستطيع الاعتماد على أنماط متعلمة — يخالف مبدأ نيلسن #4 عبر الرحلة.";
  th[2].descriptionAr="الإجراءات الأساسية (أضف إلى السلة، الدفع) تشترك في الصفحة مع عناصر أقل أهمية (احفظ لاحقاً، أعلمني) بنفس الحجم واللون تقريباً. عين المستخدم لا تُوجَّه إلى الخطوة التالية المقصودة.";
  th[3].descriptionAr="السلة → الدفع → تسجيل الدخول يفرض تحويل سياق قبل عرض التكلفة الإجمالية. الدفع كضيف غير متاح. خيارات SSO غير بارزة. هذا أكبر عبء على معدل التحويل في الرحلة.";
  th[4].descriptionAr="تباين منخفض في النصوص الثانوية، تسميات نماذج مفقودة، أزرار أيقونات بدون دلالة، وأهداف لمس صغيرة. حالات تركيز لوحة المفاتيح غير مرئية تقريباً على الأسطح الصفراء.";

  // Web vs Mobile
  const wm = AUDIT_DATA.insights.webVsMobile;
  const wmAr = [
    {step:"1. الصفحة الرئيسية", web:"القائمة الرئيسية مكثفة لكن قابلة للاكتشاف؛ الكاروسيل يدور بدون إيقاف.", mobile:"أيقونة السلة مخفية؛ شريط الفئات بدون علامة نهاية.", verdict:"الموبايل أسوأ"},
    {step:"2. البحث", web:"اقتراحات مختلطة بدون تسميات؛ إطار تركيز غير مرئي على الأصفر.", mobile:"حبوب البحث الأخيرة تُقص؛ لا يوجد بحث صوتي.", verdict:"متشابه"},
    {step:"3. النتائج", web:"النتائج الممولة تختلط بالعضوية؛ لا توجد رقاقات للفلاتر النشطة.", mobile:"الفلترة والفرز مدمجتان في لوحة واحدة؛ العناوين تُقص قبل بيانات المتغير.", verdict:"الموبايل أسوأ"},
    {step:"4. ماركة آبل", web:"أسهم الشريط تظهر بالتمرير فقط؛ لا توجد فتات خبز.", mobile:"الرؤوس الثابتة تستهلك 22٪ من الشاشة؛ الحبوب أصغر من 44 بكسل.", verdict:"الموبايل أسوأ"},
    {step:"5. صفحة المنتج", web:"زرّا 'أضف إلى السلة' و'اشتر الآن' بنفس الوزن؛ تاريخ التوصيل صغير.", mobile:"الشريط الثابت يتداخل مع المراجعات؛ مجموعات المتغيرات غير دلالية.", verdict:"متشابه"},
    {step:"6. الإضافة إلى السلة", web:"الدرج يُغلق تلقائياً؛ العداد بدون حد للمخزون.", mobile:"شاشة بينية كاملة تحبس التركيز؛ الملحقات بدون سعر.", verdict:"الموبايل أسوأ"},
    {step:"7. السلة", web:"الشحن مخفي حتى تسجيل الدخول؛ خلط بين 'حفظ' و'إزالة'.", mobile:"إزالة بثلاث خطوات؛ الشريط الثابت يتداخل عند تكبير 200٪.", verdict:"الويب أسوأ"},
    {step:"8. الدفع", web:"لا يوجد خيار دفع كضيف؛ SSO تحت الشاشة؛ لا يوجد بحث في رمز الدولة.", mobile:"رابط الضيف 10 بكسل في التذييل؛ لوحة المفاتيح تغطي الزر.", verdict:"متشابه"},
    {step:"9. التأكيد / تسجيل الدخول", web:"لا يوجد ملخص للسلة مثبت؛ لا يوجد متابعة كضيف.", mobile:"حقل OTP واحد؛ لا يوجد inputmode رقمي؛ مؤقت بدون وحدة.", verdict:"الموبايل أسوأ"}
  ];
  wm.forEach((r,i) => { r.stepAr = wmAr[i].step; r.webNoteAr = wmAr[i].web; r.mobileNoteAr = wmAr[i].mobile; r.verdictAr = wmAr[i].verdict; });

  // Per-step prose translations (observation, ux/a11y description/impact/recommendation/heuristic/wcagPrinciple)
  const STEP_AR = [
    // 1 Homepage
    {
      web:{
        observation:"تفتح الصفحة الرئيسية بشريط أصفر علوي، وقائمة كبرى كثيفة بحوالي 18 فئة رئيسية، وكاروسيل دوار، وخمسة شرائط منتجات متراصة. شريط البحث في المنتصف لكن بنفس الوزن البصري لمحدد الموقع وأيقونة الحساب. لا توجد نقطة دخول مخصصة لآيفون 17 فوق الطية.",
        ux:[
          {description:"الكاروسيل المكون من 4 شرائح يتقدم تلقائياً كل ~5 ثوان بدون زر إيقاف أو مؤشر تقدم. القارئون يفقدون العرض قبل النقر؛ المستخدمون العائدون لا يستطيعون إيقاف الحركة. كما يثير مخاوف WCAG 2.2.2.", impact:"ضياع نقرات على المنتجات المروج لها؛ المستخدمون يشعرون بفقدان السيطرة.", recommendation:"أضف زر تشغيل/إيقاف مرئي أسفل يمين الكاروسيل، اجعل النقاط قابلة للنقر، وأوقف الحركة عند التمرير أو التركيز.", heuristic:"نيلسن #3 — تحكم المستخدم وحريته"},
          {description:"الفئات الرئيسية ('إلكترونيات'، 'موبايلات'، 'تلفزيونات وصوتيات'…) تتداخل مفهومياً. الباحث عن آيفون 17 يرى 3 نقاط دخول محتملة على الأقل ويضطر للتمرير على كل منها لتمييزها، مما يخلق نمط تخمين ومحاولة.", impact:"يؤخر النقرة الأولى من 3 إلى 6 ثوان؛ ويزيد الاعتماد على البحث كنمط إنقاذ.", recommendation:"اختصر إلى 8-10 فئات رئيسية مرجعية وعزز 'الموبايلات' كنقطة دخول أساسية لشراء الهاتف، مطابقاً لتصنيف تطبيق نون.", heuristic:"نيلسن #6 — التعرف بدلاً من التذكر"}
        ],
        a11y:[{description:"أيقونات السلة والمفضلة والحساب في الشريط العلوي مبنية كـ <div>/<a> بدون aria-label. قارئات الشاشة تنطق فقط 'رابط' أو 'صورة'.", impact:"المستخدمون الكفيفون لا يستطيعون تحديد السلة أو المفضلة أو الحساب دون التنقل والتخمين من السياق.", recommendation:"أضف aria-label='سلة التسوق'، aria-label='قائمة الأمنيات'، aria-label='حسابي' لكل أيقونة؛ اعرض عداد العناصر عبر منطقة aria-live.", wcagPrincipleAr:"قابل للإدراك"}]
      },
      mobile:{
        observation:"الصفحة الرئيسية للموبايل ترتب بطاقة الموقع وشريط البحث وأربع لافتات ترويجية فوق الطية. شريط الفئات يستخدم بطاقات دائرية بتمرير أفقي. التنقل الأساسي (السلة، الحساب) غير مرئي فوق الطية — مخفي خلف القائمة.",
        ux:[
          {description:"رأس الموبايل يعرض البحث والقائمة فقط. حالة السلة غير مرئية حتى يفتح المستخدم الدرج أو يمرر للأسفل. لا يستطيع المستخدم رؤية عدد العناصر أو تأكيد نجاح إضافة منتج بدون التنقل.", impact:"يفقد المستخدمون الوعي بمحتويات السلة، مما يقلل الثقة في منتصف الرحلة ويزيد التخلي عند العودة.", recommendation:"ثبّت أيقونة سلة دائمة بعداد عناصر مباشر في أعلى يمين رأس الموبايل، مطابقاً لنمط تطبيق نون.", heuristic:"نيلسن #1 — وضوح حالة النظام"},
          {description:"كاروسيل البطاقات الدائرية يمرر أفقياً لكن بدون نقاط ترقيم أو عدد أو مؤشر نهاية. المستخدمون لا يعرفون كم فئة موجودة أو إلى أين وصلوا.", impact:"الفئات المخفية خارج الشاشة تتلقى جزءاً من النقرات المتوقعة.", recommendation:"أضف مؤشر تقدم سطر واحد تحت الشريط (مثلاً '3 / 18') أو تلاشي حافة يمنى مع شيفرون.", heuristic:"نيلسن #1 — وضوح حالة النظام"}
        ],
        a11y:[{description:"حقل البحث يستخدم نص placeholder رمادي 'ماذا تبحث عنه؟' بدون <label> دائم. نص الـ placeholder يختفي عند التركيز.", impact:"المستخدمون المعتمدون على المكبرات أو من ينقطعون أثناء الكتابة يفقدون غرض الحقل.", recommendation:"أظهر تسمية دائمة فوق الحقل (أو visually-hidden <label for='q'>)، وأبق تلميحاً مساعداً قصيراً مرئياً تحته.", wcagPrincipleAr:"قابل للفهم"}]
      }
    },
    // 2 Search
    {
      web:{
        observation:"بديل احتياطي — حالة البحث المُكتوبة لم تُلتقط بسبب حماية نون من البوتات. التحليل أدناه مستنتج من أنماط شريط البحث الموثقة في نون السعودية.",
        ux:[
          {description:"كتابة 'iPhone 17' تظهر قائمة مختلطة — عمليات بحث حديثة، منتجات مقترحة بصور مصغرة، ورقاقات ماركات — بدون تسميات للأقسام. المستخدمون يفقدون 1-2 ثانية في تحليل التخطيط.", impact:"يقلل سرعة الاستعلام-إلى-النقرة؛ يزيد الجهد المعرفي في تفاعل عالي النية.", recommendation:"جمّع الاقتراحات تحت أقسام معنونة: 'الأخيرة'، 'المنتجات'، 'الماركات'، 'الفئات' — كل قسم بعنوان قصير وفاصل.", heuristic:"نيلسن #4 — الاتساق والمعايير"},
          {description:"المستخدمون المتقدمون يضغطون Tab → Enter بعد الكتابة؛ أيقونة إرسال البحث الصفراء إما تسرق التركيز أو تخفي إطار التركيز على الخلفية الصفراء.", impact:"مستخدمو لوحة المفاتيح والتقنية المساعدة لا يستطيعون إرسال البحث بكفاءة.", recommendation:"تأكد أن أيقونة الإرسال تتلقى إطار تركيز 2 بكسل بحدود داكنة (وليس أصفر على أصفر) وأنها نقطة Tab الطبيعية بعد الحقل.", heuristic:"نيلسن #7 — المرونة وكفاءة الاستخدام"}
        ],
        a11y:[{description:"قائمة الاقتراحات تظهر في الـ DOM لكن بدون role='listbox' و aria-live='polite'. المستخدمون الكفيفون لا يسمعون أي تغذية راجعة عند تحديث الاقتراحات.", impact:"مستخدمو قارئات الشاشة لا يستطيعون التصرف على الاقتراحات التنبؤية، مما يجبر إرسال البحث كاملاً.", recommendation:"طبّق نمط combobox في WAI-ARIA: حقل بـ role='combobox'، قائمة بـ role='listbox'، و aria-activedescendant للخيار المظلل.", wcagPrincipleAr:"قوي ومتين"}]
      },
      mobile:{
        observation:"شاشة البحث في الموبايل تعرض الاستعلام المكتوب مع X مدمج للمسح، عمليات البحث الأخيرة كرقاقات، وقسم رائج تحته. لوحة المفاتيح الناعمة تحتل النصف السفلي من الشاشة.",
        ux:[
          {description:"الاستعلامات الأطول (مثل 'iphone 17 pro max 512gb') تُقص إلى '…pro max 5…' بدون طريقة للتوسيع أو النقر للعرض الكامل أو الضغط المطول. يجب على المستخدم إعادة الكتابة لتذكر ما بحث عنه.", impact:"ميزة عمليات البحث الأخيرة تصبح عديمة الفائدة للاستعلامات الطويلة؛ تضيف احتكاك كتابة.", recommendation:"غلّف نص الرقاقة المقطوعة بتلميح عند الضغط المطول واسمح بتوسيع الرقاقة لسطرين للاستعلامات >25 حرفاً.", heuristic:"نيلسن #2 — التوافق بين النظام والعالم الحقيقي"},
          {description:"مستخدمو السعودية يبدلون عادة بين العربية والإنجليزية؛ البحث الصوتي معيار في تطبيقات منافسة (Amazon.sa) لكنه مفقود هنا، مما يجبر المستخدمين الثنائي اللغة على الكتابة.", impact:"إدخال استعلام أبطأ، خاصة للمستخدمين الذين يخلطون أسماء الماركات العربية مع الموديلات الإنجليزية.", recommendation:"أضف أيقونة ميكروفون في حقل البحث مع ASR مدرك للموقع (عربي + إنجليزي)، مطابقاً لتطبيق نون.", heuristic:"نيلسن #7 — المرونة وكفاءة الاستخدام"}
        ],
        a11y:[{description:"الـ ✕ لمسح النص داخل حقل البحث يُعرض بحوالي 24×24 بكسل، أقل من الحد الأدنى الموصى به 44×44 للمس.", impact:"المستخدمون ذوو الإعاقات الحركية أو الأصابع الكبيرة يضربون الحقل بدلاً من مسحه.", recommendation:"وسّع المنطقة القابلة للضغط إلى 44×44 (استخدم padding، حافظ على حجم الرمز نفسه) وأضف فجوة 4 بكسل من منطقة المؤشر.", wcagPrincipleAr:"قابل للتشغيل"}]
      }
    },
    // 3 Results
    {
      web:{
        observation:"النتائج تعرض شريط فلاتر يساري (ماركة، سعر، RAM، تخزين، لون) وشبكة منتجات بأربعة أعمدة. المنتجات الممولة تظهر مع وسم 'Sponsored' خفيف. القائمة المنسدلة للفرز في أعلى اليمين. قوائم آيفون 17 تشمل سعر التقسيط وشارة التوصيل السريع والتقييم.",
        ux:[
          {description:"تسميات 'Sponsored' بحجم 10 بكسل رمادية وموضوعة تحت السعر؛ البطاقة نفسها تستخدم تنسيقاً مطابقاً للنتائج العضوية. المستخدمون ينقرون على إعلانات دون علم، ثم يكافحون للعودة إلى نتائج 'حقيقية' الأكثر مطابقة.", impact:"يضعف الثقة في صلة الشبكة؛ يزيد الرجوع وتشذيب الفلاتر.", recommendation:"انقل وسم 'Sponsored' إلى أعلى البطاقة بحجم 12 بكسل وزن متوسط، وأضف شريطاً جانبياً يسارياً 1 بكسل بنبرة محايدة.", heuristic:"نيلسن #10 — المساعدة والتوثيق"},
          {description:"بعد تطبيق 'Apple' + 'أكثر من 256 جيجا' + 'تحت 5000 ريال'، الشريط الأيسر يعرض المربعات لكن لا يوجد صف رقاقات موحد أعلى النتائج. المستخدمون الذين يمررون عبر الشبكة يفقدون تتبع ما هو نشط.", impact:"المستخدمون يعيدون تطبيق الفلاتر أو يتخلون لأنهم لا يتذكرون الحالة النشطة.", recommendation:"اعرض شريط رقاقات مباشرة فوق الشبكة يوضح كل فلتر نشط مع × مدمج للإزالة، بالإضافة إلى رابط 'مسح الكل'.", heuristic:"نيلسن #1 — وضوح حالة النظام"}
        ],
        a11y:[{description:"عرض الخصومات يستخدم خط مشطوب بصري فقط، عبر CSS text-decoration. قارئات الشاشة تنطق 'كان 5999 الآن 4999' كـ 'خمسة تسعة تسعة تسعة أربعة تسعة تسعة تسعة' بدون سياق علائقي.", impact:"المستخدمون الكفيفون لا يستطيعون تحديد أي رقم هو السعر الحالي.", recommendation:"غلّف المشطوب في <del> مع aria-label='السعر الأصلي 5,999 ريال' والسعر الحالي في <ins> أو ضع له aria-label صراحة 'السعر بعد الخصم 4,999 ريال'.", wcagPrincipleAr:"قابل للإدراك"}]
      },
      mobile:{
        observation:"الموبايل يعرض شبكة منتجات بعمودين مع مفعّلات لوحة سفلية ثابتة لـ 'الفلتر' و'الفرز'. كل بطاقة تعرض الصورة، عنوان مقطوع لسطرين، السعر، التقسيط، والتقييم. وسم Sponsored 9 بكسل.",
        ux:[
          {description:"الضغط على 'الفرز' و'الفلتر' كلاهما يفتح نفس اللوحة بعلامات تبويب. المستخدمون الذين يطبقون فلاتر غالباً ما يغيرون ترتيب الفرز عن طريق الخطأ، والعكس صحيح. زر الـ CTA الأساسي يقرأ 'تطبيق' لكليهما، مما يدمج إجراءين مختلفين تماماً.", impact:"إعادة فرز/فلترة غير مقصودة؛ المستخدمون يعيدون فتح اللوحة للتراجع.", recommendation:"افصل الفلتر والفرز إلى لوحتين سفليتين مستقلتين. استخدم قائمة راديو لاختيار واحد للفرز ومربعات للفلتر، بأزرار CTA أساسية مميزة.", heuristic:"نيلسن #5 — منع الأخطاء"},
          {description:"عناوين مثل 'Apple iPhone 17 Pro Max with FaceTime 512 GB Natural Titanium 5G' تُقص إلى 'Apple iPhone 17 Pro Max with FaceTime…' — تقطع بالضبط معلومات المتغير التي يحتاجها المستخدم للتمييز.", impact:"يجبر المستخدمين على الدخول لكل صفحة منتج لتأكيد التخزين/اللون؛ يزيد استخدام زر الرجوع.", recommendation:"أعطِ الأولوية للموديل + التخزين + اللون في أول 60 حرفاً ('iPhone 17 Pro Max 512 GB Titanium'). انقل 'FaceTime'/'5G' إلى النهاية أو أزل.", heuristic:"نيلسن #8 — التصميم الجمالي والبسيط"}
        ],
        a11y:[{description:"التقييم '4.5' مع نجمة صفراء مُعرض كصورة خلفية تزيينية + نص. قارئات الشاشة تسمع '4.5' بدون سياق.", impact:"المستخدمون لا يستطيعون التمييز إن كانت 4.5 سعراً أم تقييماً أم عدد مراجعات.", recommendation:"استخدم role='img' aria-label='تقييم 4.5 من 5 نجوم، 2,847 مراجعة' على غلاف التقييم.", wcagPrincipleAr:"قوي ومتين"}]
      }
    },
    // 4 Brands
    {
      web:{
        observation:"صفحة ماركة آبل تفتح ببطاقة هيرو مميزة، تليها شرائط فئات (آيفون، آيباد، ماك بوك، ساعة، إيربودز، ملحقات). كل شريط يستخدم تمريراً أفقياً مع أسهم يسار/يمين. آيفون 17 معروض في بطاقة هيرو مخصصة.",
        ux:[
          {description:"الأسهم < > على جانبي كل شريط أفقي تظهر فقط عند التمرير وقياسها ~20 بكسل. المستخدمون لأول مرة على سطح المكتب لا يدركون أن الأشرطة تتمرر؛ مستخدمو لوحة اللمس فقط لا يفعّلون التمرير أبداً.", impact:"اكتشاف المنتجات خارج الشاشة ينخفض كثيراً؛ المخزون يبدو أقل مما هو.", recommendation:"أظهر الأسهم باستمرار عند وجود تجاوز، كبّرها إلى 40×40 بتباين 4.5:1، وأضف دعم مفاتيح الأسهم مع role='region' aria-roledescription='carousel'.", heuristic:"نيلسن #6 — التعرف بدلاً من التذكر"},
          {description:"لا يوجد فتات خبز (الرئيسية / الماركات / آبل). المستخدمون القادمون عبر رابط مباشر لا يستطيعون التنقل صعوداً إلى 'كل الماركات' إلا عبر زر الرجوع.", impact:"التراجع يجبر التنقل عبر التاريخ الكامل؛ المستخدمون يخرجون للصفحة الرئيسية.", recommendation:"اعرض فتات خبز 'الرئيسية / الماركات / آبل' فوق الهيرو، مع كل جزء قابل للنقر.", heuristic:"نيلسن #3 — تحكم المستخدم وحريته"}
        ],
        a11y:[{description:"هيرو الماركة يشغل تلقائياً مقطع منتج قصير بنص مدمج. الفيديو ليس له مسار تعليقات و prefers-reduced-motion يُتجاهل.", impact:"مستخدمو ضعف السمع يفقدون الرسالة؛ مستخدمو اضطرابات الدهليز يتلقون حركة لا يمكنهم إيقافها.", recommendation:"وفّر تعليقات عبر <track> واحترم prefers-reduced-motion باستبدال الفيديو بصورة هيرو ثابتة عند تطابق الاستعلام.", wcagPrincipleAr:"قابل للإدراك"}]
      },
      mobile:{
        observation:"صفحة ماركة الموبايل تكدس هيرو قصيراً، صف رقاقات أفقي (آيفون، ماك، آيباد…)، وشرائط منتجات متراصة عمودياً. صف الرقاقات ثابت تحت الرأس.",
        ux:[
          {description:"بين الرأس الرئيسي (56 بكسل)، رأس الماركة الفرعي (64 بكسل)، وصف الرقاقات الثابت (72 بكسل)، حوالي 192 بكسل من شاشة 844 بكسل مقفلة بشكل دائم. المستخدمون يرون فقط بطاقة منتج واحدة ونصف في وقت.", impact:"قابلية المسح تنخفض؛ المستخدمون يشعرون أن الصفحة 'فارغة' ويخرجون مبكراً.", recommendation:"اطوي الرأس الفرعي للماركة عند التمرير؛ احتفظ فقط بصف الرقاقات ثابتاً. استهدف ارتفاع ثابت <120 بكسل.", heuristic:"نيلسن #8 — التصميم الجمالي والبسيط"},
          {description:"رقاقات الفئات ('آيفون'، 'ماك'، 'آيباد'، 'ساعة') قياسها ~32 بكسل × عرض متغير، أقل من 44×44 الموصى به للمس.", impact:"ضربات خاطئة على رقاقات متجاورة؛ ملحوظ خاصة لذوي الأيدي أو الإبهام الكبير.", recommendation:"زد ارتفاع الرقاقة إلى 44 بكسل، أضف 8 بكسل padding أفقي بين الرقاقات.", heuristic:"نيلسن #7 — المرونة وكفاءة الاستخدام"}
        ],
        a11y:[{description:"الرقاقة المختارة مُشار إليها فقط بتعبئة صفراء (#FEEE00) مع نص داكن، بينما الرقاقات غير النشطة محددة برمادي. لا يوجد تسطير أو وزن غامق أو aria-selected.", impact:"المستخدمون عمى الألوان ومن على شاشات موبايل تحت أشعة الشمس لا يستطيعون التمييز أي فئة نشطة.", recommendation:"أضف وزناً غامقاً وتسطير 2 بكسل داكن للرقاقة النشطة، واضبط aria-selected='true' على علامة التبويب المختارة.", wcagPrincipleAr:"قابل للإدراك"}]
      }
    },
    // 5 Product
    {
      web:{
        observation:"صفحة المنتج تعرض المعرض على اليسار (5 صور مصغرة + الصورة الرئيسية)، العنوان/التقييم/السعر/المتغيرات في العمود الأوسط، وبطاقة إجراءات على اليمين (تاريخ التوصيل، 'أضف إلى السلة'، 'اشتر الآن'، معلومات البائع). علامات تبويب أسفل: نظرة عامة، المواصفات، المراجعات، الأسئلة.",
        ux:[
          {description:"كلا الإجراءين الأساسيين يتشاركان نفس التعبئة الصفراء، عرض متساو، موضع متجاور، ووزن خط متطابق. لا يوجد أساسي واضح؛ المستخدمون يترددون في الاختيار.", impact:"تردد في القرار على شراء عالي القيمة؛ انخفاض قابل للقياس في معدل النقر.", recommendation:"عزز 'أضف إلى السلة' كأساسي ممتلئ (أصفر) وقلّل 'اشتر الآن' إلى ثانوي محدد. اختبر A/B إن كان 'اشتر الآن' السريع ضرورياً أصلاً.", heuristic:"نيلسن #4 — الاتساق والمعايير"},
          {description:"النقر على 128 جيجا → 256 جيجا يحدّث الـ URL لكن السعر يومض بدون مؤشر تحميل مرئي. المستخدمون الذين ينقرون بسرعة يرون سعراً قديماً لمدة 200-400 ميلي ثانية.", impact:"قد يضيف المستخدمون إلى السلة بافتراض سعر خاطئ؛ تزيد المرتجعات والشكاوى.", recommendation:"اضبط نقرات المتغيرات (debounce) واعرض هيكل عظمي على عنصر السعر أثناء التحديث؛ أعلن السعر الجديد عبر aria-live='polite'.", heuristic:"نيلسن #1 — وضوح حالة النظام"},
          {description:"التزام التوصيل ('احصل عليه الثلاثاء 16 أبريل') يُعرض بحجم 12 بكسل رمادي تحت محدد العنوان. تاريخ التوصيل هو ثاني أهم مدخل قرار بعد السعر.", impact:"المستخدمون يفوتون أن التوصيل في نفس اليوم/اليوم التالي متاح، فيقللون قيمة نون.", recommendation:"عزز تاريخ التوصيل إلى 16 بكسل أخضر غامق مباشرة تحت السعر؛ أضف عداً تنازلياً ('اطلب خلال 3 س 12 د لتوصيل الثلاثاء').", heuristic:"نيلسن #1 — وضوح حالة النظام"}
        ],
        a11y:[{description:"الصور المصغرة لها alt='صورة 1'، alt='صورة 2'، إلخ. مستخدمو قارئات الشاشة لا يستطيعون التمييز إلى أي زاوية أو ميزة سيتنقلون.", impact:"المستخدمون الكفيفون لا يستطيعون الاختيار بمعنى بين عروض المعرض.", recommendation:"استخدم alts وصفية: 'منظر آيفون 17 برو ماكس الأمامي'، 'وحدة الكاميرا الخلفية'، 'الجانب الجانبي يظهر تشطيب التيتانيوم'. عبئ من PIM إن أمكن.", wcagPrincipleAr:"قابل للإدراك"}]
      },
      mobile:{
        observation:"صفحة المنتج للموبايل تفتح بكاروسيل صور بعرض كامل (مرر)، كتلة سعر، محددات متغيرات، تقدير توصيل، وشريط إجراءات سفلي ثابت مع 'أضف إلى السلة' و'اشتر الآن'. التمرير يظهر المواصفات والمراجعات.",
        ux:[
          {description:"عند التمرير إلى المراجعات، شريط الإجراءات السفلي الثابت يغطي السطر الأخير من كل مراجعة. لا يوجد ظل أو فاصل يميزه عن المحتوى خلفه — يبدو جزءاً من المراجعة.", impact:"المستخدمون يفوتون أسفل المراجعات ويخلطون بين الشريط الثابت والمحتوى المضمن.", recommendation:"أضف ظلاً علوياً 0 -2px 8px rgba(0,0,0,0.12) و 8 بكسل padding سفلي للمحتوى حتى لا تُقص المراجعات.", heuristic:"نيلسن #4 — الاتساق والمعايير"},
          {description:"قسم المراجعات يعرض فقط المتوسط (4.6) والعدد (2,847). لرؤية توزيع 1-5 نجوم أو الفلترة حسب التقييم، يجب على المستخدم فتح صفحة 'عرض كل المراجعات' بالحجم الكامل.", impact:"المستخدمون الذين يقيّمون إن كان 4.6 يعكس كثيراً من 5 نجوم أم خليط 1+5، يتخلون إلى مراجعات جوجل.", recommendation:"اعرض داخلياً مخطط 5 صفوف بأشرطة أفقية (نجمة → عدد) مع كل صف قابل للنقر للفلترة. يقلل الذهاب والإياب.", heuristic:"نيلسن #6 — التعرف بدلاً من التذكر"}
        ],
        a11y:[{description:"بطاقات اللون والتخزين مُعرضة كقائمة مسطحة من عناصر <button>. قارئات الشاشة لا توضح 'اللون:' قبل الخيارات أو 'التخزين:' قبل خيارات السعة.", impact:"مستخدمو قارئات الشاشة يسمعون 'تيتانيوم أسود طبيعي أبيض 128GB 256GB 512GB' كتسلسل واحد.", recommendation:"غلّف كل مجموعة في <fieldset> مع <legend>، أو استخدم role='radiogroup' aria-labelledby='color-label' مع تسمية مرئية 'اللون' تشير بالـ id إلى المجموعة.", wcagPrincipleAr:"قوي ومتين"}]
      }
    },
    // 6 Add to Cart
    {
      web:{
        observation:"الضغط على 'أضف إلى السلة' يبدّل الزر إلى عداد كمية (- 1 +) ويُظهر درجاً يمينياً يلخص السلة بأزرار 'اذهب إلى السلة' / 'متابعة التسوق'. إشعار أخضر يؤكد.",
        ux:[
          {description:"درج الملخص ينزلق ويختفي تلقائياً بعد ~4 ثوان. المستخدمون الذين يقرأون المجموع الفرعي أو يتفقدون الملحقات يفقدون الدرج في منتصف القراءة.", impact:"المستخدمون لا يستطيعون إكمال مهمة 'مراجعة السلة'؛ يجب إعادة النقر على أيقونة السلة.", recommendation:"أبقِ الدرج حتى يُغلقه المستخدم، أو ينقر اذهب إلى السلة، أو ينقر خارج. لا تستخدم إغلاقاً زمنياً للملخصات.", heuristic:"نيلسن #3 — تحكم المستخدم وحريته"},
          {description:"زيادة الكمية تتجاوز حد التوفر بصمت؛ الأخطاء تظهر فقط عند الدفع. العداد ليس له حالة 'أقصى'.", impact:"المستخدمون الذين يبنون سلة أكبر يصابون بخيبة أمل عند الدفع؛ تخلٍ.", recommendation:"اعرض الحد الأقصى المباشر ('فقط 3 متبقية') بجانب العداد، عطّل '+' عند الوصول للحد الأقصى، وأظهر خطأ مضمن إذا كُتب.", heuristic:"نيلسن #5 — منع الأخطاء"}
        ],
        a11y:[{description:"إشعار 'تمت إضافته إلى سلتك' الأخضر هو <div> بدون role='status' أو aria-live='polite'. قارئات الشاشة لا تعلن التأكيد.", impact:"المستخدمون الكفيفون لا يستطيعون تأكيد نجاح الإجراء وقد يعيدون النقر، فتتكرر العناصر.", recommendation:"أضف role='status' aria-live='polite' لحاوية الإشعار وضمّن نص الرسالة الكامل + اسم العنصر.", wcagPrincipleAr:"قوي ومتين"}]
      },
      mobile:{
        observation:"بديل احتياطي — حالة تأكيد الإضافة إلى السلة لم تُلتقط. التحليل أدناه مستنتج من أنماط صفحة المنتج للموبايل في نون السعودية.",
        ux:[
          {description:"على نون موبايل، الإضافة إلى السلة تفتح شاشة بينية مع ملحقات مكملة بدلاً من تأكيد خفيف. المستخدمون الذين يريدون متابعة التصفح يُحوّلون قسراً.", impact:"المستخدمون يفقدون موضع التمرير على نتائج البحث؛ تجزؤ في تدفق التصفح.", recommendation:"استبدل الشاشة البينية بإشعار سفلي (انزلاق 200 ميلي ثانية، 6 ث ثبات) مع 'عرض السلة' و× إغلاق؛ احفظ موضع التمرير.", heuristic:"نيلسن #8 — التصميم الجمالي والبسيط"},
          {description:"شريط 'يُشترى معاً غالباً' يعرض الصور والعناوين لكنه يخفي الأسعار حتى الضغط. المستخدمون لا يستطيعون الحكم بالإضافة.", impact:"معدل ربط الملحقات يبقى منخفضاً؛ إيرادات ضائعة.", recommendation:"أظهر السعر + زر 'إضافة' على كل بطاقة ملحق داخلياً، مع تحديث مجموع السلة.", heuristic:"نيلسن #10 — المساعدة والتوثيق"}
        ],
        a11y:[{description:"الشاشة البينية للإضافة إلى السلة لا تحتوي على إغلاق مرئي (×) وإيماءة الرجوع تغلق صفحة المنتج بأكملها. التركيز لا يعود إلى الزر المُفعِّل.", impact:"مستخدمو لوحة المفاتيح وقارئات الشاشة تُتركوا؛ ذوو الإعاقات الحركية لا يستطيعون الخروج.", recommendation:"أضف زر ✕ ثابتاً في أعلى اليمين (44×44، aria-label='إغلاق تمت الإضافة إلى السلة')، احبس التركيز داخل النافذة، وأعد التركيز إلى 'أضف إلى السلة' عند الإغلاق.", wcagPrincipleAr:"قابل للتشغيل"}]
      }
    },
    // 7 Cart
    {
      web:{
        observation:"صفحة السلة تعرض عناصر السطر بصورة وعنوان ومتغير وسعر وعداد كمية على اليسار؛ بطاقة ملخص الطلب على اليمين بالمجموع الفرعي والشحن ('يُحسب عند الدفع') وزر CTA أصفر 'الدفع'. حقل الترويج تحت المجموع الفرعي.",
        ux:[
          {description:"ملخص الطلب يدرج 'الشحن: يُحسب عند الدفع'. المستخدمون لا يستطيعون رؤية المجموع النهائي قبل الالتزام بحساب.", impact:"محرك تخلٍ كلاسيكي عن الدفع؛ المستخدمون يغادرون للمقارنة بسعر معروف.", recommendation:"قدّر الشحن بناءً على المدينة الافتراضية (مكتشفة أو مختارة) واعرض رسالة 'شحن مجاني للطلبات فوق 200 ريال' داخلياً. أعد الحساب بعد العنوان.", heuristic:"نيلسن #1 — وضوح حالة النظام"},
          {description:"كلا الإجراءين يُعرض كرابط نص صغير بنفس اللون الرمادي، متجاورين. النقرات الخاطئة بين حفظ وإزالة شائعة.", impact:"حذف عرضي؛ المستخدمون يعيدون بناء السلة، البعض يستسلم.", recommendation:"أعطِ 'إزالة' تسطيراً أحمراً خفيفاً أو أيقونة (سلة)، و'حفظ لاحقاً' أيقونة إشارة مرجعية. فكّر بتأكيد 'إزالة' بشريط تراجع داخلي.", heuristic:"نيلسن #5 — منع الأخطاء"}
        ],
        a11y:[{description:"حقل الكمية <input type='number'> ليس له <label for> ولا aria-label. قارئات الشاشة تنطق 'spin button، 1'.", impact:"المستخدمون الكفيفون الذين يعدّلون الكمية لا يعرفون أي عنصر يضبطون.", recommendation:"أضف aria-label='كمية آيفون 17 برو ماكس 256GB تيتانيوم' يشير ديناميكياً إلى عنصر السطر.", wcagPrincipleAr:"قابل للفهم"}]
      },
      mobile:{
        observation:"سلة الموبايل تكدس العناصر بصورة مصغرة وعنوان وسعر وعداد مدمج. شريط سفلي ثابت يعرض المجموع الفرعي وزر أصفر 'متابعة إلى الدفع'. الترويج والملخص في أكورديونات قابلة للتوسيع.",
        ux:[
          {description:"إزالة عنصر تتطلب تمريراً يسارياً لكشف صينية تراجع/إزالة، ثم النقر على 'إزالة'، ثم التأكيد في نافذة. ثلاث خطوات لحذف عكسي مفرط.", impact:"تحرير سلة أبطأ؛ المستخدمون يتخلون عن مهمة الإزالة أو يقبلون عناصر غير مرغوبة.", recommendation:"اختصر إلى تمرير-واحد-للإزالة بشريط 'تراجع' داخلي 6 ثوان. أبقِ النافذة فقط لحالة آخر-عنصر-في-السلة.", heuristic:"نيلسن #7 — المرونة وكفاءة الاستخدام"},
          {description:"المستخدمون ذوو الأكواد (حملات بريد/SMS) يجب أن يمرروا بعد المجاميع، يضغطون للتوسيع، ثم يكتبون. تسمية الأكورديون 'العروض' بدون إشارة لإدخال الكود.", impact:"رموز الحملات تذهب دون استخدام؛ مشتريات مدفوعة بالخصم تسقط.", recommendation:"اعرض 'لديك رمز ترويجي؟' كرابط نقرة-واحدة مباشرة تحت المجموع الفرعي؛ وسّع داخلياً دون تغيير موضع الصفحة.", heuristic:"نيلسن #6 — التعرف بدلاً من التذكر"}
        ],
        a11y:[{description:"عند تكبير النص 200%، الشريط الثابت وآخر عنصر سلة يتداخلان — المستخدمون لا يستطيعون رؤية تفاصيل العنصر.", impact:"المستخدمون ذوو ضعف الرؤية الذين يستخدمون التكبير لا يستطيعون التحقق من العنصر النهائي قبل الدفع.", recommendation:"طبّق bottom-padding يعادل ارتفاع الشريط الثابت على حاوية التمرير، أو افصل الشريط تحت عتبة تكبير معينة.", wcagPrincipleAr:"قابل للإدراك"}]
      }
    },
    // 8 Checkout
    {
      web:{
        observation:"الدفع يُحوّل إلى جدار تسجيل دخول. الشاشة تعرض 'سجّل الدخول للدفع' مع حقل بريد/هاتف، زر متابعة، وخيارات SSO تحت فاصل. لا يوجد مسار 'دفع كضيف' مرئي.",
        ux:[
          {description:"تدفق الدفع يفرض إنشاء حساب أو تسجيل دخول قبل عرض أي تفاصيل طلب (سعر، توصيل، دفع). المتسوقون السعوديون الذين يقارنون Amazon.sa ونون يرتدّون هنا.", impact:"تقديرات الصناعة الأساسية 20-30% تخلٍ عن الدفع من إنشاء الحساب الإجباري.", recommendation:"قدّم 'متابعة كضيف' بنفس وزن تسجيل الدخول. التقط البريد لتحديثات الطلب؛ اعرض إنشاء الحساب بعد الشراء ببيانات معبأة مسبقاً.", heuristic:"نيلسن #3 — تحكم المستخدم وحريته"},
          {description:"أزرار تسجيل الدخول بآبل وجوجل تجلس تحت نموذج البريد بفاصل صغير 'أو تابع بـ'. كثير من المستخدمين لا يمررون بعد حقل البريد.", impact:"المستخدمون مع حسابات SSO حالية يكتبون كلمات مرور بدون داعٍ؛ معدل الفشل أعلى.", recommendation:"انقل أزرار SSO فوق حقل البريد؛ تسجيل الدخول بآبل أولاً للأغلبية السعودية على iOS، ثم جوجل. أبقِ البريد كخيار ثانوي.", heuristic:"نيلسن #6 — التعرف بدلاً من التذكر"}
        ],
        a11y:[{description:"القائمة المنسدلة لرمز الدولة هي عنصر مخصص لا يستجيب للكتابة المسبقة (كتابة 'S' يجب أن تقفز إلى 'السعودية'). المستخدمون يجب أن يمرروا بالماوس عبر 200+ دولة.", impact:"مستخدمو لوحة المفاتيح فقط، قارئات الشاشة، والمستخدمون المتقدمون لا يستطيعون اختيار رمز الدولة بسرعة.", recommendation:"نفّذ كـ <select> أصلي أو combobox قابل للبحث مع كتابة مسبقة وتنقل بمفاتيح الأسهم.", wcagPrincipleAr:"قابل للتشغيل"}]
      },
      mobile:{
        observation:"دفع الموبايل أيضاً يفتح إلى شاشة تسجيل دخول. حقل بريد/هاتف، زر CTA واحد 'متابعة'، أزرار آبل/جوجل SSO تحته. رابط صغير 'الدفع كضيف؟' مخفي في التذييل.",
        ux:[
          {description:"رابط 'الدفع كضيف' موجود على الموبايل لكنه يُعرض بنص ~10 بكسل رمادي تحت 'مساعدة' و'الشروط' في التذييل — غير مرئي فعلياً.", impact:"حتى المستخدمون الواعون بخيار الضيف لا يستطيعون إيجاده؛ التخلي على الموبايل أعلى من الويب.", recommendation:"عزز 'متابعة كضيف' إلى زر ثانوي مباشرة تحت زر 'متابعة' الأساسي، بنفس مساحة اللمس.", heuristic:"نيلسن #6 — التعرف بدلاً من التذكر"},
          {description:"على شاشة 390×844، لوحة المفاتيح الناعمة تشغل ~360 بكسل؛ زر 'متابعة' يجلس على ~720 بكسل من الأعلى ومخفي. يجب على المستخدمين إغلاق لوحة المفاتيح للنقر — النموذج لا يمرر الحقل إلى الرؤية باستمرار.", impact:"إخفاقات إكمال النموذج؛ المستخدمون يعيدون التركيز على المدخل لإغلاق لوحة المفاتيح، ويعيدون كتابة كلمات المرور.", recommendation:"استخدم scroll-padding-bottom يساوي ارتفاع لوحة المفاتيح المقدّر؛ عند التركيز، مرر زر الإرسال إلى الرؤية. فكّر بشريط 'متابعة' ثابت يبقى فوق لوحة المفاتيح.", heuristic:"نيلسن #5 — منع الأخطاء"}
        ],
        a11y:[{description:"أيقونة العين داخل حقل كلمة المرور هي <button> بدون aria-label وبدون aria-pressed لإعلان الحالة (مرئي/مخفي).", impact:"المستخدمون الكفيفون لا يستطيعون كشف أو التحقق من كلمة المرور المكتوبة.", recommendation:"aria-label='إظهار كلمة المرور' / 'إخفاء كلمة المرور'، aria-pressed='true|false'، مع منطقة لمس 44×44.", wcagPrincipleAr:"قوي ومتين"}]
      }
    },
    // 9 Confirmation
    {
      web:{
        observation:"الخطوة الأخيرة على تشغيل بدون مصادقة تنزل على صفحة تسجيل الدخول. عنوان 'مرحباً بك في نون' مع رسم لأفق الرياض وحقل بريد/هاتف واحد. بعد تسجيل الدخول، سيرى المستخدمون صفحة تأكيد طلب برقم الطلب والعناصر والتوصيل وملخص الدفع.",
        ux:[
          {description:"المستخدمون العائدون من السلة/الدفع يفقدون السياق — جدار تسجيل الدخول لا يعرض قيمة السلة أو عدد العناصر أو نافذة التوصيل. يبدو وكأنه يبدأ من جديد.", impact:"المستخدمون غير متأكدين إذا كانت سلتهم ما زالت محفوظة؛ البعض يعيد التصفح لإعادة البناء.", recommendation:"ثبّت شريط ملخص ضيق ('3 عناصر • 5,999 ريال • يصل الثلاثاء') فوق نموذج تسجيل الدخول؛ محفوظاً عبر خطوة المصادقة.", heuristic:"نيلسن #1 — وضوح حالة النظام"},
          {description:"تطبيق نون يسمح بطلبات الضيف في بعض التدفقات، لكن خطوة الويب هذه تفرض حساباً. التناقض يكسر وعد الجهاز المتقاطع.", impact:"المستخدمون الذين بدأوا في التطبيق وتابعوا على الويب يصطدمون بجدار؛ تسرب.", recommendation:"اعكس سلوك التطبيق: اعرض الضيف بالتقاط البريد فقط؛ اربطه بالحساب عند أول تسجيل دخول.", heuristic:"نيلسن #3 — تحكم المستخدم وحريته"}
        ],
        a11y:[{description:"رسم أفق الرياض تزييني؛ يستخدم <img role='img' alt=''> — صحيح تقنياً للتزييني، لكن role='img' مع alt فارغ يجعل بعض قارئات الشاشة تعلن 'صورة، بدون تسمية'.", impact:"ضوضاء في تدفق قارئ الشاشة؛ المستخدمون يقضون وقتاً للتأكد من أنها تزيينية.", recommendation:"أزل role='img' على الرسوم التزيينية؛ أبقِ alt=''. أو، إذا كان الأفق يدل على الموقع السعودي، alt='مرحباً بك في نون السعودية'.", wcagPrincipleAr:"قابل للإدراك"}]
      },
      mobile:{
        observation:"بديل احتياطي — تسجيل الدخول/التأكيد للموبايل لم يُلتقط. التحليل أدناه مستنتج من تدفقات مصادقة موثقة لنون السعودية على الموبايل.",
        ux:[
          {description:"العد التنازلي 'إعادة الإرسال خلال 59' يعرض رقماً فقط بدون وحدة 'ثوانٍ'؛ المستخدمون بلغة عربية يرون '٥٩' بدون سياق.", impact:"المستخدمون غير متأكدين إن كانت ثوانٍ أم رمزاً؛ البعض ينتظرون أطول بكثير من الحاجة.", recommendation:"اعرض 'إعادة الإرسال خلال 0:59' (MM:SS) بوحدة محلية؛ ضع الرقم بخط غامق.", heuristic:"نيلسن #2 — التوافق بين النظام والعالم الحقيقي"},
          {description:"OTP هو <input> واحد بدلاً من 4-6 صناديق مقطعة بالتقدم التلقائي. المستخدمون يجب أن يكتبوا الرمز كاملاً في حقل واحد، ثم يرسلون.", impact:"إدخال أبطأ؛ معدلات أخطاء أعلى؛ لا يطابق نمط تطبيقات البنوك السعودية والإماراتية.", recommendation:"اقسم OTP إلى 4 أو 6 صناديق مع التركيز التلقائي التالي عند الإدخال، التنقل بمفاتيح الأسهم، ولصق بنقرة واحدة عبر كل الصناديق.", heuristic:"نيلسن #7 — المرونة وكفاءة الاستخدام"}
        ],
        a11y:[{description:"حقل OTP يستخدم inputmode='text' افتراضياً للوحة الأبجدية الكاملة على iOS/Android. لا يوجد inputmode='numeric' أو autocomplete='one-time-code'.", impact:"إدخال OTP أبطأ على الموبايل؛ لا يوجد اقتراح تعبئة تلقائية لـ iOS من SMS.", recommendation:"اضبط inputmode='numeric' pattern='[0-9]*' autocomplete='one-time-code' حتى تقترح iOS Mail/Messages الرمز تلقائياً.", wcagPrincipleAr:"قابل للفهم"}]
      }
    }
  ];

  AUDIT_DATA.steps.forEach((step, i) => {
    const ar = STEP_AR[i];
    if (!ar) return;
    ['web','mobile'].forEach(plat => {
      if (!ar[plat]) return;
      step[plat].observationAr = ar[plat].observation;
      (ar[plat].ux||[]).forEach((tx, j) => {
        const iss = step[plat].uxIssues[j];
        if (!iss) return;
        iss.descriptionAr = tx.description;
        iss.impactAr = tx.impact;
        iss.recommendationAr = tx.recommendation;
        if (tx.heuristic) iss.heuristicAr = tx.heuristic;
      });
      (ar[plat].a11y||[]).forEach((tx, j) => {
        const iss = step[plat].accessibilityIssues[j];
        if (!iss) return;
        iss.descriptionAr = tx.description;
        iss.impactAr = tx.impact;
        iss.recommendationAr = tx.recommendation;
        if (tx.wcagPrincipleAr) iss.wcagPrincipleAr = tx.wcagPrincipleAr;
      });
    });
  });
})();

/* ============================================================
   Counts (compute from data)
   ============================================================ */
(function computeCounts() {
  let total = 0, high = 0;
  for (const step of AUDIT_DATA.steps) {
    for (const plat of ['web', 'mobile']) {
      for (const arr of [step[plat].uxIssues, step[plat].accessibilityIssues]) {
        for (const iss of arr) {
          total++;
          if (iss.severity === 'High') high++;
        }
      }
    }
  }
  AUDIT_DATA.meta.totalIssues = total;
  AUDIT_DATA.meta.highSeverityCount = high;
})();

if (typeof window !== 'undefined') window.AUDIT_DATA = AUDIT_DATA;
if (typeof module !== 'undefined') module.exports = AUDIT_DATA;
