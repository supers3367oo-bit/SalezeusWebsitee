import { useMemo, useState } from 'react'
import BilingualField from '../components/BilingualField'
import ImageUploadField from '../components/ImageUploadField'
import AdminLivePreview from '../components/AdminLivePreview'
import { useAdminContent } from '../content/AdminContentContext'
import type { AdminFeaturedCase, PageCopyField } from '../types/adminContent'
import type { Locale, TranslationTree } from '../../i18n/types'
import { pageFieldsToTree } from '../../cms/adapters'
import { DraftLocaleProvider } from '../../providers/LocaleProvider'
import { DraftFeaturedCasesProvider } from '../../providers/DraftFeaturedCasesContext'
import FeaturedSuccess from '../../components/sections/FeaturedSuccess'
import { groupFieldsByRoot, getRootLabel } from '../utils/pageCopy'

export default function CaseStudiesEditor() {
  const { content, setContent, uiLocale } = useAdminContent()
  const isAr = uiLocale === 'ar'
  const [previewLocale, setPreviewLocale] = useState<Locale>('en')

  const section = content?.pageSections.find((s) => s.key === 'caseStudies')
  const fields = section?.fields ?? []
  const groups = useMemo(() => groupFieldsByRoot(fields), [fields])
  const cases = content?.featuredCases ?? []

  const allFieldsOverlay = useMemo(() => {
    if (!content) return [] as PageCopyField[]
    return content.pageSections.flatMap((s) => s.fields)
  }, [content])

  const overlay = useMemo<TranslationTree>(
    () => pageFieldsToTree(allFieldsOverlay, previewLocale),
    [allFieldsOverlay, previewLocale],
  )

  if (!content || !section) return null

  const updateField = (path: string, next: { en: string; ar: string }) => {
    setContent((prev) => ({
      ...prev,
      pageSections: prev.pageSections.map((s) =>
        s.key !== 'caseStudies'
          ? s
          : {
              ...s,
              fields: s.fields.map((f) =>
                f.path === path ? { ...f, en: next.en, ar: next.ar } : f,
              ),
            },
      ),
    }))
  }

  const updateCase = (id: string, patch: Partial<AdminFeaturedCase>) => {
    setContent((prev) => ({
      ...prev,
      featuredCases: prev.featuredCases.map((item) =>
        item.id === id ? { ...item, ...patch } : item,
      ),
      siteAssets: {
        ...prev.siteAssets,
        ...(id === 'panda' && patch.image
          ? { 'cases.pandaKunefe': patch.image }
          : {}),
        ...(id === 'ark-oto' && patch.image ? { 'cases.arkOto': patch.image } : {}),
        ...(id === 'cake-station' && patch.image
          ? { 'cases.cakeStation': patch.image }
          : {}),
      },
    }))
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h2 className="font-heading text-xl font-semibold">
          {isAr ? 'دراسة الحالات' : 'Case Studies'}
        </h2>
        <p className="mt-1 text-sm text-sz-primary/55">
          {isAr
            ? 'عدّل نصوص القسم وبطاقات الحالات مع معاينة مطابقة للموقع'
            : 'Edit section copy and case cards with a live site-matching preview'}
        </p>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,40%)] xl:grid-cols-[minmax(0,1fr)_minmax(320px,440px)]">
        <div className="order-2 min-w-0 space-y-8 lg:order-1">
          <section className="space-y-4">
            <h3 className="text-sm font-semibold text-sz-dark">
              {isAr ? 'نصوص القسم' : 'Section copy'}
            </h3>
            {groups.map((group) => (
              <div key={group.root} className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-wide text-sz-primary/45">
                  {getRootLabel(group.root, isAr ? 'ar' : 'en')}
                </p>
                {group.fields.map((field) => (
                  <div
                    key={field.path}
                    className="rounded-2xl border border-sz-border bg-white p-4 sm:p-5"
                  >
                    <BilingualField
                      label={field.label}
                      value={{ en: field.en, ar: field.ar }}
                      multiline={field.multiline}
                      rows={field.multiline ? 3 : 2}
                      onChange={(next) => updateField(field.path, next)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-semibold text-sz-dark">
              {isAr ? 'بطاقات الحالات (صور + نصوص)' : 'Case cards (images + text)'}
            </h3>
            {cases.map((item, index) => (
              <div
                key={item.id}
                className="space-y-4 rounded-2xl border border-sz-border bg-white p-4 sm:p-5"
              >
                <p className="text-sm font-semibold text-sz-dark">
                  {isAr ? `حالة ${index + 1}` : `Case ${index + 1}`}
                </p>
                <ImageUploadField
                  label={isAr ? 'الصورة' : 'Image'}
                  value={item.image}
                  aspect="wide"
                  onChange={(image) => updateCase(item.id, { image })}
                />
                <BilingualField
                  label={isAr ? 'العميل' : 'Client'}
                  value={item.client}
                  onChange={(client) => updateCase(item.id, { client })}
                />
                <BilingualField
                  label={isAr ? 'العنوان' : 'Title'}
                  value={item.title}
                  onChange={(title) => updateCase(item.id, { title })}
                />
                <BilingualField
                  label={isAr ? 'الخدمة' : 'Service'}
                  value={item.service}
                  onChange={(service) => updateCase(item.id, { service })}
                />
              </div>
            ))}
          </section>
        </div>

        <div className="order-1 min-w-0 lg:order-2 lg:sticky lg:top-24">
          <AdminLivePreview
            title={isAr ? 'معاينة الموقع' : 'Live site preview'}
            subtitle="Featured Success"
            previewLocale={previewLocale}
            onPreviewLocaleChange={setPreviewLocale}
            isArUi={isAr}
            footer={
              isAr
                ? 'نفس قسم الرئيسية على الموقع'
                : 'Same home Featured Success section'
            }
          >
            <DraftLocaleProvider locale={previewLocale} overlay={overlay}>
              <DraftFeaturedCasesProvider cases={cases}>
                <FeaturedSuccess />
              </DraftFeaturedCasesProvider>
            </DraftLocaleProvider>
          </AdminLivePreview>
        </div>
      </div>
    </div>
  )
}
