export function shouldUseLightMotion() {
  if (typeof window === 'undefined') return true
  return (
    window.innerWidth < 1024 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  )
}
