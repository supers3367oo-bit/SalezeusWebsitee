import { useMemo } from 'react'
import { getServices } from '../data/services'
import type { Service } from '../types/services'
import { useLocale } from '../providers/LocaleProvider'

/** @deprecated Use useLocalizedServices from useLocalizedData.ts */
export function useLocalizedServices(): Service[] {
  const { locale } = useLocale()
  return useMemo(() => getServices(locale), [locale])
}
