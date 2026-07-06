import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import type { InsightArticle } from '../../types/insights'
import { formatArticleDate } from '../../data/insights'
import { useLocale } from '../../providers/LocaleProvider'

type ArticlesGridProps = {
  articles: InsightArticle[]
}

function ArticleCard({ article, index, locale }: { article: InsightArticle; index: number; locale: 'en' | 'ar' }) {
  const reduce = useReducedMotion() ?? false

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/insights/${article.slug}`}
        className="group flex flex-col rounded-card overflow-hidden bg-white cursor-pointer h-full border border-sz-border"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={article.coverImage}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-3 p-6 lg:p-8 flex-1">
          <time
            dateTime={article.publishedAt}
            className="text-sz-secondary"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              lineHeight: 1.4,
            }}
          >
            {formatArticleDate(article.publishedAt, locale)}
          </time>

          <h3
            className="text-sz-dark group-hover:text-sz-interaction transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
              fontWeight: 600,
              lineHeight: 1.45,
              letterSpacing: '-0.01em',
            }}
          >
            {article.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  const { locale } = useLocale()

  if (articles.length === 0) {
    return null
  }

  return (
    <section className="section-surface pb-16 lg:pb-20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
