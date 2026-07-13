import {
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Link2,
  Plus,
  Trash2,
  Type,
  Video,
} from 'lucide-react'
import type { AdminProjectBlock } from '../types/adminContent'
import BilingualField from './BilingualField'
import ImageUploadField from './ImageUploadField'
import { useAdminContent } from '../content/AdminContentContext'
import { createEmptyProjectBlock } from '../utils/createEmpty'

type Props = {
  blocks: AdminProjectBlock[]
  onChange: (next: AdminProjectBlock[]) => void
}

const ADD_TYPES: AdminProjectBlock['type'][] = ['image', 'text', 'video', 'link']

const LABELS: Record<AdminProjectBlock['type'], { en: string; ar: string }> = {
  image: { en: 'Image', ar: 'صورة' },
  text: { en: 'Text', ar: 'نص' },
  video: { en: 'Video link', ar: 'رابط فيديو' },
  link: { en: 'Link', ar: 'رابط' },
}

function BlockIcon({ type }: { type: AdminProjectBlock['type'] }) {
  const cls = 'h-4 w-4 text-sz-interaction'
  switch (type) {
    case 'image':
      return <ImageIcon className={cls} />
    case 'text':
      return <Type className={cls} />
    case 'video':
      return <Video className={cls} />
    case 'link':
      return <Link2 className={cls} />
  }
}

const inputClass =
  'w-full rounded-xl border border-sz-border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-sz-interaction focus:ring-2 focus:ring-sz-interaction/20'

export default function ProjectBlocksEditor({ blocks, onChange }: Props) {
  const { uiLocale } = useAdminContent()
  const isAr = uiLocale === 'ar'

  const move = (index: number, dir: -1 | 1) => {
    const next = index + dir
    if (next < 0 || next >= blocks.length) return
    const copy = [...blocks]
    const tmp = copy[index]
    copy[index] = copy[next]
    copy[next] = tmp
    onChange(copy)
  }

  const remove = (index: number) => {
    onChange(blocks.filter((_, i) => i !== index))
  }

  const patch = (index: number, next: AdminProjectBlock) => {
    onChange(blocks.map((b, i) => (i === index ? next : b)))
  }

  const add = (type: AdminProjectBlock['type']) => {
    onChange([...blocks, createEmptyProjectBlock(type)])
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-heading text-base font-semibold text-sz-dark">
          {isAr ? 'محتوى المشروع (Behance)' : 'Project body (Behance)'}
        </h3>
        <p className="mt-1 text-xs text-sz-primary/55">
          {isAr
            ? 'أضف صورًا أو نصًا أو فيديو (YouTube/Vimeo) أو روابط — تظهر تحت بعض في صفحة المشروع.'
            : 'Add images, text, YouTube/Vimeo video, or links — shown stacked on the project page.'}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {ADD_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => add(type)}
            className="inline-flex items-center gap-1.5 rounded-full border border-sz-border bg-white px-3 py-1.5 text-xs font-medium text-sz-primary/75 transition hover:border-sz-interaction hover:text-sz-interaction"
          >
            <Plus className="h-3.5 w-3.5" />
            {isAr ? LABELS[type].ar : LABELS[type].en}
          </button>
        ))}
      </div>

      {blocks.length === 0 ? (
        <p className="rounded-xl border border-dashed border-sz-border bg-sz-surface/40 px-4 py-8 text-center text-sm text-sz-primary/50">
          {isAr ? 'لا توجد بلوكات بعد — ابدأ بإضافة صورة أو نص.' : 'No blocks yet — add an image or text to start.'}
        </p>
      ) : null}

      <div className="space-y-3">
        {blocks.map((block, index) => (
          <div
            key={block.id}
            className="overflow-hidden rounded-2xl border border-sz-border bg-white"
          >
            <div className="flex items-center justify-between gap-2 border-b border-sz-border bg-sz-surface/50 px-3 py-2">
              <div className="flex items-center gap-2 text-sm font-medium text-sz-dark">
                <BlockIcon type={block.type} />
                {isAr ? LABELS[block.type].ar : LABELS[block.type].en}
                <span className="text-[11px] font-normal text-sz-primary/40">#{index + 1}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  className="rounded-lg p-1.5 text-sz-primary/50 transition hover:bg-white disabled:opacity-30"
                  aria-label="Move up"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === blocks.length - 1}
                  className="rounded-lg p-1.5 text-sz-primary/50 transition hover:bg-white disabled:opacity-30"
                  aria-label="Move down"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="rounded-lg p-1.5 text-sz-primary/50 transition hover:bg-red-50 hover:text-red-600"
                  aria-label="Delete block"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4 p-4">
              {block.type === 'image' ? (
                <>
                  <ImageUploadField
                    label={isAr ? 'الصورة' : 'Image'}
                    value={block.src}
                    onChange={(src) => patch(index, { ...block, src })}
                    aspect="wide"
                  />
                  <BilingualField
                    label={isAr ? 'النص البديل' : 'Alt text'}
                    value={block.alt}
                    onChange={(alt) => patch(index, { ...block, alt })}
                  />
                </>
              ) : null}

              {block.type === 'text' ? (
                <>
                  <BilingualField
                    label={isAr ? 'عنوان (اختياري)' : 'Title (optional)'}
                    value={block.title ?? { en: '', ar: '' }}
                    onChange={(title) => patch(index, { ...block, title })}
                  />
                  <BilingualField
                    label={isAr ? 'النص' : 'Body'}
                    value={block.body}
                    multiline
                    rows={4}
                    onChange={(body) => patch(index, { ...block, body })}
                  />
                </>
              ) : null}

              {block.type === 'video' ? (
                <>
                  <label className="block space-y-1.5">
                    <span className="text-sm font-medium">
                      {isAr ? 'رابط YouTube أو Vimeo' : 'YouTube or Vimeo URL'}
                    </span>
                    <input
                      className={inputClass}
                      value={block.url}
                      onChange={(e) => patch(index, { ...block, url: e.target.value })}
                      placeholder="https://www.youtube.com/watch?v=…"
                      dir="ltr"
                    />
                  </label>
                  <BilingualField
                    label={isAr ? 'تعليق (اختياري)' : 'Caption (optional)'}
                    value={block.caption ?? { en: '', ar: '' }}
                    onChange={(caption) => patch(index, { ...block, caption })}
                  />
                </>
              ) : null}

              {block.type === 'link' ? (
                <>
                  <label className="block space-y-1.5">
                    <span className="text-sm font-medium">{isAr ? 'الرابط' : 'URL'}</span>
                    <input
                      className={inputClass}
                      value={block.url}
                      onChange={(e) => patch(index, { ...block, url: e.target.value })}
                      placeholder="https://"
                      dir="ltr"
                    />
                  </label>
                  <BilingualField
                    label={isAr ? 'العنوان' : 'Title'}
                    value={block.title}
                    onChange={(title) => patch(index, { ...block, title })}
                  />
                  <BilingualField
                    label={isAr ? 'الوصف (اختياري)' : 'Description (optional)'}
                    value={block.description ?? { en: '', ar: '' }}
                    multiline
                    onChange={(description) => patch(index, { ...block, description })}
                  />
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
