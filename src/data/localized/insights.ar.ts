import type { InsightArticle } from '../../types/insights'

const INSIGHT_IMAGES = {
  brandSystem: '/images/insights/cover-brand-system.svg',
  brandMark: '/images/insights/cover-brand-mark.svg',
  colorPalette: '/images/insights/cover-color-palette.svg',
  typography: '/images/insights/cover-typography.svg',
  stationery: '/images/insights/cover-stationery.svg',
  socialGrid: '/images/insights/cover-social-grid.svg',
  socialPhone: '/images/insights/cover-social-phone.svg',
  contentFlow: '/images/insights/cover-content-flow.svg',
  teamStrategy:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&q=80',
  brandDesign:
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80',
  strategyWorkshop:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80',
  analyticsDashboard:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
} as const

const IMG = {
  brandSystem: '/images/insights/cover-brand-system.svg',
  brandMark: '/images/insights/cover-brand-mark.svg',
  colorPalette: '/images/insights/cover-color-palette.svg',
  typography: '/images/insights/cover-typography.svg',
  stationery: '/images/insights/cover-stationery.svg',
  contentFlow: '/images/insights/cover-content-flow.svg',
  brandDesign:
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop&q=80',
  analyticsDashboard:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop&q=80',
  teamCollab:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=900&fit=crop&q=80',
  officeSpace:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=900&fit=crop&q=80',
  presentation:
    'https://images.unsplash.com/photo-1556760544-74068565f05c?w=1400&h=900&fit=crop&q=80',
  startupMeeting:
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=900&fit=crop&q=80',
  creativeDesk:
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&h=900&fit=crop&q=80',
  socialContent:
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1400&h=900&fit=crop&q=80',
  retailExperience:
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&h=900&fit=crop&q=80',
  mobileProduct:
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&h=900&fit=crop&q=80',
} as const

export const POPULAR_TOPICS_AR = [
  'استراتيجية العلامة',
  'تسويق النمو',
  'تصميم تجربة المستخدم',
  'أسواق الشرق الأوسط وشمال أفريقيا',
  'التحول الرقمي',
  'أنظمة المحتوى',
  'إطلاق المنتجات',
  'هوية القطاع الصحي',
  'نمو التجارة الإلكترونية',
  'التجارة الاجتماعية',
]

export const SHOWCASE_ARTICLE_AR: InsightArticle = {
  slug: 'brand-growth-playbook-mena',
  title: 'دليل نمو العلامة لفرق MENA (قالب تحريري)',
  excerpt:
    'مقال مرجعي طويل يتضمن صورًا وإحصاءات ومعارض وكل أنواع المحتوى، ليكون الهيكل الأساسي لمجلة Salezeus Insights.',
  coverImage: IMG.brandSystem,
  cardImage: IMG.brandMark,
  publishedAt: '2026-07-01',
  readingTimeMinutes: 19,
  author: { name: 'Lina Karim', role: 'رئيسة استراتيجية العلامة' },
  service: 'الهوية البصرية',
  industry: 'التقنية',
  topics: ['استراتيجية العلامة', 'أسواق الشرق الأوسط وشمال أفريقيا', 'أنظمة المحتوى', 'التحول الرقمي'],
  featured: true,
  layout: 'large',
  metaTitle: 'دليل نمو العلامة لفرق MENA | Salezeus Insights',
  metaDescription:
    'قالب تحريري طويل لنمو العلامة في أسواق MENA: الإطار الاستراتيجي، مراحل الإطلاق، نقاط التفاعل الرقمية، والقياس المرتبط بالأداء.',
  keywords: [
    'دليل نمو العلامة',
    'استراتيجية العلامة في MENA',
    'نظام الهوية البصرية',
    'قالب تحريري',
    'تسويق B2B في المنطقة',
    'حوكمة العلامة',
    'محاور المحتوى',
  ],
  content: [
    {
      type: 'paragraph',
      text: 'معظم فرق النمو في منطقة الشرق الأوسط وشمال أفريقيا لا تعاني من نقص أفكار التسويق، بل من غياب الاتساق. الموقع يعد بشيء، وعرض المبيعات يقول شيئًا آخر، ومحتوى السوشيال يلاحق صيحات لا تتراكم نتائجها. هذا الدليل يوضح كيف تبني نظام علامة قابلًا للتوسع عبر القنوات دون فقدان الوضوح.',
    },
    {
      type: 'paragraph',
      text: 'كتبنا هذا النموذج كمرجع عملي لمقالات Salezeus Insights: بطول كافٍ لاختبار الطباعة، وجدول المحتوى، وإيقاع الصور، وجميع كتل المحتوى المستخدمة في النشر الفعلي.',
    },
    { type: 'heading', level: 2, id: 'why-coherence-beats-creativity', text: 'لماذا يتفوق الاتساق على الإبداع المنفصل' },
    {
      type: 'paragraph',
      text: 'الومضات الإبداعية قد تجلب الانتباه لأسبوع، لكن الأنظمة تربح السوق لسنوات. عندما توثّق القواعد اللفظية والبصرية، يقل وقت الجدل ويزيد وقت التنفيذ. والعميل يشعر بهذا الفرق فورًا حتى إن لم يستطع وصفه بدقة.',
    },
    {
      type: 'image',
      src: IMG.teamCollab,
      alt: 'فريق متعدد التخصصات يتعاون حول أجهزة محمولة في مكتب حديث',
      caption: 'أنظمة العلامة تُبنى عندما يجلس المنتج والمبيعات والتسويق على طاولة واحدة.',
      wide: true,
    },
    { type: 'pullquote', text: 'الاتساق ليس تكرارًا، بل ثقة مرئية.', attribution: 'فريق Salezeus التحريري' },
    { type: 'heading', level: 2, id: 'mena-market-context', text: 'ما الذي يميز أسواق المنطقة' },
    {
      type: 'paragraph',
      text: 'جمهور المنطقة متعدد اللغات، يعتمد على الجوال أولًا، ويحمل طبقات ثقافية متباينة. ما ينجح في مدينة قد يفشل في أخرى إذا اختزلنا التوطين في الترجمة فقط. يجب أن يبقى النظام مرنًا بين العربية واللاتينية والمواسم وصيغ القنوات دون كسر القصة الأساسية.',
    },
    {
      type: 'stat',
      value: '68%',
      label: 'اكتشاف عبر الجوال أولًا',
      description: 'معظم أبحاث الشراء B2B وB2C في المنطقة تبدأ من خلاصات الجوال قبل الوصول إلى الصفحة الرئيسية.',
    },
    {
      type: 'gallery',
      images: [
        {
          src: IMG.socialContent,
          alt: 'شبكة محتوى سوشيال على هاتف ذكي',
          caption: 'غالبًا تكون الخلاصة الاجتماعية أول نقطة تفاعل مع العلامة، لا الموقع.',
        },
        {
          src: IMG.mobileProduct,
          alt: 'واجهة تطبيق جوال معروضة على هاتف',
          caption: 'واجهة المنتج يجب أن ترث نفس النظام البصري لحملات التسويق.',
        },
      ],
    },
    { type: 'heading', level: 3, id: 'global-vs-local', text: 'طموح عالمي بملاءمة محلية' },
    {
      type: 'paragraph',
      text: 'يعتمد كثير من القوالب العالمية على لغة واحدة وكتب علامة PDF ثابتة وتفكير حملاتي قصير المدى. النسخة المناسبة للمنطقة تضيف هرمية ثنائية اللغة، ومكتبات مكونات حية، وإطلاقًا يقوده النظام، وأصولًا مرنة للنشر الأسبوعي.',
    },
    {
      type: 'note',
      variant: 'info',
      title: 'ملاحظة تحريرية',
      text: 'استخدم هذا النوع من الملاحظات لعرض المنهجية أو المراجع أو السياق دون كسر تدفق السرد الرئيسي.',
    },
    { type: 'heading', level: 2, id: 'five-layer-framework', text: 'إطار نمو العلامة بخمس طبقات' },
    {
      type: 'paragraph',
      text: 'كل علامة ناجحة استداميًا نعمل معها تمر بخمس طبقات. تجاهل طبقة واحدة يعني تكلفة لاحقة على شكل إعادة عمل، أو أصول مشتتة، أو حملات أقل من المتوقع.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'التموضع: من تخدم، ولماذا تربح، وما الذي ترفض أن تكونه.',
        'الرسائل: المحاور، نقاط الإثبات، والسرديات حسب الشريحة.',
        'الهوية البصرية: نظام الشعار والألوان والطباعة وقواعد التخطيط.',
        'حزم القنوات: قوالب للويب والسوشيال والمبيعات والمطبوع.',
        'الحوكمة: طقوس مراجعة خفيفة تمنع الانحراف مبكرًا.',
      ],
    },
    {
      type: 'image',
      src: IMG.brandDesign,
      alt: 'مصمم يضبط الطباعة والتخطيط على شاشة كبيرة',
      caption: 'الطبقة الثالثة لا تعمل جيدًا إلا إذا حُسمت الطبقتان الأولى والثانية.',
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'إتمام ورشة التموضع مع القيادة',
        'توثيق معمارية الرسائل',
        'تطبيق الهوية على القوالب الأساسية',
        'نشر حزم القنوات للفرق الداخلية',
        'جدولة تدقيق علامة ربع سنوي',
      ],
    },
    { type: 'heading', level: 3, id: 'rollout-phases', text: 'مسار إطلاق واقعي' },
    {
      type: 'list',
      ordered: true,
      items: [
        'الاكتشاف: مقابلات، تدقيق منافسين، رسم جمهور، ومراجعة القنوات.',
        'الاستراتيجية: تموضع، معمارية رسائل، واتجاهات إبداعية.',
        'التصميم: بناء الهوية، مكتبة المكونات، ونماذج التطبيق.',
        'التفعيل: الموقع، حزم السوشيال، مواد المبيعات، والتدريب الداخلي.',
        'التحسين: مراجعة الأداء، تطوير الأصول، وجدولة الحوكمة.',
      ],
    },
    { type: 'heading', level: 2, id: 'digital-touchpoints', text: 'التصميم لكل نقطة تفاعل رقمية' },
    {
      type: 'paragraph',
      text: 'تُختبر العلامة خلال أجزاء من الثانية: صورة إعلان مصغرة، عنوان بريد، حالة فارغة في التطبيق، فاتورة PDF. المطلوب أن تبدو كل هذه الأسطح من نفس الشركة دون نسخ نفس التصميم حرفيًا.',
    },
    {
      type: 'gallery',
      images: [
        { src: IMG.brandSystem, alt: 'تخطيط نظام علامة مع كتل ألوان وطباعة', caption: 'فكر بالنظام قبل الشاشة.' },
        { src: IMG.typography, alt: 'نموذج طباعة يوضح التدرج الهرمي', caption: 'الطباعة تحمل صوت العلامة مثل النص تمامًا.' },
        { src: IMG.contentFlow, alt: 'مخطط تدفق محتوى للتحرير', caption: 'التقويم التحريري يجب أن ينبني على محاور محتوى واضحة.' },
      ],
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'واجهة الموقع وقيمة العلامة الأساسية',
        'صفحات الخدمات أو المنتجات',
        'دراسات الحالة وأقسام الإثبات',
        'قوالب السوشيال للثابت والكاروسيل والريلز',
        'عرض مبيعات أساسي ونسخ ملخصة',
      ],
    },
    {
      type: 'image',
      src: IMG.presentation,
      alt: 'فريق يعرض استراتيجية العلامة على شاشة كبيرة أمام أصحاب المصلحة',
      caption: 'تأييد أصحاب القرار يسرّع الإطلاق أكثر من أي ملف تصميم.',
      wide: true,
    },
    {
      type: 'callout',
      title: 'قاعدة عملية',
      text: 'إذا كان فريقك يحتاج أكثر من 20 دقيقة لإنتاج منشور متوافق مع العلامة، فالنظام ما زال معقدًا. بسّط القوالب قبل إضافة مزيد من الإرشادات.',
    },
    { type: 'heading', level: 2, id: 'measure-what-matters', text: 'قِس ما يهم القيادة فعلًا' },
    {
      type: 'paragraph',
      text: 'يجب أن يرتبط عمل العلامة بمؤشرات موجودة أصلًا في لوحات القيادة: فرص مؤهلة، معدل إغلاق، مدة الدورة البيعية، فترة استرداد CAC، والاحتفاظ؛ وليس مقاييس جمالية شكلية.',
    },
    {
      type: 'stat',
      value: '2.4×',
      label: 'تسارع دورة العروض',
      description: 'الفرق التي تعتمد معمارية رسائل موحدة تقل لديها جولات المراجعة في مواد المبيعات.',
    },
    {
      type: 'paragraph',
      text: 'تابع مؤشرات تشغيلية لا شكلية: معدل الوارد المؤهل بدل الإعجابات، طول دورة البيع بدل الانطباعات، معدل ربح العروض بدل الجوائز، واعتماد القوالب بدل عدد تنويعات الشعار.',
    },
    {
      type: 'note',
      variant: 'tip',
      title: 'نصيحة SEO تحريرية',
      text: 'استخدم عناوين H2 وصفية بكلمات مفتاحية طبيعية، واكتب نصًا بديلًا لكل صورة، وحافظ على الوصف المختصر ضمن 160 حرفًا.',
    },
    { type: 'heading', level: 3, id: 'token-example', text: 'مثال على نظام Tokens' },
    {
      type: 'code',
      language: 'css',
      code: `/* Salezeus-style semantic tokens */
:root {
  --color-primary: #3258A4;
  --color-accent: #F0B80D;
  --color-surface: #F8F7F4;
  --color-text: #040508;
  --font-heading: 'PP Neue Montreal', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius-card: 12px;
}`,
    },
    { type: 'heading', level: 2, id: 'common-mistakes', text: 'سبعة أخطاء نراها في كل تدقيق' },
    {
      type: 'list',
      ordered: true,
      items: [
        'البدء بتصميم الشعار قبل حسم التموضع.',
        'إنتاج دليل علامة ضخم لا يقرأه أحد.',
        'السماح لكل وكالة بإضافة لهجة بصرية جديدة.',
        'تأجيل متطلبات العربية حتى أسبوع الإطلاق.',
        'تعامل السوشيال كقناة ثانوية لا كنظام.',
        'إهمال تمكين فرق المبيعات ضمن خطة الإطلاق.',
        'عدم جدولة تدقيق ربع سنوي للانحراف.',
      ],
    },
    {
      type: 'image',
      src: IMG.creativeDesk,
      alt: 'مدير إبداعي يراجع لوحات العلامة على المكتب',
      caption: 'التدقيق المبكر يكشف الانحراف قبل أن يلاحظه العملاء.',
    },
    { type: 'heading', level: 2, id: 'physical-and-retail', text: 'عندما تغادر العلامة الشاشة' },
    {
      type: 'paragraph',
      text: 'التغليف واللافتات وأجنحة الفعاليات والزي ليست عناصر إضافية؛ إنها لحظات ثقة عالية. حتى الهوية الرقمية تحتاج مواصفات طباعة ومسافات وملفات إنتاج جاهزة.',
    },
    {
      type: 'gallery',
      images: [
        { src: IMG.stationery, alt: 'نموذج قرطاسية بعلامة موحدة', caption: 'قوالب القرطاسية تحافظ على اتساق الشركاء.' },
        { src: IMG.retailExperience, alt: 'مساحة بيع بتجربة علامة متكاملة', caption: 'المساحة الفعلية يجب أن تتبع نفس منطق الألوان والهوية.' },
      ],
    },
    {
      type: 'image',
      src: IMG.officeSpace,
      alt: 'مساحة عمل مكتبية بتطبيقات علامة هادئة',
      wide: true,
      caption: 'الهوية البيئية تمتد بالعلامة إلى التجربة اليومية.',
    },
    { type: 'heading', level: 2, id: 'implementation-priorities', text: 'أولويات التنفيذ للربع القادم' },
    {
      type: 'list',
      ordered: true,
      items: [
        'تنفيذ جلسة مواءمة تموضع لمدة 90 دقيقة',
        'نشر محاور الرسائل في مساحة عمل مشتركة',
        'إطلاق خمس قوالب أساسية (ويب، عرض، سوشيال، بريد، One-pager)',
        'تدريب الفرق المواجهة للعملاء على نبرة العلامة',
        'اعتماد مراجعة تحليلية شهرية للمحتوى وخط الأنابيب',
        'حجز تدقيق انحراف العلامة في الربع الثالث',
      ],
    },
    { type: 'pullquote', text: 'أفضل أنظمة العلامة تبدو بديهية بعد تنفيذها، وهذا هو الهدف.' },
    { type: 'heading', level: 2, id: 'conclusion', text: 'الخلاصة: ابنِ بنية تحتية لا زخارف' },
    {
      type: 'paragraph',
      text: 'إذا تقرأ هذا كنموذج تحريري، فقد شاهدت جميع أنواع الكتل التي ندعمها: عناوين، معارض، إحصاءات، ملاحظات، كود، قوائم، وصور عريضة. بدّل النصوص، غيّر الصور، وحافظ على الإيقاع: مقدمة، دليل، إطار، تطبيق، قياس، أخطاء، أولويات، خاتمة.',
    },
    {
      type: 'paragraph',
      text: 'عندما تكون جاهزًا للانتقال من الدليل إلى التنفيذ، ابدأ بورشة تموضع. كل ما يأتي بعدها يصبح أسرع وأقل كلفة وأسهل دفاعًا أمام الإدارة.',
    },
    {
      type: 'image',
      src: IMG.analyticsDashboard,
      alt: 'لوحة تحليلات بنمو المؤشرات الرئيسية',
      caption: 'اختتم بالأثر: اربط عمل العلامة بالأرقام التي يتابعها صانع القرار يوميًا.',
      wide: true,
    },
    {
      type: 'callout',
      title: 'جاهز لبناء نظام علامتك؟',
      text: 'تساعد Salezeus الفرق في تركيا وسوريا وعبر المنطقة على إطلاق برامج الهوية والويب والنمو من أساس استراتيجي واحد. البداية تكون بمحادثة واضحة، لا بلوحة مزاجية.',
    },
  ],
}

const brandIdentityContentAr: InsightArticle['content'] = [
  {
    type: 'paragraph',
    text: 'هوية العلامة ليست تحديث شعار. بالنسبة للشركات النامية في أسواق المنطقة، الهوية هي البنية التحتية للثقة، وتقصير دورات البيع، وتوحيد القنوات. عندما يكون التموضع ضبابيًا، تُنفق الفرق أكثر لتشرح نفسها. وعندما تصبح الهوية واضحة، يعمل التسويق بكفاءة أعلى وميزانية أقل.',
  },
  { type: 'heading', level: 2, id: 'why-brand-identity-matters', text: 'لماذا هوية العلامة حاسمة لنمو B2B' },
  {
    type: 'paragraph',
    text: 'الهوية المتماسكة تقلل إرهاق القرار داخليًا وتقلل احتكاك التعرف خارجيًا. المنتج والمبيعات والتسويق ينفذون أسرع عندما تكون القواعد موثقة. والعملاء يثقون أسرع عندما تتكرر الإشارات في الموقع والعروض والإعلانات وخدمة ما بعد البيع.',
  },
  {
    type: 'image',
    src: INSIGHT_IMAGES.teamStrategy,
    alt: 'فريق قيادي يراجع استراتيجية العلامة في ورشة عمل',
    caption: 'ينجح مشروع الهوية عندما تعمل الاستراتيجية والتصميم في مساحة واحدة.',
    wide: true,
  },
  {
    type: 'pullquote',
    text: 'العلامة ليست ما تقوله عن نفسك، بل ما يتذكره الناس عنك عندما تغادر الغرفة.',
    attribution: 'فريق الاستراتيجية في Salezeus',
  },
  { type: 'heading', level: 2, id: 'measurable-business-value', text: 'القيمة التجارية القابلة للقياس لهوية قوية' },
  {
    type: 'stat',
    value: '3.2×',
    label: 'ارتفاع التذكّر غير المساعد',
    description: 'أنظمة الهوية المتسقة تتفوق على المرئيات المبعثرة في دراسات التذكّر داخل أسواق المنطقة.',
  },
  {
    type: 'paragraph',
    text: 'العائد نادرًا ما يظهر فورًا، بل يتراكم عبر كل نقطة تفاعل: عروض تُغلق أسرع، حملات تحتاج شرحًا أقل، وتجربة منتج تشعر بالاتساق من أول شاشة. لذلك يجب التعامل مع الهوية كأصل إيرادي، لا كمهمة تصميم.',
  },
  {
    type: 'gallery',
    images: [
      {
        src: INSIGHT_IMAGES.brandDesign,
        alt: 'مصمم يبني نظام هوية بصرية على الشاشة',
        caption: 'الأنظمة تتفوق دائمًا على الأصول المنفردة.',
      },
      {
        src: INSIGHT_IMAGES.colorPalette,
        alt: 'لوحة ألوان علامة مع نموذج طباعة',
        caption: 'الألوان والطباعة تحملان معنى أكبر مما تتوقعه معظم الفرق.',
      },
    ],
  },
  { type: 'heading', level: 3, id: 'rebrand-vs-refresh', text: 'إعادة علامة أم تحديث بصري؟' },
  {
    type: 'paragraph',
    text: 'التحديث البصري يحافظ على رصيد العلامة القائم خلال أسابيع وباضطراب أقل، وهو مناسب عندما لا يزال ملاءمة السوق جيدة. أما إعادة بناء العلامة فتعيد تأسيس الاستراتيجية عبر أشهر وتتطلب مواءمة أعمق، وتناسب التحولات الجوهرية في التموضع.',
  },
  {
    type: 'note',
    variant: 'tip',
    title: 'إشارة SEO والرسائل',
    text: 'إذا كانت الصفحة الرئيسية وLinkedIn وعرض المبيعات تصف الشركة بثلاث لغات مختلفة، فإن محركات البحث والمشتري يتلقّون إشارات متضاربة. وحّد الرسائل قبل توسيع المحتوى.',
  },
  { type: 'heading', level: 2, id: 'building-identity-system', text: 'كيف تبني نظام هوية يعيش طويلًا' },
  {
    type: 'list',
    ordered: true,
    items: [
      'عرّف التموضع والجمهور بالبيانات لا بالافتراضات.',
      'حوّل الاستراتيجية إلى مبادئ لفظية وبصرية واضحة.',
      'صمم مكونات مرنة بدل قوالب جامدة لمرة واحدة.',
      'وثّق قواعد استخدام يقرأها الفريق فعلًا.',
      'دقّق نقاط التفاعل ربع سنويًا وصحح الانحراف مبكرًا.',
    ],
  },
  {
    type: 'list',
    ordered: false,
    items: ['بيان تموضع واضح', 'نبرة صوت موثقة', 'مكتبة تصميم قائمة على المكونات', 'حوكمة متعددة القنوات'],
  },
  { type: 'heading', level: 3, id: 'identity-rollout-phases', text: 'مراحل مشاريع الهوية غالبًا' },
  {
    type: 'list',
    ordered: true,
    items: [
      'الاكتشاف: مقابلات أصحاب المصلحة وتدقيق المنافسين ورسم الجمهور.',
      'الاستراتيجية: التموضع ومعمارية الرسائل والاتجاه الإبداعي.',
      'التصميم: بناء الهوية والنظام ونماذج التطبيق.',
      'الإطلاق: خطة التنفيذ والتدريب الداخلي وقياس الأداء.',
    ],
  },
  {
    type: 'image',
    src: INSIGHT_IMAGES.strategyWorkshop,
    alt: 'استراتيجي علامة يدير ورشة تموضع باستخدام ملاحظات لاصقة',
    caption: 'الورش الجيدة تكشف اللغة التي يجب أن يسمعها السوق منك.',
  },
  {
    type: 'callout',
    title: 'ابدأ بوضوح استراتيجي',
    text: 'أغلى مشاريع الهوية تفشل في مرحلة الموجز. استثمر أولًا في التموضع، وستصبح المخرجات البصرية أسرع وأقل كلفة وأسهل قياسًا.',
  },
  {
    type: 'code',
    language: 'css',
    code: `/* مثال: تخصيص العلامة عبر Tokens في الويب */
:root {
  --brand-primary: #3258A4;
  --brand-accent: #F0B80D;
  --brand-surface: #F8F7F4;
  --brand-text: #040508;
  --brand-radius: 12px;
}`,
  },
  { type: 'heading', level: 2, id: 'key-takeaways', text: 'أهم الخلاصات لفرق القيادة' },
  {
    type: 'list',
    ordered: false,
    items: [
      'تعامل مع هوية العلامة كبنية تحتية طويلة المدى لا كمشروع تصميم مؤقت.',
      'وحّد النظام اللفظي والبصري قبل توسيع الإعلام المدفوع أو المحتوى.',
      'قِس التذكّر والتحويل وطول دورة البيع، لا الذوق الجمالي فقط.',
      'اعتمد إرشادات خفيفة يمكن للفريق تطبيقها يوميًا.',
    ],
  },
  {
    type: 'image',
    src: INSIGHT_IMAGES.analyticsDashboard,
    alt: 'لوحة تحليلات تسويقية تُظهر نمو أداء الحملات',
    caption: 'تطوير الهوية يجب أن يرتبط بمؤشرات يتابعها المديرون أصلًا.',
    wide: true,
  },
  {
    type: 'paragraph',
    text: 'هوية علامتك ليست مشروع مظهر. إنها من الأصول القليلة التي تزيد قيمتها مع الاستمرارية. إذا كنت تقيّم إعادة بناء أو تحديثًا بصريًا، ابدأ بتدقيق التموضع ثم صمم عن قصد.',
  },
]

export const INSIGHT_ARTICLES_AR: InsightArticle[] = [
  SHOWCASE_ARTICLE_AR,
  {
    slug: 'why-brand-identity-is-your-most-valuable-asset',
    title: 'لماذا تُعد هوية علامتك أهم أصل تملكه',
    excerpt:
      'الهوية ليست ملف شعار. تعرّف كيف يدفع نظام هوية استراتيجي الثقة والتذكر والإيراد لعلامات B2B في المنطقة.',
    coverImage: INSIGHT_IMAGES.brandSystem,
    cardImage: INSIGHT_IMAGES.brandMark,
    publishedAt: '2026-06-18',
    readingTimeMinutes: 11,
    author: { name: 'Lina Karim', role: 'رئيسة استراتيجية العلامة' },
    service: 'الهوية البصرية',
    industry: 'التقنية',
    topics: ['استراتيجية العلامة', 'التحول الرقمي'],
    layout: 'large',
    metaTitle: 'لماذا هوية العلامة أهم أصولك | Salezeus',
    metaDescription:
      'دليل عملي يوضح لماذا تعد هوية العلامة أصلًا إيراديًا في أسواق المنطقة، وكيف تبني نظامًا قابلًا للقياس والتوسع.',
    keywords: ['هوية العلامة', 'استراتيجية العلامة في MENA', 'إعادة علامة', 'دليل العلامة', 'هوية B2B', 'نظام بصري'],
    content: brandIdentityContentAr,
  },
  {
    slug: 'hidden-roi-of-content-marketing-mena',
    title: 'العائد الخفي من اتساق تسويق المحتوى في منطقة MENA',
    excerpt:
      'الجمهور الإقليمي يكافئ الاتساق أكثر من كثافة النشر. هكذا تتراكم نتائج المحتوى عندما يُدار التوطين بوعي.',
    coverImage: INSIGHT_IMAGES.contentFlow,
    publishedAt: '2026-06-10',
    readingTimeMinutes: 8,
    author: { name: 'Omar Haddad', role: 'مدير التسويق' },
    service: 'التسويق',
    industry: 'التجارة الإلكترونية',
    topics: ['تسويق النمو', 'أسواق الشرق الأوسط وشمال أفريقيا', 'أنظمة المحتوى'],
    layout: 'standard',
    content: [
      {
        type: 'paragraph',
        text: 'يفشل تسويق المحتوى في المنطقة لأسباب متكررة: ترجمة بلا توطين، نشر غير منتظم، وحملات منفصلة عن حقيقة المنتج.',
      },
      { type: 'heading', level: 2, id: 'consistency-beats-volume', text: 'الاتساق يتفوق على الكثافة' },
      {
        type: 'paragraph',
        text: 'الإيقاع المستمر مع محاور واضحة يتفوق على دفعات متقطعة عالية الإنتاج. الجمهور يتعلم ماذا يتوقع من علامتك.',
      },
      { type: 'pullquote', text: 'التوطين ليس تبديل لغة، بل ملاءمة ثقافية تخدم هدفًا تجاريًا.' },
    ],
  },
  {
    slug: 'five-signs-your-business-is-ready-for-a-rebrand',
    title: '5 إشارات تؤكد أن نشاطك جاهز لإعادة بناء العلامة',
    excerpt:
      'ليس كل تحديث بصري يحتاج إعادة علامة. هذه الإشارات الخمس تساعدك على قرار التموضع الصحيح في الوقت الصحيح.',
    coverImage: INSIGHT_IMAGES.typography,
    publishedAt: '2026-05-28',
    readingTimeMinutes: 6,
    author: { name: 'Lina Karim', role: 'رئيسة استراتيجية العلامة' },
    service: 'الهوية البصرية',
    industry: 'الشركات الناشئة',
    topics: ['استراتيجية العلامة', 'إطلاق المنتجات'],
    layout: 'compact',
    content: [
      {
        type: 'paragraph',
        text: 'إعادة العلامة تصبح مكلفة عندما تأتي كرد فعل. أفضل المشاريع تبدأ بتحول استراتيجي واضح، لا ملل بصري.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'تطور عرضك لكن قصتك بقيت كما هي.',
          'دورة البيع تطول لأن العملاء يسيئون فهم فئتك.',
          'تتنافس بالسعر رغم امتلاكك قدرات عالية.',
          'الفرق الداخلية تستخدم لغة متضاربة في العروض والتجارب.',
          'تدخل سوقًا جديدًا بتوقعات مختلفة جذريًا.',
        ],
      },
    ],
  },
  {
    slug: 'designing-trust-for-healthcare-brands',
    title: 'تصميم الثقة لعلامات الرعاية الصحية في القنوات الرقمية',
    excerpt:
      'المريض يقرر خلال ثوانٍ. يجب أن تتعايش المصداقية السريرية مع الدفء الإنساني في كل واجهة ونقطة تواصل.',
    coverImage: INSIGHT_IMAGES.brandMark,
    publishedAt: '2026-05-14',
    readingTimeMinutes: 9,
    author: { name: 'Sara Nour', role: 'قائدة تجربة المستخدم' },
    service: 'تطوير الويب',
    industry: 'الرعاية الصحية',
    topics: ['هوية القطاع الصحي', 'تصميم تجربة المستخدم'],
    layout: 'horizontal',
    content: [
      {
        type: 'paragraph',
        text: 'علامات الرعاية الصحية تتحمل عبئًا أعلى من الإثبات. التصميم يجب أن يخفف القلق، ويوضح الخطوة التالية، ويحافظ على الإتاحة دون التضحية بالجودة.',
      },
      { type: 'heading', level: 2, id: 'trust-signals', text: 'إشارات الثقة التي تعمل فعليًا' },
      {
        type: 'paragraph',
        text: 'الاعتمادات مهمة، لكن الوضوح أهم. يبحث المرضى عن لغة بسيطة، وسياسات ظاهرة، وتجربة هادئة تحت الضغط.',
      },
    ],
  },
  {
    slug: 'social-commerce-playbook-fashion',
    title: 'دليل عملي للتجارة الاجتماعية لعلامات الأزياء',
    excerpt:
      'من الإلهام إلى الشراء، تفوز علامات الأزياء عندما يعمل المحتوى والمجتمع والتحويل ضمن نظام واحد متماسك.',
    coverImage: INSIGHT_IMAGES.socialGrid,
    publishedAt: '2026-05-02',
    readingTimeMinutes: 7,
    author: { name: 'Maya El-Amin', role: 'استراتيجية السوشيال ميديا' },
    service: 'السوشيال ميديا',
    industry: 'الأزياء',
    topics: ['التجارة الاجتماعية', 'نمو التجارة الإلكترونية'],
    layout: 'standard',
    content: [
      {
        type: 'paragraph',
        text: 'جمهور الأزياء يكتشف عبر السوشيال ويقرر عبر التجربة. الفجوة بين الإلهام والشراء هي المكان الذي تفقد فيه العلامات كثيرًا من الإيراد.',
      },
    ],
  },
  {
    slug: 'medical-tourism-websites-that-convert',
    title: 'مواقع السياحة العلاجية التي تحوّل دون فقدان المصداقية',
    excerpt:
      'المريض الدولي يحتاج ثقة قبل الحجز. الهيكل والإثبات والوضوح متعدد اللغات أقوى من الدعوات العدوانية للإجراء.',
    coverImage: INSIGHT_IMAGES.contentFlow,
    publishedAt: '2026-04-22',
    readingTimeMinutes: 10,
    author: { name: 'Sara Nour', role: 'قائدة تجربة المستخدم' },
    service: 'تطوير الويب',
    industry: 'السياحة العلاجية',
    topics: ['هوية القطاع الصحي', 'تصميم تجربة المستخدم', 'أسواق الشرق الأوسط وشمال أفريقيا'],
    layout: 'large',
    content: [
      {
        type: 'paragraph',
        text: 'مشتري السياحة العلاجية يبحث عبر حدود ولغات وأنظمة تنظيمية مختلفة. وغالبًا يكون موقعك هو الانطباع الطبي الأول لديه.',
      },
    ],
  },
  {
    slug: 'restaurant-branding-beyond-the-menu',
    title: 'هوية المطاعم أبعد من قائمة الطعام',
    excerpt:
      'علامات الضيافة القابلة للتوسع تتعامل مع الأجواء ولغة الخدمة ونقاط التفاعل الرقمية كتجربة واحدة لا مشاريع منفصلة.',
    coverImage: INSIGHT_IMAGES.socialGrid,
    publishedAt: '2026-04-08',
    readingTimeMinutes: 5,
    author: { name: 'Omar Haddad', role: 'مدير التسويق' },
    service: 'الهوية البصرية',
    industry: 'المطاعم',
    topics: ['استراتيجية العلامة'],
    layout: 'compact',
    content: [
      {
        type: 'paragraph',
        text: 'الضيف يتذكر إحساس التجربة بعد أن ينسى اسم الطبق. أنظمة العلامة تساعد الفرق على تقديم هذا الإحساس باتساق يومي.',
      },
    ],
  },
  {
    slug: 'real-estate-digital-presence-2026',
    title: 'كيف يبدو الحضور الرقمي العقاري الفاخر في 2026',
    excerpt:
      'تسويق العقارات عالية القيمة يحتاج جودة تحريرية وبيانات دقيقة وتجارب جوال تحترم رحلة المشتري.',
    coverImage: INSIGHT_IMAGES.stationery,
    publishedAt: '2026-03-25',
    readingTimeMinutes: 8,
    author: { name: 'Karim Saleh', role: 'مستشار أعمال' },
    service: 'الاستشارات التجارية',
    industry: 'العقارات',
    topics: ['التحول الرقمي'],
    layout: 'standard',
    content: [
      {
        type: 'paragraph',
        text: 'مشتري العقار يقارن المطورين خلال دقائق. حضورك الرقمي يجب أن ينقل الجودة قبل أول زيارة ميدانية.',
      },
    ],
  },
  {
    slug: 'manufacturing-websites-b2b-clarity',
    title: 'مواقع التصنيع تحتاج وضوح B2B لا ضجيجًا مؤسسيًا',
    excerpt:
      'المشتري الصناعي يريد المواصفات والإثبات وطريقًا سريعًا للتواصل. احذف الحشو وصمّم لصانع القرار.',
    coverImage: INSIGHT_IMAGES.stationery,
    publishedAt: '2026-03-12',
    readingTimeMinutes: 6,
    author: { name: 'Karim Saleh', role: 'مستشار أعمال' },
    service: 'تطوير الويب',
    industry: 'التصنيع',
    topics: ['التحول الرقمي', 'تصميم تجربة المستخدم'],
    layout: 'horizontal',
    content: [
      {
        type: 'paragraph',
        text: 'الكثير من مواقع التصنيع تخفي المعلومات الحاسمة خلف عبارات عامة. ابدأ بالقدرات والامتثال ومسار التواصل المباشر.',
      },
    ],
  },
  {
    slug: 'mobile-app-onboarding-patterns',
    title: 'أنماط تهيئة تطبيقات الجوال التي تحترم وقت المستخدم',
    excerpt:
      'أفضل تهيئة هي التي تبدو غير مرئية: خطوات أقل، صلاحيات تدريجية، وقيمة واضحة قبل طلب الالتزام.',
    coverImage: INSIGHT_IMAGES.contentFlow,
    publishedAt: '2026-02-28',
    readingTimeMinutes: 7,
    author: { name: 'Sara Nour', role: 'قائدة تجربة المستخدم' },
    service: 'تطبيقات الجوال',
    industry: 'التقنية',
    topics: ['تصميم تجربة المستخدم', 'إطلاق المنتجات'],
    layout: 'standard',
    content: [
      {
        type: 'paragraph',
        text: 'يهجر المستخدمون التطبيقات التي تطلب الكثير مبكرًا. التهيئة الناجحة تُظهر النتيجة أولًا، لا تشرح الميزات فقط.',
      },
    ],
  },
  {
    slug: 'education-brands-digital-first-enrollment',
    title: 'كيف تربح العلامات التعليمية بالتسجيل الرقمي أولًا',
    excerpt:
      'الطلاب وأولياء الأمور يبحثون رقميًا أولًا. رحلة التسجيل يجب أن تكون موجهة وشفافة وإنسانية.',
    coverImage: INSIGHT_IMAGES.brandMark,
    publishedAt: '2026-02-14',
    readingTimeMinutes: 6,
    author: { name: 'Maya El-Amin', role: 'استراتيجية السوشيال ميديا' },
    service: 'التسويق',
    industry: 'التعليم',
    topics: ['أنظمة المحتوى', 'تسويق النمو'],
    layout: 'compact',
    content: [
      {
        type: 'paragraph',
        text: 'ينجح تسويق التعليم عندما تتعامل المؤسسة مع التسجيل كمشكلة تصميم خدمة، لا كمهمة توزيع كتيبات.',
      },
    ],
  },
  {
    slug: 'tourism-campaigns-that-feel-local',
    title: 'حملات سياحية بطابع محلي وقابلية توسع عالمي',
    excerpt:
      'تنجح علامات الوجهات عندما يحترم السرد المكان والثقافة والموسمية بدل الاعتماد على صور عامة بلا روح.',
    coverImage: INSIGHT_IMAGES.stationery,
    publishedAt: '2026-01-30',
    readingTimeMinutes: 8,
    author: { name: 'Omar Haddad', role: 'مدير التسويق' },
    service: 'التسويق',
    industry: 'السياحة',
    topics: ['أسواق الشرق الأوسط وشمال أفريقيا', 'تسويق النمو'],
    layout: 'large',
    content: [
      {
        type: 'paragraph',
        text: 'جمهور السفر يتفاعل مع التفاصيل الحقيقية. الحملات التي تسمي التجارب الفعلية تتفوق على رسائل الجنة العامة.',
      },
    ],
  },
]
