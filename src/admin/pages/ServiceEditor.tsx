import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'
import BilingualField from '../components/BilingualField'
import ImageUploadField from '../components/ImageUploadField'
import ShowOnHomeToggle from '../components/ShowOnHomeToggle'
import { useAdminContent } from '../content/AdminContentContext'
import { bi } from '../utils/richText'

export default function ServiceEditor() {
  const { slug } = useParams<{ slug: string }>()
  const { content, setContent, uiLocale } = useAdminContent()
  const isAr = uiLocale === 'ar'

  if (!content || !slug) return null
  const service = content.services.find((s) => s.slug === slug)
  if (!service) {
    return (
      <p className="text-sm text-sz-primary/60">{isAr ? 'الخدمة غير موجودة' : 'Service not found'}</p>
    )
  }

  const update = (patch: Partial<typeof service>) => {
    setContent((prev) => ({
      ...prev,
      services: prev.services.map((s) => (s.slug === slug ? { ...s, ...patch } : s)),
    }))
  }

  const inputClass =
    'w-full rounded-xl border border-sz-border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-sz-interaction focus:ring-2 focus:ring-sz-interaction/20'

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link
        to="/admin/services"
        className="inline-flex items-center gap-1.5 text-sm text-sz-primary/60 hover:text-sz-interaction"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
        {isAr ? 'الخدمات' : 'Services'}
      </Link>

      <h2 className="font-heading text-xl font-semibold">
        {isAr ? service.title.ar : service.title.en}
      </h2>

      <div className="space-y-5 rounded-2xl border border-sz-border bg-white p-5">
        <ShowOnHomeToggle
          checked={Boolean(service.showOnHome)}
          onChange={(showOnHome) => update({ showOnHome })}
          hint={
            isAr
              ? 'يظهر في قسم الحلول على الصفحة الرئيسية.'
              : 'Appears in Our Solutions on the home page.'
          }
        />

        <ImageUploadField
          label={isAr ? 'صورة الخدمة' : 'Service image'}
          value={service.image}
          onChange={(image) => update({ image })}
          aspect="wide"
        />

        <label className="block space-y-1.5">
          <span className="text-sm font-medium">
            {isAr ? 'شكل العرض' : 'Image frame style'}
          </span>
          <select
            className={inputClass}
            value={service.variant}
            onChange={(e) =>
              update({ variant: e.target.value as typeof service.variant })
            }
          >
            <option value="showcase">{isAr ? 'عرض عادي' : 'Showcase'}</option>
            <option value="browser">{isAr ? 'متصفح (ويب)' : 'Browser (web)'}</option>
            <option value="phone">{isAr ? 'موبايل' : 'Phone'}</option>
          </select>
        </label>

        <BilingualField
          label={isAr ? 'العنوان' : 'Title'}
          value={service.title}
          onChange={(title) => update({ title })}
        />
        <BilingualField
          label={isAr ? 'الوصف المختصر (البطاقة)' : 'Short description (card)'}
          value={service.desc}
          multiline
          onChange={(desc) => update({ desc })}
        />
        <BilingualField
          label={isAr ? 'الشعار تحت العنوان (صفحة الخدمة)' : 'Tagline (service page)'}
          value={service.tagline}
          onChange={(tagline) => update({ tagline })}
        />
        <BilingualField
          label={isAr ? 'ملخص الهيرو' : 'Hero summary'}
          value={service.heroSummary}
          multiline
          onChange={(heroSummary) => update({ heroSummary })}
        />
      </div>

      <div className="space-y-5 rounded-2xl border border-sz-border bg-white p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="font-heading text-base font-semibold text-sz-dark">
              {isAr ? 'قسم About' : 'About section'}
            </h3>
            <p className="mt-1 text-xs text-sz-primary/55">
              {isAr ? 'يظهر في صفحة تفاصيل الخدمة.' : 'Shown on the service detail page.'}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              update({ aboutParagraphs: [...service.aboutParagraphs, bi('', '')] })
            }
            className="inline-flex items-center gap-1 rounded-lg border border-sz-border px-2.5 py-1.5 text-xs font-medium text-sz-primary/70 hover:border-sz-interaction hover:text-sz-interaction"
          >
            <Plus className="h-3.5 w-3.5" />
            {isAr ? 'فقرة' : 'Paragraph'}
          </button>
        </div>

        <BilingualField
          label={isAr ? 'عنوان القسم' : 'Section headline'}
          value={service.aboutHeadline}
          multiline
          onChange={(aboutHeadline) => update({ aboutHeadline })}
        />

        {service.aboutParagraphs.map((para, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="min-w-0 flex-1">
              <BilingualField
                label={`${isAr ? 'فقرة' : 'Paragraph'} ${index + 1}`}
                value={para}
                multiline
                rows={4}
                onChange={(next) => {
                  const aboutParagraphs = service.aboutParagraphs.map((p, i) =>
                    i === index ? next : p,
                  )
                  update({ aboutParagraphs })
                }}
              />
            </div>
            {service.aboutParagraphs.length > 1 ? (
              <button
                type="button"
                onClick={() =>
                  update({
                    aboutParagraphs: service.aboutParagraphs.filter((_, i) => i !== index),
                  })
                }
                className="mt-8 rounded-lg p-2 text-sz-primary/45 hover:bg-sz-surface hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
