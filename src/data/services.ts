import { SERVICE_DETAILS } from './serviceDetails'
import { SERVICE_DETAILS_AR } from './localized/serviceDetails.ar'
import type { Service, ServiceDetail } from '../types/services'
import type { Locale } from '../i18n/types'
import { pickLocale } from '../i18n/pickLocale'

export type { MockupVariant, Service, ServiceDetail, ServiceReview } from '../types/services'

function mapServices(details: ServiceDetail[]): Service[] {
  return details.map(({ slug, title, desc, image, variant, float }) => ({
    slug,
    title,
    desc,
    image,
    variant,
    float,
  }))
}

export const SERVICES: Service[] = mapServices(SERVICE_DETAILS)

export function getServices(locale: Locale = 'en'): Service[] {
  const details = pickLocale(locale, SERVICE_DETAILS, SERVICE_DETAILS_AR)
  return mapServices(details)
}

export { SERVICE_DETAILS, getServiceBySlug, getOtherServices } from './serviceDetails'
