import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'framer-motion'
import ScrollReveal from '../../ui/ScrollReveal'
import PresenceMap from './PresenceMap'
import { refreshLocomotiveScroll } from '../../../lib/locomotive'
import { useLocale } from '../../../providers/LocaleProvider'

gsap.registerPlugin(ScrollTrigger)

export default function ExperienceBorders() {
  const { t, locale } = useLocale()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const mapWrapRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const reduce = reduceMotion ?? false

  useEffect(() => {
    if (reduce) return

    const section = sectionRef.current
    const header = headerRef.current
    const mapWrap = mapWrapRef.current
    if (!section || !header || !mapWrap) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            end: 'top 58%',
            scrub: 1,
          },
        }
      )

      gsap.fromTo(
        mapWrap,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            end: 'top 48%',
            scrub: 1.2,
          },
        }
      )
    }, section)

    requestAnimationFrame(() => refreshLocomotiveScroll())

    return () => ctx.revert()
  }, [reduce, locale])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#040508] flex flex-col min-h-0 lg:min-h-[100dvh]"
      aria-labelledby="location-heading"
    >
      <div
        ref={headerRef}
        className="relative z-10 shrink-0 px-6 pt-20 pb-4 text-center sm:pt-28 sm:pb-5 lg:pt-32 lg:pb-10"
      >
        <h2
          id="location-heading"
          className="mb-4 text-white sm:mb-5 lg:mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
            lineHeight: 1.08,
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          {t('experience.borders.title')}
        </h2>

        <ScrollReveal
          className="mx-auto max-w-xl"
          textClassName="text-white/45"
          blurStrength={4}
          baseOpacity={0.12}
          scrollStart="top bottom-=8%"
          scrollEnd="top center"
        >
          {t('experience.borders.subtitle')}
        </ScrollReveal>
      </div>

      <div ref={mapWrapRef} className="relative z-0 mt-5 w-full pb-3 sm:mt-6 sm:pb-6 lg:mt-auto lg:pb-8">
        <PresenceMap />
      </div>
    </section>
  )
}
