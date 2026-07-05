export type TeamMember = {
  /** 3D avatar shown by default */
  src: string
  /** Real photo shown on hover in About team section */
  realSrc: string
  name: string
  role: string
  firstName: string
  /** Hero watermark — first + last name when first name is too short */
  heroName: string
  /** Slightly smaller hero text when the full label is long */
  heroNameSize?: 'compact'
  /** Short credibility line — max 8 words */
  bio: string
  /** Longer copy for About page hover card */
  aboutBio: string
}

export const TEAM: TeamMember[] = [
  {
    src: '/team/t1.png',
    realSrc: '/team/real/t1.webp',
    name: 'Abdulkader Assani',
    role: 'Backend Developer',
    firstName: 'Abdulkader',
    heroName: 'Abdulkader',
    bio: 'Seven years building scalable, reliable backend systems.',
    aboutBio:
      'For brands that need more than a vendor — someone who connects architecture, performance, and reliability into systems that scale with confidence.',
  },
  {
    src: '/team/t2.png',
    realSrc: '/team/real/t2.png',
    name: 'Heba Ghabab',
    role: 'Marketing',
    firstName: 'Heba',
    heroName: 'Heba Ghabab',
    bio: 'Six years driving growth through strategic marketing campaigns.',
    aboutBio:
      'She turns insight into momentum — building campaigns that reach the right audience, sharpen the message, and deliver measurable growth.',
  },
  {
    src: '/team/t3.png',
    realSrc: '/team/real/tt3.png',
    name: 'Muhammed Darwish',
    role: 'CEO · Graphic Designer',
    firstName: 'Muhammed',
    heroName: 'Muhammed',
    bio: 'Eight years leading brands with design and strategy.',
    aboutBio:
      'Leading with vision and craft — connecting strategy, identity, and design into brands that stand out and grow with purpose.',
  },
  {
    src: '/team/t4.png',
    realSrc: '/team/real/t4.webp',
    name: 'Aya Alkayali',
    role: 'Graphic Designer',
    firstName: 'Aya',
    heroName: 'Aya Alkayali',
    bio: 'Five years crafting distinctive visual identities for brands.',
    aboutBio:
      'She shapes visual worlds that feel unmistakable — translating brand strategy into design systems clients remember and audiences trust.',
  },
  {
    src: '/team/t5.png',
    realSrc: '/team/real/t5.png',
    name: 'Esraa Elnajjar',
    role: 'Frontend Developer',
    firstName: 'Esraa',
    heroName: 'Esraa Elnajjar',
    heroNameSize: 'compact',
    bio: 'Six years building polished, high-performance web interfaces.',
    aboutBio:
      'She builds interfaces that feel effortless — fast, polished, and precise — turning design intent into responsive experiences users enjoy.',
  },
  {
    src: '/team/t6.png',
    realSrc: '/team/real/tt6.png',
    name: 'Haidy Tarek',
    role: 'Graphic Designer',
    firstName: 'Haidy',
    heroName: 'Haidy Tarek',
    bio: 'Five years designing bold visuals that convert audiences.',
    aboutBio:
      'Bold, conversion-minded design is her signature — visuals that capture attention quickly and move people toward action.',
  },
  {
    src: '/team/t7.png',
    realSrc: '/team/real/tt7.png',
    name: 'Alaa Elsayed',
    role: 'Content Creator',
    firstName: 'Alaa',
    heroName: 'Alaa Elsayed',
    bio: 'Seven years creating content that builds loyal audiences.',
    aboutBio:
      'Story-first content that builds loyal audiences — crafted to educate, engage, and keep brands present in the conversations that matter.',
  },
  {
    src: '/team/t8.png',
    realSrc: '/team/real/tt8.png',
    name: 'Lora Taki Aldeen',
    role: 'Content Creator',
    firstName: 'Lora',
    heroName: 'Lora Taki Aldeen',
    heroNameSize: 'compact',
    bio: 'Six years shaping stories that drive real engagement.',
    aboutBio:
      'She turns ideas into narratives people follow — content with rhythm, clarity, and the kind of engagement brands can build on.',
  },
  {
    src: '/team/t9.png',
    realSrc: '/team/real/tt9.png',
    name: 'Ibrahim Naser',
    role: 'SEO',
    firstName: 'Ibrahim',
    heroName: 'Ibrahim',
    bio: 'Five years ranking brands with proven SEO strategies.',
    aboutBio:
      'Search visibility with intent behind it — structured SEO that helps brands get discovered by the audiences already looking for them.',
  },
  {
    src: '/team/t10.png',
    realSrc: '/team/real/tt10.png',
    name: 'Aya Khairbek',
    role: 'Backend Developer',
    firstName: 'Aya',
    heroName: 'Aya Khairbek',
    bio: 'Five years engineering robust APIs and database systems.',
    aboutBio:
      'She engineers the backbone behind the product — reliable APIs, clean data flows, and backend systems teams can depend on.',
  },
  {
    src: '/team/t11.png',
    realSrc: '/team/real/tt11.png',
    name: 'Ola Masoud',
    role: 'UI/UX Designer',
    firstName: 'Ola',
    heroName: 'Ola Masoud',
    bio: 'Six years designing intuitive experiences users truly trust.',
    aboutBio:
      'Human-centered design is her focus — intuitive flows, thoughtful details, and experiences that make complex products feel simple.',
  },
]

export const CITY_MARKERS = [
  { id: 'istanbul', lat: 41.0082, lng: 28.9784, parent: 'turkey' },
  { id: 'konya', lat: 37.8746, lng: 32.4932, parent: 'turkey' },
  { id: 'damascus', lat: 33.5138, lng: 36.2765, parent: 'syria' },
  { id: 'aleppo', lat: 36.2021, lng: 37.1343, parent: 'syria' },
] as const
