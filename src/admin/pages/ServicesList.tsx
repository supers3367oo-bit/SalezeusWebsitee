import { Link, useNavigate } from 'react-router-dom'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { HomeBadge } from '../components/ShowOnHomeToggle'
import { useAdminContent } from '../content/AdminContentContext'
import { createEmptyService } from '../utils/createEmpty'

export default function ServicesList() {
  const { content, setContent, applyAndSave, saving, uiLocale } = useAdminContent()
  const navigate = useNavigate()
  const isAr = uiLocale === 'ar'
  if (!content) return null

  const onHomeCount = content.services.filter((s) => s.showOnHome).length

  const addService = () => {
    const service = createEmptyService(content.services.map((s) => s.slug))
    setContent((prev) => ({ ...prev, services: [...prev.services, service] }))
    navigate(`/admin/services/${service.slug}`)
  }

  const removeService = async (slug: string, label: string) => {
    const ok = window.confirm(
      isAr ? `حذف الخدمة «${label}»؟` : `Delete service “${label}”?`,
    )
    if (!ok) return
    try {
      await applyAndSave(
        (prev) => ({
          ...prev,
          services: prev.services.filter((s) => s.slug !== slug),
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
            ? `${content.services.length} خدمات · ${onHomeCount} على الهوم`
            : `${content.services.length} services · ${onHomeCount} on home`}
        </p>
        <button
          type="button"
          onClick={addService}
          className="inline-flex items-center gap-1.5 rounded-btn bg-sz-interaction px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-sz-interaction-hover"
        >
          <Plus className="h-3.5 w-3.5" />
          {isAr ? 'إضافة خدمة' : 'Add service'}
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {content.services.map((service) => (
          <div
            key={service.slug}
            className="overflow-hidden rounded-2xl border border-sz-border bg-white"
          >
            <div className="aspect-[16/7] bg-sz-surface">
              {service.image ? (
                <img src={service.image} alt="" className="h-full w-full object-cover" />
              ) : null}
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-heading font-semibold text-sz-dark">
                    {isAr ? service.title.ar : service.title.en}
                  </p>
                  <HomeBadge on={Boolean(service.showOnHome)} />
                </div>
                <p className="mt-0.5 truncate text-xs text-sz-primary/55">
                  {isAr ? service.tagline.ar : service.tagline.en}
                </p>
                <label className="mt-2 inline-flex cursor-pointer items-center gap-2 text-[11px] text-sz-primary/60">
                  <input
                    type="checkbox"
                    checked={Boolean(service.showOnHome)}
                    onChange={(e) => {
                      const showOnHome = e.target.checked
                      setContent((prev) => ({
                        ...prev,
                        services: prev.services.map((s) =>
                          s.slug === service.slug ? { ...s, showOnHome } : s,
                        ),
                      }))
                    }}
                    className="h-3.5 w-3.5 rounded border-sz-border text-sz-interaction"
                  />
                  {isAr ? 'على الهوم' : 'On home'}
                </label>
              </div>
              <div className="flex shrink-0 items-center gap-1.5">
                <Link
                  to={`/admin/services/${service.slug}`}
                  className="rounded-xl border border-sz-border p-2 text-sz-primary/60 transition hover:border-sz-interaction hover:text-sz-interaction"
                >
                  <Pencil className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  disabled={saving}
                  onClick={() =>
                    removeService(
                      service.slug,
                      isAr ? service.title.ar : service.title.en,
                    )
                  }
                  className="rounded-xl border border-sz-border p-2 text-sz-primary/50 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                  aria-label="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
