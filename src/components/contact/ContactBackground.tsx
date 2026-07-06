import { useReducedMotion } from 'framer-motion'
import Aurora from '../ui/Aurora'
import { useLightMotion } from '../../lib/useLightMotion'

const OVERLAY_GRADIENT =
  'radial-gradient(ellipse 80% 60% at 20% 0%, rgba(50,88,164,0.2) 0%, transparent 55%), radial-gradient(ellipse 55% 45% at 90% 85%, rgba(240,184,13,0.08) 0%, transparent 50%), linear-gradient(180deg, rgba(4,5,8,0.2) 0%, rgba(4,5,8,0.92) 100%)'

export default function ContactBackground() {
  const reduce = useReducedMotion() ?? false
  const lightMotion = useLightMotion()
  const showAurora = !reduce && !lightMotion

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {showAurora && (
        <div className="absolute inset-0 opacity-[0.55]">
          <Aurora
            colorStops={['#3258A4', '#1a2d52', '#040508']}
            amplitude={0.65}
            blend={0.32}
            speed={0.4}
          />
        </div>
      )}

      <div className="absolute inset-0" style={{ background: OVERLAY_GRADIENT }} />
    </div>
  )
}
