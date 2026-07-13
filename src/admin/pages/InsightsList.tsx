import { Link, useNavigate } from 'react-router-dom'
import { Pencil, Plus, Star, Trash2 } from 'lucide-react'
import { HomeBadge } from '../components/ShowOnHomeToggle'
import { useAdminContent } from '../content/AdminContentContext'
import { createEmptyInsight } from '../utils/createEmpty'

export default function InsightsList() {
  const { content, setContent, applyAndSave, saving, uiLocale } = useAdminContent()
  const navigate = useNavigate()
  const isAr = uiLocale === 'ar'
  if (!content) return null

  const onHomeCount = content.insights.filter((a) => a.showOnHome).length

  const addArticle = () => {
    const article = createEmptyInsight(content.insights.map((a) => a.slug))
    setContent((prev) => ({ ...prev, insights: [article, ...prev.insights] }))
    navigate(`/admin/insights/${article.slug}`)
  }

  const removeArticle = async (slug: string, label: string) => {
    const ok = window.confirm(
      isAr ? `حذف المقال «${label}»؟` : `Delete article “${label}”?`,
    )
    if (!ok) return
    try {
      await applyAndSave(
        (prev) => ({
          ...prev,
          insights: prev.insights.filter((a) => a.slug !== slug),
        }),
        isAr ? 'تم الحذف من السيرفر' : 'Deleted from CMS server',
      )
    } catch {
      /* toast already shown */
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-sz-primary/65">
          {isAr
            ? `${content.insights.length} مقالات · ${onHomeCount} على الهوم`
            : `${content.insights.length} articles · ${onHomeCount} on home`}
        </p>
        <button
          type="button"
          onClick={addArticle}
          className="inline-flex items-center gap-1.5 rounded-btn bg-sz-interaction px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-sz-interaction-hover"
        >
          <Plus className="h-3.5 w-3.5" />
          {isAr ? 'إضافة مقال' : 'Add article'}
        </button>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {content.insights.map((article) => (
          <div
            key={article.slug}
            className="flex gap-4 rounded-2xl border border-sz-border bg-white p-4"
          >
            {article.cardImage || article.coverImage ? (
              <img
                src={article.cardImage || article.coverImage}
                alt=""
                className="h-20 w-24 shrink-0 rounded-xl bg-sz-surface object-cover"
              />
            ) : (
              <div className="h-20 w-24 shrink-0 rounded-xl bg-sz-surface" />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="line-clamp-2 font-medium text-sz-dark">
                      {isAr ? article.title.ar : article.title.en}
                    </p>
                    <HomeBadge on={Boolean(article.showOnHome)} />
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Link
                    to={`/admin/insights/${article.slug}`}
                    className="rounded-xl border border-sz-border p-2 text-sz-primary/60 transition hover:border-sz-interaction hover:text-sz-interaction"
                  >
                    <Pencil className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() =>
                      removeArticle(
                        article.slug,
                        isAr ? article.title.ar : article.title.en,
                      )
                    }
                    className="rounded-xl border border-sz-border p-2 text-sz-primary/50 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-sz-primary/55">
                {isAr ? article.excerpt.ar : article.excerpt.en}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-sz-primary/50">
                <span>{article.publishedAt}</span>
                <span>·</span>
                <span>
                  {article.readingTimeMinutes} {isAr ? 'د' : 'min'}
                </span>
                {article.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-sz-accent-soft px-2 py-0.5 font-medium text-sz-dark">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                ) : null}
                <label className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] text-sz-primary/60">
                  <input
                    type="checkbox"
                    checked={Boolean(article.showOnHome)}
                    onChange={(e) => {
                      const showOnHome = e.target.checked
                      setContent((prev) => ({
                        ...prev,
                        insights: prev.insights.map((a) =>
                          a.slug === article.slug ? { ...a, showOnHome } : a,
                        ),
                      }))
                    }}
                    className="h-3.5 w-3.5 rounded border-sz-border text-sz-interaction"
                  />
                  {isAr ? 'على الهوم' : 'On home'}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
