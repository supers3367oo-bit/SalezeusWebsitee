import { Link, useNavigate } from 'react-router-dom'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { HomeBadge } from '../components/ShowOnHomeToggle'
import { useAdminContent } from '../content/AdminContentContext'
import { createEmptyProject } from '../utils/createEmpty'

export default function ProjectsList() {
  const { content, setContent, applyAndSave, saving, uiLocale } = useAdminContent()
  const navigate = useNavigate()
  const isAr = uiLocale === 'ar'
  if (!content) return null

  const onHomeCount = content.projects.filter((p) => p.showOnHome).length

  const addProject = () => {
    const nextId =
      content.projects.reduce((max, p) => Math.max(max, p.id), 0) + 1
    const project = createEmptyProject(
      content.projects.map((p) => p.slug),
      nextId,
    )
    setContent((prev) => ({ ...prev, projects: [...prev.projects, project] }))
    navigate(`/admin/projects/${project.slug}`)
  }

  const removeProject = async (slug: string, label: string) => {
    const ok = window.confirm(
      isAr ? `حذف المشروع «${label}»؟` : `Delete project “${label}”?`,
    )
    if (!ok) return
    try {
      await applyAndSave(
        (prev) => ({
          ...prev,
          projects: prev.projects.filter((p) => p.slug !== slug),
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
            ? `${content.projects.length} مشاريع · ${onHomeCount} على الهوم`
            : `${content.projects.length} projects · ${onHomeCount} on home`}
        </p>
        <button
          type="button"
          onClick={addProject}
          className="inline-flex items-center gap-1.5 rounded-btn bg-sz-interaction px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-sz-interaction-hover"
        >
          <Plus className="h-3.5 w-3.5" />
          {isAr ? 'إضافة مشروع' : 'Add project'}
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-sz-border bg-white">
        <div className="divide-y divide-sz-border">
          {content.projects.map((project) => (
            <div key={project.slug} className="flex items-center gap-4 px-4 py-3 sm:px-5">
              {project.image ? (
                <img
                  src={project.image}
                  alt=""
                  className="hidden h-12 w-16 rounded-lg object-cover sm:block"
                />
              ) : (
                <div className="hidden h-12 w-16 rounded-lg bg-sz-surface sm:block" />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate font-medium text-sz-dark">
                    {isAr ? project.client.ar : project.client.en}
                  </p>
                  <HomeBadge on={Boolean(project.showOnHome)} />
                </div>
                <p className="truncate text-xs text-sz-primary/55">
                  {isAr ? project.summary.ar : project.summary.en}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-sz-interaction-soft px-2 py-0.5 text-[10px] font-semibold text-sz-interaction">
                    {isAr ? project.serviceLabel.ar : project.serviceLabel.en}
                  </span>
                  <span className="rounded-full bg-sz-surface px-2 py-0.5 text-[10px] font-medium text-sz-primary/70">
                    {isAr ? project.field.ar : project.field.en}
                  </span>
                  <label className="inline-flex cursor-pointer items-center gap-1.5 text-[10px] text-sz-primary/60">
                    <input
                      type="checkbox"
                      checked={Boolean(project.showOnHome)}
                      onChange={(e) => {
                        const showOnHome = e.target.checked
                        setContent((prev) => ({
                          ...prev,
                          projects: prev.projects.map((p) =>
                            p.slug === project.slug ? { ...p, showOnHome } : p,
                          ),
                        }))
                      }}
                      className="h-3.5 w-3.5 rounded border-sz-border text-sz-interaction"
                    />
                    {isAr ? 'على الهوم' : 'On home'}
                  </label>
                </div>
              </div>
              <span className="hidden shrink-0 rounded-full bg-sz-surface px-2.5 py-1 text-[11px] font-medium text-sz-primary/70 md:inline">
                {project.year}
              </span>
              <div className="flex shrink-0 items-center gap-1.5">
                <Link
                  to={`/admin/projects/${project.slug}`}
                  className="rounded-xl border border-sz-border p-2 text-sz-primary/60 transition hover:border-sz-interaction hover:text-sz-interaction"
                >
                  <Pencil className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  disabled={saving}
                  onClick={() =>
                    removeProject(
                      project.slug,
                      isAr ? project.client.ar : project.client.en,
                    )
                  }
                  className="rounded-xl border border-sz-border p-2 text-sz-primary/50 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                  aria-label="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
