import type { ServiceReview } from '../../types/services'

/** Short CC0 speech sample for voice-note review demos */
const VOICE_SAMPLE =
  'https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6c/En-us-do_you_speak_english.ogg/En-us-do_you_speak_english.ogg.mp3'

export const SERVICE_REVIEWS_AR: Record<string, ServiceReview[]> = {
  branding: [
    {
      type: 'text',
      quote:
        'نظام الهوية الذي بنوه أخيرًا جعل علامتنا تبدو فاخرة في كل نقطة تواصل، من التغليف إلى إنستغرام. فريقنا يستخدم الدليل يوميًا.',
      author: 'Layla Mansour',
      company: 'Verde Cosmetics',
      role: 'المؤسسة',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'voice',
      voiceNoteUrl: VOICE_SAMPLE,
      voiceDuration: '0:38',
      author: 'Dina Asaad',
      company: 'Luxe Events',
      role: 'المديرة الإبداعية',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'text',
      quote:
        'بدأنا بتحديث شعار، وانتهينا بمنظومة هوية كاملة يمكن لشركاء الامتياز تطبيقها فعلاً. واضحة، عملية، وجميلة.',
      author: 'Mohammed Al-Rashid',
      company: 'TechVenture ME',
      role: 'المدير التنفيذي',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
    },
  ],
  marketing: [
    {
      type: 'text',
      quote:
        'إبداعات الحملة لديهم ضاعفت معدل النقر في الشهر الأول. كل أصل تسويقي كان متسقًا مع العلامة وجاهزًا للقنوات التي نعمل عليها.',
      author: 'Nour Khalil',
      company: 'Bloom Retail',
      role: 'مديرة التسويق',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'voice',
      voiceNoteUrl: VOICE_SAMPLE,
      voiceDuration: '0:42',
      author: 'Tariq Mansour',
      company: 'FoodHub Group',
      role: 'مدير العلامة',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'text',
      quote:
        'أسبوع الإطلاق كان سلسًا لأن الحزم الإبداعية كانت مرنة؛ استطعنا التكييف للبريد والإعلانات والمتجر دون إعادة تصميم من الصفر.',
      author: 'Sara Haddad',
      company: 'Nova Health',
      role: 'قائدة المنتج',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
    },
  ],
  'social-media': [
    {
      type: 'text',
      quote:
        'تضاعف تفاعلنا ثلاث مرات بعد إعادة بناء محاور المحتوى والقوالب. النشر أصبح متسقًا بدل الفوضى.',
      author: 'Tariq Mansour',
      company: 'FoodHub Group',
      role: 'مدير العلامة',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'voice',
      voiceNoteUrl: VOICE_SAMPLE,
      voiceDuration: '0:35',
      author: 'Dina Asaad',
      company: 'Luxe Events',
      role: 'المؤسسة',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'text',
      quote:
        'الحزم الشهرية وفرت على فريقنا ساعات كل أسبوع. النصوص والمرئيات وإطارات القصص كلها تعكس هويتنا بوضوح.',
      author: 'Layla Mansour',
      company: 'Verde Cosmetics',
      role: 'المؤسسة',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&q=80',
    },
  ],
  'business-consulting': [
    {
      type: 'text',
      quote:
        'ورشة التموضع وحّدت فريق القيادة خلال يومين. الرسائل التي كانت تأخذ أشهرًا من الجدل أصبحت لغة مشتركة.',
      author: 'James Okonkwo',
      company: 'Stackline',
      role: 'المدير التنفيذي',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'voice',
      voiceNoteUrl: VOICE_SAMPLE,
      voiceDuration: '0:48',
      author: 'Mohammed Al-Rashid',
      company: 'TechVenture ME',
      role: 'المدير التنفيذي',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'text',
      quote:
        'تعاقدنا معهم قبل إعادة الهوية وكانت خطوة صحيحة. وضوح الاستراتيجية جعل كل قرار إبداعي لاحق أسرع بكثير.',
      author: 'Kerem Yilmaz',
      company: 'Ankara Digital',
      role: 'المدير التقني',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
    },
  ],
  'web-development': [
    {
      type: 'text',
      quote:
        'الموقع الجديد سريع، واضح على الجوال، وارتفعت تحويلات نموذج التواصل خلال أول أسبوعين بعد الإطلاق.',
      author: 'Kerem Yilmaz',
      company: 'Ankara Digital',
      role: 'المدير التقني',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'voice',
      voiceNoteUrl: VOICE_SAMPLE,
      voiceDuration: '0:40',
      author: 'Omar Faisal',
      company: 'Cartly',
      role: 'مدير العمليات',
      rating: 4,
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'text',
      quote:
        'تسليم الـCMS كان سلسًا جدًا؛ فريق التسويق لدينا يحدث الصفحات دون لمس الكود، وبقيت مؤشرات الأداء ممتازة بعد الإطلاق.',
      author: 'Nour Khalil',
      company: 'Bloom Retail',
      role: 'مديرة التسويق',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&q=80',
    },
  ],
  'mobile-apps': [
    {
      type: 'text',
      quote:
        'التطبيق يبدو أصليًا على iOS وAndroid. مسارات التهيئة واضحة وارتفع تقييمنا في المتجر بعد إعادة التصميم.',
      author: 'Sara Haddad',
      company: 'Nova Health',
      role: 'قائدة المنتج',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'voice',
      voiceNoteUrl: VOICE_SAMPLE,
      voiceDuration: '0:44',
      author: 'James Okonkwo',
      company: 'Stackline',
      role: 'مدير الهندسة',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&q=80',
    },
    {
      type: 'text',
      quote:
        'أنجزوا نسخة MVP خلال عشرة أسابيع مع قاعدة كود قابلة للتوسع. دعم نشر المتاجر وحده وفر علينا الكثير من الذهاب والإياب.',
      author: 'Omar Faisal',
      company: 'Cartly',
      role: 'مدير العمليات',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&q=80',
    },
  ],
}
