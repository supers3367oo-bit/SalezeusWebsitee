import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import BilingualField from '../components/BilingualField'
import ImageUploadField from '../components/ImageUploadField'
import ProjectBlocksEditor from '../components/ProjectBlocksEditor'
import ShowOnHomeToggle from '../components/ShowOnHomeToggle'
import { useAdminContent } from '../content/AdminContentContext'
import type { ProjectServiceSlug } from '../../types/projectDetail'

const SERVICE_OPTIONS: {
  slug: ProjectServiceSlug
  labelEn: string
  labelAr: string
}[] = [
  { slug: 'branding', labelEn: 'Branding', labelAr: 'العلامة التجارية' },
  { slug: 'marketing', labelEn: 'Marketing', labelAr: 'التسويق' },
  { slug: 'social-media', labelEn: 'Social Media', labelAr: 'السوشيال ميديا' },
  { slug: 'business-consulting', labelEn: 'Consulting', labelAr: 'الاستشارات' },
  { slug: 'web-development', labelEn: 'Web', labelAr: 'تطوير الويب' },
  { slug: 'mobile-apps', labelEn: 'Apps', labelAr: 'تطبيقات الموبايل' },
]

export default function ProjectEditor() {
  const { slug } = useParams<{ slug: string }>()
  const { content, setContent, uiLocale } = useAdminContent()
  const isAr = uiLocale === 'ar'

  if (!content || !slug) return null
  const project = content.projects.find((p) => p.slug === slug)
  if (!project) {
    return (
      <p className="text-sm text-sz-primary/60">{isAr ? 'المشروع غير موجود' : 'Project not found'}</p>
    )
  }

  const update = (patch: Partial<typeof project>) => {
    setContent((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.slug === slug ? { ...p, ...patch } : p)),
    }))
  }

  const onServiceChange = (nextSlug: ProjectServiceSlug) => {
    const option = SERVICE_OPTIONS.find((o) => o.slug === nextSlug)
    update({
      service: nextSlug,
      serviceLabel: option
        ? { en: option.labelEn, ar: option.labelAr }
        : project.serviceLabel,
    })
  }

  const inputClass =
    'w-full rounded-xl border border-sz-border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-sz-interaction focus:ring-2 focus:ring-sz-interaction/20'

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link
        to="/admin/projects"
        className="inline-flex items-center gap-1.5 text-sm text-sz-primary/60 hover:text-sz-interaction"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
        {isAr ? 'المشاريع' : 'Projects'}
      </Link>

      <h2 className="font-heading text-xl font-semibold">
        {isAr ? project.client.ar : project.client.en}
      </h2>

      <div className="space-y-5 rounded-2xl border border-sz-border bg-white p-5">
        <ShowOnHomeToggle
          checked={Boolean(project.showOnHome)}
          onChange={(showOnHome) => update({ showOnHome })}
          hint={
            isAr
              ? 'يظهر في معاينة المعرض على الرئيسية (حتى 4).'
              : 'Appears in home Portfolio Preview (up to 4).'
          }
        />

        <ImageUploadField
          label={isAr ? 'صورة البطاقة / المعرض' : 'Card image'}
          value={project.image}
          onChange={(image) => update({ image, heroImage: image || project.heroImage })}
          aspect="wide"
        />

        <BilingualField
          label={isAr ? 'اسم العميل / المشروع' : 'Client / project name'}
          value={project.client}
          onChange={(client) => update({ client })}
        />
        <BilingualField
          label={isAr ? 'الملخص' : 'Summary'}
          value={project.summary}
          multiline
          onChange={(summary) => update({ summary })}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm font-medium">{isAr ? 'السنة' : 'Year'}</span>
            <input
              type="number"
              className={inputClass}
              value={project.year}
              onChange={(e) => update({ year: Number(e.target.value) || project.year })}
              dir="ltr"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium">
              {isAr ? 'فئة الخدمة' : 'Service'}
            </span>
            <select
              className={inputClass}
              value={project.service}
              onChange={(e) => onServiceChange(e.target.value as ProjectServiceSlug)}
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {isAr ? option.labelAr : option.labelEn}
                </option>
              ))}
            </select>
          </label>
        </div>

        <BilingualField
          label={isAr ? 'المجال (فلتر المعرض)' : 'Field (portfolio filter)'}
          value={project.field}
          onChange={(field) => update({ field })}
        />
      </div>

      <div className="rounded-2xl border border-sz-border bg-white p-5">
        <ProjectBlocksEditor
          blocks={project.blocks ?? []}
          onChange={(blocks) => update({ blocks })}
        />
      </div>
    </div>
  )
}
