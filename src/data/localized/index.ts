import type { Locale } from '../../i18n/types'
import { pickLocale } from '../../i18n/pickLocale'
import { TEAM } from '../team'
import { TEAM_AR } from './team.ar'
import { SERVICE_DETAILS } from '../serviceDetails'
import { SERVICE_DETAILS_AR } from './serviceDetails.ar'
import { SERVICE_REVIEWS } from '../serviceReviews'
import { SERVICE_REVIEWS_AR } from './serviceReviews.ar'
import { REGIONS } from '../../components/about/experience/globe/locations'
import { REGIONS_AR } from './locations.ar'
import { getAllProjects as getProjectsEn, getProjectBySlug as getProjectBySlugEn } from '../projectDetails'
import { INSIGHT_ARTICLES, getFeaturedArticle as getFeaturedArticleEn, getArticleBySlug as getArticleBySlugEn } from '../insights'
import { INSIGHT_ARTICLES_AR } from './insights.ar'
import type { ServiceDetail, ServiceReview } from '../../types/services'
import type { TeamMember } from '../team'
import type { RegionMarker } from '../../components/about/experience/globe/locations'
import type { ProjectDetail, ProjectListItem } from '../../types/projectDetail'
import type { InsightArticle } from '../../types/insights'

export function getTeam(locale: Locale): TeamMember[] {
  if (locale === 'en') return TEAM

  return TEAM_AR.map((member, index) => ({
    ...member,
    firstName: TEAM[index].firstName,
    heroName: TEAM[index].heroName,
    heroNameSize: TEAM[index].heroNameSize,
  }))
}

export function getServiceDetailsList(locale: Locale): ServiceDetail[] {
  return pickLocale(locale, SERVICE_DETAILS, SERVICE_DETAILS_AR)
}

export function getServiceBySlug(slug: string | undefined, locale: Locale): ServiceDetail | undefined {
  if (!slug) return undefined
  return getServiceDetailsList(locale).find((service) => service.slug === slug)
}

export function getOtherServices(currentSlug: string, locale: Locale): ServiceDetail[] {
  return getServiceDetailsList(locale).filter((service) => service.slug !== currentSlug)
}

export function getServiceReviews(slug: string, locale: Locale): ServiceReview[] {
  const reviewSet = pickLocale(locale, SERVICE_REVIEWS, SERVICE_REVIEWS_AR)
  return reviewSet[slug] ?? []
}

export function getGlobeLocations(locale: Locale): RegionMarker[] {
  return pickLocale(locale, REGIONS, REGIONS_AR)
}

export function getProjects(locale: Locale): ProjectListItem[] {
  return getProjectsEn(locale)
}

export function getProjectBySlug(slug: string, locale: Locale): ProjectDetail | undefined {
  return getProjectBySlugEn(slug, locale)
}

export function getInsightArticles(locale: Locale): InsightArticle[] {
  return pickLocale(locale, INSIGHT_ARTICLES, INSIGHT_ARTICLES_AR)
}

export function getFeaturedArticle(locale: Locale): InsightArticle {
  return getFeaturedArticleEn(locale)
}

export function getArticleBySlug(slug: string, locale: Locale): InsightArticle | undefined {
  return getArticleBySlugEn(slug, locale)
}
