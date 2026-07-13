import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Eye, Languages } from 'lucide-react'
import type { Locale } from '../../i18n/types'
import { AdminPreviewProvider } from '../../providers/AdminPreviewContext'

type Props = {
  title: string
  subtitle?: string
  previewLocale: Locale
  onPreviewLocaleChange: (locale: Locale) => void
  isArUi: boolean
  footer?: string
  children: ReactNode
  /** Virtual device width used for layout + scale-to-fit */
  baseWidth?: number
}

/**
 * Responsive live preview: lays out site sections at a phone width,
 * then scales to fill the available panel on any screen size.
 */
export default function AdminLivePreview({
  title,
  subtitle,
  previewLocale,
  onPreviewLocaleChange,
  isArUi,
  footer,
  children,
  baseWidth = 390,
}: Props) {
  const shellRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [canvasHeight, setCanvasHeight] = useState(480)

  useLayoutEffect(() => {
    const shell = shellRef.current
    const canvas = canvasRef.current
    if (!shell || !canvas) return

    const update = () => {
      const width = shell.clientWidth
      if (width > 0) {
        setScale(width / baseWidth)
      }
      setCanvasHeight(canvas.scrollHeight)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(shell)
    ro.observe(canvas)

    const images = canvas.querySelectorAll('img')
    images.forEach((img) => {
      if (!img.complete) img.addEventListener('load', update, { once: true })
    })

    return () => ro.disconnect()
  }, [baseWidth, children, previewLocale])

  const defaultFooter = isArUi
    ? 'نفس مكوّنات الموقع — تتحدّث مباشرة مع التعديل'
    : 'Same site components — updates live as you edit'

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-sz-border bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sz-border bg-sz-surface/80 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <div className="flex min-w-0 items-center gap-2">
          <Eye className="h-4 w-4 shrink-0 text-sz-interaction" />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sz-dark">{title}</p>
            {subtitle ? (
              <p className="truncate text-[11px] text-sz-primary/50">{subtitle}</p>
            ) : null}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-full border border-sz-border bg-white p-0.5">
          <button
            type="button"
            onClick={() => onPreviewLocaleChange('en')}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
              previewLocale === 'en'
                ? 'bg-sz-interaction text-white'
                : 'text-sz-primary/55 hover:text-sz-dark'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => onPreviewLocaleChange('ar')}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
              previewLocale === 'ar'
                ? 'bg-sz-accent text-sz-dark'
                : 'text-sz-primary/55 hover:text-sz-dark'
            }`}
          >
            AR
          </button>
        </div>
      </div>

      <div
        ref={shellRef}
        className="relative w-full min-w-0 overflow-x-hidden overflow-y-auto bg-[#f7f5f1] max-h-[min(48vh,400px)] sm:max-h-[min(58vh,520px)] xl:max-h-[min(75vh,720px)]"
        dir={previewLocale === 'ar' ? 'rtl' : 'ltr'}
        lang={previewLocale}
      >
        <div
          className="relative w-full"
          style={{ height: Math.max(120, canvasHeight * scale) }}
        >
          <div
            ref={canvasRef}
            className="admin-preview-canvas pointer-events-none origin-top-left select-none [&_a]:pointer-events-none [&_button]:pointer-events-none"
            style={{
              width: baseWidth,
              transform: `scale(${scale})`,
            }}
          >
            <AdminPreviewProvider>
              <div className="w-full min-w-0 overflow-x-hidden [&_.section-container]:!max-w-none [&_.section-container]:!px-4 [&_.section-padding]:!px-4">
                {children}
              </div>
            </AdminPreviewProvider>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 border-t border-sz-border bg-sz-surface/60 px-3 py-2 text-[11px] leading-snug text-sz-primary/45 sm:px-4">
        <Languages className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <span>{footer ?? defaultFooter}</span>
      </div>
    </div>
  )
}
