import { useEffect, useMemo, useState } from 'react'
import InsightsHero from '../components/insights/InsightsHero'
import FeaturedInsight from '../components/insights/FeaturedInsight'
import InsightsFilters from '../components/insights/InsightsFilters'
import ArticlesGrid from '../components/insights/ArticlesGrid'
import InsightsHubCTA from '../components/insights/InsightsHubCTA'
import { getFeaturedArticle, getInsightArticles } from '../data/insights'
import { refreshLocomotiveScroll } from '../lib/locomotive'
import { useLocale } from '../providers/LocaleProvider'

export default function InsightsPage() {
  const { locale, t } = useLocale()
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null)

  const allArticles = useMemo(() => getInsightArticles(locale), [locale])

  const filteredArticles = useMemo(() => {
    if (!activeIndustry) return allArticles
    return allArticles.filter((article) => article.industry === activeIndustry)
  }, [activeIndustry, allArticles])

  const suggestedIndustries = useMemo(() => {
    const counts = new Map<string, number>()
    for (const article of allArticles) {
      counts.set(article.industry, (counts.get(article.industry) ?? 0) + 1)
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([industry]) => industry)
  }, [allArticles])

  const spotlightArticle = useMemo(() => {
    if (filteredArticles.length === 0) return null
    if (!activeIndustry) return getFeaturedArticle(locale)
    return filteredArticles.find((a) => a.featured) ?? filteredArticles[0]
  }, [filteredArticles, activeIndustry, locale])

  const gridArticles = useMemo(() => {
    if (!spotlightArticle) return []
    return filteredArticles.filter((a) => a.slug !== spotlightArticle.slug)
  }, [filteredArticles, spotlightArticle])

  const clearFilter = () => setActiveIndustry(null)

  useEffect(() => {
    requestAnimationFrame(() => refreshLocomotiveScroll())
  }, [filteredArticles, spotlightArticle])

  return (
    <>
      <InsightsHero />

      {spotlightArticle && (
        <FeaturedInsight
          article={spotlightArticle}
          label={activeIndustry ? t('insightsPage.selectedForYou') : t('insightsPage.editorsPick')}
        />
      )}

      <InsightsFilters
        articles={allArticles}
        activeIndustry={activeIndustry}
        onIndustryChange={setActiveIndustry}
        onClearAll={clearFilter}
      />

      <ArticlesGrid
        articles={gridArticles}
        showEmptyState={filteredArticles.length === 0}
        onClearFilters={clearFilter}
        suggestedIndustries={suggestedIndustries}
        onIndustrySelect={setActiveIndustry}
      />

      <InsightsHubCTA />
    </>
  )
}
