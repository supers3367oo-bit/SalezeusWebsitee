export type RegionMarker = {
  id: string
  lat: number
  lng: number
  country: string
  cities: string
  description: string
  services: string[]
  accent: 'blue' | 'gold'
  /** Pin position on `/images/about/map.svg` (percent of rendered map) */
  mapPosition: { x: number; y: number }
  /** Card placement relative to pin */
  cardPlacement: 'top-left' | 'bottom-right'
}

/** Fallback lat/lng → percent (not used for map.svg — geography is non‑equirectangular in the asset). */
export function geoToMapPercent(lat: number, lng: number) {
  return {
    x: ((lng + 180) / 360) * 100,
    y: ((90 - lat) / 180) * 100,
  }
}

export const REGIONS: RegionMarker[] = [
  {
    id: 'turkey',
    lat: 39.5,
    lng: 32.5,
    country: 'Turkey',
    cities: 'Konya / Istanbul',
    description:
      'Our creative headquarters and strategy hub — where brand, design, and technology converge.',
    services: ['Brand Strategy', 'UI/UX Design', 'Web Development', 'Digital Marketing'],
    accent: 'blue',
    mapPosition: { x: 57.6, y: 58.2 },
    cardPlacement: 'top-left',
  },
  {
    id: 'syria',
    lat: 34.8,
    lng: 36.7,
    country: 'Syria',
    cities: 'Damascus / Aleppo',
    description:
      'Regional studio rooted in local insight — delivering global standards across the Levant.',
    services: ['Regional Campaigns', 'Content Production', 'Social Media', 'E-commerce'],
    accent: 'gold',
    mapPosition: { x: 60.4, y: 63.1 },
    cardPlacement: 'bottom-right',
  },
]

export const CITY_MARKERS = [
  { id: 'istanbul', lat: 41.0082, lng: 28.9784, parent: 'turkey' },
  { id: 'konya', lat: 37.8746, lng: 32.4932, parent: 'turkey' },
  { id: 'damascus', lat: 33.5138, lng: 36.2765, parent: 'syria' },
  { id: 'aleppo', lat: 36.2021, lng: 37.1343, parent: 'syria' },
] as const
