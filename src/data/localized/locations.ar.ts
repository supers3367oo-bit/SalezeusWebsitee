import type { RegionMarker } from '../../components/about/experience/globe/locations'

export const REGIONS_AR: RegionMarker[] = [
  {
    id: 'turkey',
    lat: 39.5,
    lng: 32.5,
    country: 'تركيا',
    cities: 'قونية / إسطنبول',
    description: 'مقرنا الإبداعي ومركزنا الاستراتيجي؛ حيث تلتقي العلامة والتصميم والتقنية في منظومة واحدة.',
    services: ['استراتيجية العلامة', 'تصميم UI/UX', 'تطوير الويب', 'التسويق الرقمي'],
    accent: 'blue',
    mapPosition: { x: 57.6, y: 58.2 },
    cardPlacement: 'top-left',
  },
  {
    id: 'syria',
    lat: 34.8,
    lng: 36.7,
    country: 'سوريا',
    cities: ' حلب',
    description: 'استوديو إقليمي متجذر في فهم السوق المحلي، ويقدم معايير تنفيذ عالمية عبر المشرق.',
    services: ['حملات إقليمية', 'إنتاج المحتوى', 'إدارة السوشيال ميديا', 'التجارة الإلكترونية'],
    accent: 'gold',
    mapPosition: { x: 60.4, y: 63.1 },
    cardPlacement: 'bottom-right',
  },
]
