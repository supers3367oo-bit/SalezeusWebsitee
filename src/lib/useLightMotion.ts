import { useEffect, useState } from 'react'
import { shouldUseLightMotion } from './motion'

export function useLightMotion() {
  const [lightMotion, setLightMotion] = useState(() => shouldUseLightMotion())

  useEffect(() => {
    const sync = () => setLightMotion(shouldUseLightMotion())

    sync()

    const widthMql = window.matchMedia('(max-width: 1023px)')
    const motionMql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarseMql = window.matchMedia('(pointer: coarse)')

    widthMql.addEventListener('change', sync)
    motionMql.addEventListener('change', sync)
    coarseMql.addEventListener('change', sync)

    return () => {
      widthMql.removeEventListener('change', sync)
      motionMql.removeEventListener('change', sync)
      coarseMql.removeEventListener('change', sync)
    }
  }, [])

  return lightMotion
}
