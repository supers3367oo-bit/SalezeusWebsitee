import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ArticleBlocksEditor from '../components/ArticleBlocksEditor'
import BilingualField from '../components/BilingualField'
import ImageUploadField from '../components/ImageUploadField'
import ShowOnHomeToggle from '../components/ShowOnHomeToggle'
import { useAdminContent } from '../content/AdminContentContext'

export default function InsightEditor() {
  const { slug } = useParams<{ slug: string }>()
  const { content, setContent, uiLocale } = useAdminContent()
  const isAr = uiLocale === 'ar'

  if (!content || !slug) return null
  const article = content.insights.find((a) => a.slug === slug)
  if (!article) {
    return (
      <p className="text-sm text-sz-primary/60">{isAr ? 'المقال غير موجود' : 'Article not found'}</p>
    )
  }

  const update = (patch: Partial<typeof article>) => {
    setContent((prev) => ({
      ...prev,
      insights: prev.insights.map((a) => (a.slug === slug ? { ...a, ...patch } : a)),
    }))
  }

  const inputClass =
    'w-full rounded-xl border border-sz-border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-sz-interaction focus:ring-2 focus:ring-sz-interaction/20'

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link
        to="/admin/insights"
        className="inline-flex items-center gap-1.5 text-sm text-sz-primary/60 hover:text-sz-interaction"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
        {isAr ? 'المقالات' : 'Insights'}
      </Link>

      <h2 className="font-heading text-xl font-semibold">
        {isAr ? article.title.ar : article.title.en}
      </h2>

      <div className="space-y-5 rounded-2xl border border-sz-border bg-white p-5">
        <ShowOnHomeToggle
          checked={Boolean(article.showOnHome)}
          onChange={(showOnHome) => update({ showOnHome })}
          hint={
            isAr
              ? 'يظهر في أحدث المقالات على الرئيسية (حتى 3).'
              : 'Appears in Latest Insights on home (up to 3).'
          }
        />

        <ImageUploadField
          label={isAr ? 'صورة المقال' : 'Article image'}
          value={article.coverImage}
          onChange={(coverImage) =>
            update({ coverImage, cardImage: coverImage || article.cardImage })
          }
          aspect="wide"
        />

        <BilingualField
          label={isAr ? 'العنوان' : 'Title'}
          value={article.title}
          multiline
          onChange={(title) => update({ title })}
        />
        <BilingualField
          label={isAr ? 'المقتطف' : 'Excerpt'}
          value={article.excerpt}
          multiline
          rows={3}
          onChange={(excerpt) => update({ excerpt })}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm font-medium">{isAr ? 'تاريخ النشر' : 'Published'}</span>
            <input
              type="date"
              className={inputClass}
              value={article.publishedAt.slice(0, 10)}
              onChange={(e) => update({ publishedAt: e.target.value })}
              dir="ltr"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium">{isAr ? 'دقائق القراءة' : 'Reading minutes'}</span>
            <input
              type="number"
              min={1}
              className={inputClass}
              value={article.readingTimeMinutes}
              onChange={(e) =>
                update({
                  readingTimeMinutes: Number(e.target.value) || article.readingTimeMinutes,
                })
              }
              dir="ltr"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <BilingualField
            label={isAr ? 'اسم الكاتب' : 'Author'}
            value={article.authorName}
            onChange={(authorName) => update({ authorName })}
          />
          <BilingualField
            label={isAr ? 'دور الكاتب' : 'Author role'}
            value={article.authorRole}
            onChange={(authorRole) => update({ authorRole })}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <BilingualField
            label={isAr ? 'الخدمة' : 'Service'}
            value={article.service}
            onChange={(service) => update({ service })}
          />
          <BilingualField
            label={isAr ? 'الصناعة' : 'Industry'}
            value={article.industry}
            onChange={(industry) => update({ industry })}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-sz-border bg-white p-5">
        <div className="mb-4">
          <h3 className="font-heading text-base font-semibold text-sz-dark">
            {isAr ? 'محتوى المقال' : 'Article body'}
          </h3>
          <p className="mt-1 text-xs text-sz-primary/55">
            {isAr
              ? 'الفقرات والصور والعناصر اللي تظهر في صفحة المقال.'
              : 'Paragraphs, images, and blocks shown on the article page.'}
          </p>
        </div>
        <ArticleBlocksEditor
          blocks={article.content ?? []}
          onChange={(blocks) => update({ content: blocks })}
        />
      </div>
    </div>
  )
}
