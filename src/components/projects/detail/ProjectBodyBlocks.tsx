import { ExternalLink } from 'lucide-react'
import type { ProjectBodyBlock } from '../../../types/projectDetail'

function toEmbedUrl(raw: string): string | null {
  try {
    const url = new URL(raw.trim())
    const host = url.hostname.replace(/^www\./, '')

    if (host === 'youtu.be') {
      const id = url.pathname.replace(/^\//, '').split('/')[0]
      return id ? `https://www.youtube.com/embed/${id}` : null
    }
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const id = url.searchParams.get('v')
      if (id) return `https://www.youtube.com/embed/${id}`
      const parts = url.pathname.split('/').filter(Boolean)
      if (parts[0] === 'embed' && parts[1]) return `https://www.youtube.com/embed/${parts[1]}`
      if (parts[0] === 'shorts' && parts[1]) return `https://www.youtube.com/embed/${parts[1]}`
    }
    if (host === 'vimeo.com') {
      const id = url.pathname.split('/').filter(Boolean)[0]
      return id && /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}` : null
    }
    if (host === 'player.vimeo.com') {
      return raw.trim()
    }
  } catch {
    return null
  }
  return null
}

type Props = {
  blocks: ProjectBodyBlock[]
}

export default function ProjectBodyBlocks({ blocks }: Props) {
  if (!blocks.length) return null

  return (
    <section className="bg-sz-surface pb-16 pt-4 sm:pb-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:gap-14 sm:px-6 lg:px-8">
        {blocks.map((block) => {
          if (block.type === 'image') {
            return (
              <figure key={block.id} className="overflow-hidden rounded-2xl bg-sz-dark/5">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </figure>
            )
          }

          if (block.type === 'text') {
            return (
              <div key={block.id} className="mx-auto max-w-2xl px-1">
                {block.title ? (
                  <h2
                    className="mb-3 text-sz-dark"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)',
                      fontWeight: 600,
                    }}
                  >
                    {block.title}
                  </h2>
                ) : null}
                <p
                  className="whitespace-pre-line text-sz-secondary"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(15px, 1.6vw, 17px)',
                    lineHeight: 1.75,
                  }}
                >
                  {block.body}
                </p>
              </div>
            )
          }

          if (block.type === 'video') {
            const embed = toEmbedUrl(block.url)
            return (
              <div key={block.id} className="space-y-3">
                <div className="overflow-hidden rounded-2xl bg-sz-dark shadow-lg">
                  {embed ? (
                    <div className="aspect-video w-full">
                      <iframe
                        src={embed}
                        title={block.caption || 'Project video'}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-16 text-sm text-white/80 underline-offset-2 hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {block.url}
                    </a>
                  )}
                </div>
                {block.caption ? (
                  <p className="text-center text-sm text-sz-primary/55">{block.caption}</p>
                ) : null}
              </div>
            )
          }

          if (block.type === 'link') {
            return (
              <a
                key={block.id}
                href={block.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 rounded-2xl border border-sz-border bg-white p-5 transition hover:border-sz-interaction/40 hover:shadow-md sm:p-6"
              >
                <div className="min-w-0">
                  <p className="font-heading text-lg font-semibold text-sz-dark group-hover:text-sz-interaction">
                    {block.title}
                  </p>
                  {block.description ? (
                    <p className="mt-1.5 text-sm leading-relaxed text-sz-primary/60">
                      {block.description}
                    </p>
                  ) : null}
                  <p className="mt-2 truncate text-xs text-sz-interaction/80" dir="ltr">
                    {block.url}
                  </p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-sz-primary/35 transition group-hover:text-sz-interaction" />
              </a>
            )
          }

          return null
        })}
      </div>
    </section>
  )
}
