import Button from '../ui/Button'
import { useLocale } from '../../providers/LocaleProvider'

type InsightsEmptyStateProps = {
  onClearFilters?: () => void
  suggestedIndustries?: string[]
  onIndustrySelect?: (industry: string) => void
}

export default function InsightsEmptyState({
  onClearFilters,
  suggestedIndustries = [],
  onIndustrySelect,
}: InsightsEmptyStateProps) {
  const { t } = useLocale()

  return (
    <section
      className="section-surface pb-20 lg:pb-24"
      aria-live="polite"
      data-lenis-prevent
    >
      <div className="section-container py-16 lg:py-20 text-center max-w-lg mx-auto">
        <p
          className="text-sz-dark mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          {t('insightsPage.noArticlesTitle')}
        </p>

        {onClearFilters && (
          <Button type="button" size="sm" onClick={onClearFilters} className="mb-8">
            {t('insightsPage.clearFilter')}
          </Button>
        )}

        {suggestedIndustries.length > 0 && onIndustrySelect && (
          <div className="flex flex-wrap justify-center gap-2">
            {suggestedIndustries.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => onIndustrySelect(industry)}
                className="px-4 py-2.5 rounded-full text-sm border border-sz-border bg-transparent text-sz-primary/65 hover:border-sz-interaction hover:text-sz-interaction transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {industry}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
