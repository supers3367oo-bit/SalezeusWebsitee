import clsx from 'clsx'
import { getInsightIndustryCategories } from '../../data/insights'
import { useLocale } from '../../providers/LocaleProvider'

type InsightsFiltersProps = {
  activeCategory: string | null
  onCategoryChange: (category: string | null) => void
  onClearAll: () => void
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        'inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] transition-colors duration-200 border',
        active
          ? 'bg-sz-dark text-white border-sz-dark'
          : 'bg-transparent text-sz-primary/55 border-sz-border hover:text-sz-dark hover:border-sz-primary/30'
      )}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {label}
    </button>
  )
}

export default function InsightsFilters({
  activeCategory,
  onCategoryChange,
  onClearAll,
}: InsightsFiltersProps) {
  const { locale, t } = useLocale()
  const categories = getInsightIndustryCategories(locale)

  return (
    <section id="insights-articles" className="section-surface scroll-mt-28 pb-8 lg:pb-10">
      <div className="section-container">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((category) => (
              <FilterChip
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() =>
                  onCategoryChange(activeCategory === category ? null : category)
                }
              />
            ))}
          </div>

          {activeCategory && (
            <button
              type="button"
              onClick={onClearAll}
              className="shrink-0 text-sm text-sz-interaction hover:text-sz-interaction-hover transition-colors self-start"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              {t('insightsPage.clear')}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
