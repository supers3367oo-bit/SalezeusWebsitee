import { Link, useNavigate } from 'react-router-dom'
import { Pencil, Plus, Trash2 } from 'lucide-react'
import { useAdminContent } from '../content/AdminContentContext'
import { createEmptyTeamMember } from '../utils/createEmpty'

export default function TeamList() {
  const { content, setContent, applyAndSave, saving, uiLocale } = useAdminContent()
  const navigate = useNavigate()
  const isAr = uiLocale === 'ar'
  if (!content) return null

  const addMember = () => {
    const member = createEmptyTeamMember(content.team.map((m) => m.id))
    setContent((prev) => ({ ...prev, team: [...prev.team, member] }))
    navigate(`/admin/team/${member.id}`)
  }

  const removeMember = async (id: string, label: string) => {
    const ok = window.confirm(
      isAr ? `حذف العضو «${label}»؟` : `Delete member “${label}”?`,
    )
    if (!ok) return
    try {
      await applyAndSave(
        (prev) => ({
          ...prev,
          team: prev.team.filter((m) => m.id !== id),
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
          {isAr ? `${content.team.length} أعضاء` : `${content.team.length} members`}
        </p>
        <button
          type="button"
          onClick={addMember}
          className="inline-flex items-center gap-1.5 rounded-btn bg-sz-interaction px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-sz-interaction-hover"
        >
          <Plus className="h-3.5 w-3.5" />
          {isAr ? 'إضافة عضو' : 'Add member'}
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {content.team.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-4 rounded-2xl border border-sz-border bg-white p-4"
          >
            {member.src ? (
              <img
                src={member.src}
                alt={member.name.en}
                className="h-14 w-14 rounded-xl bg-sz-surface object-cover"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sz-surface text-[10px] text-sz-primary/40">
                —
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-sz-dark">
                {isAr ? member.name.ar : member.name.en}
              </p>
              <p className="truncate text-xs text-sz-primary/55">
                {isAr ? member.role.ar : member.role.en}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <Link
                to={`/admin/team/${member.id}`}
                className="rounded-xl border border-sz-border p-2 text-sz-primary/60 transition hover:border-sz-interaction hover:text-sz-interaction"
                aria-label="Edit"
              >
                <Pencil className="h-4 w-4" />
              </Link>
              <button
                type="button"
                disabled={saving}
                onClick={() =>
                  removeMember(member.id, isAr ? member.name.ar : member.name.en)
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
  )
}
