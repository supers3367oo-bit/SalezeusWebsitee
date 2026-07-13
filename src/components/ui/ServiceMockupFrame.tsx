type MockupVariant = 'browser' | 'phone' | 'showcase'

type Props = {
  image: string
  alt: string
  variant?: MockupVariant
  className?: string
  compact?: boolean
}

/** Shared frame so every service image has the same size and never crops. */
function ImageFrame({
  image,
  alt,
  className = '',
  compact = false,
  tone = 'light',
}: {
  image: string
  alt: string
  className?: string
  compact?: boolean
  tone?: 'light' | 'dark'
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-card shadow-[0_20px_56px_-14px_rgba(4,5,8,0.14)] ${
        tone === 'dark'
          ? 'bg-[#12151a]'
          : 'bg-gradient-to-br from-[#EEEDEB] via-sz-surface to-[#F7F5F1]'
      } ${
        compact ? 'aspect-[1/1] max-h-[min(480px,56vh)]' : 'aspect-[4/3]'
      } ${className}`}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 rounded-card ring-1 ring-inset ring-black/[0.04]" />
    </div>
  )
}

export default function ServiceMockupFrame({
  image,
  alt,
  variant = 'showcase',
  className = '',
  compact = false,
}: Props) {
  // Home / list cards: one uniform size, full image visible (no crop).
  if (compact) {
    return (
      <ImageFrame
        image={image}
        alt={alt}
        compact
        className={className}
        tone={variant === 'browser' ? 'dark' : 'light'}
      />
    )
  }

  // Detail pages keep light framing differences, still without cropping.
  if (variant === 'browser') {
    return (
      <div
        className={`relative overflow-hidden rounded-card bg-[#1a1d24] shadow-[0_24px_64px_-12px_rgba(4,5,8,0.22)] ${className}`}
      >
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </span>
          <div className="mx-2 flex h-6 flex-1 items-center rounded bg-white/[0.06] px-3">
            <span
              className="truncate text-[10px] text-white/35"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              salezeus.com
            </span>
          </div>
        </div>
        <div className="aspect-[16/10] overflow-hidden bg-[#0e1014]">
          <img
            src={image}
            alt={alt}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
    )
  }

  return (
    <ImageFrame
      image={image}
      alt={alt}
      className={className}
      tone={variant === 'phone' ? 'light' : 'light'}
    />
  )
}
