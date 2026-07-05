import type { Locale } from '../i18n/types'

export function pickLocale<T>(locale: Locale, enValue: T, arValue: T): T {
  return locale === 'ar' ? arValue : enValue
}
