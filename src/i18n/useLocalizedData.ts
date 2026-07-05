import { useMemo } from 'react'
import { getTeam } from '../data/localized'
import { getServices } from '../data/services'
import { getAllProjects } from '../data/projectDetails'
import { getInsightArticles } from '../data/insights'
import { useLocale } from '../providers/LocaleProvider'

export function useTeamMembers() {
  const { locale } = useLocale()
  return useMemo(() => getTeam(locale), [locale])
}

export function useLocalizedServices() {
  const { locale } = useLocale()
  return useMemo(() => getServices(locale), [locale])
}

export function useAllProjects() {
  const { locale } = useLocale()
  return useMemo(() => getAllProjects(locale), [locale])
}

export function useInsightArticles() {
  const { locale } = useLocale()
  return useMemo(() => getInsightArticles(locale), [locale])
}
