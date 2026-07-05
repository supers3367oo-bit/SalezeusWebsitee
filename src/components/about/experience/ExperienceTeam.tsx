import { useCallback, useMemo, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { TeamMember } from '../../../data/team'
import { useLocale } from '../../../providers/LocaleProvider'
import { useTeamMembers } from '../../../i18n/useLocalizedData'

const EASE = [0.22, 1, 0.36, 1] as const

function RolePill({ role, variant }: { role: string; variant: 'dark' | 'light' }) {
  return (
    <span
      className={clsx(
        'inline-block rounded-full px-2.5 py-1 text-[10px] sm:text-[11px] font-medium leading-none',
        variant === 'dark'
          ? 'bg-white text-[#040508]'
          : 'bg-sz-interaction-soft text-sz-interaction border border-sz-interaction/15'
      )}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {role}
    </span>
  )
}

function AvatarImage({
  src,
  alt,
  fallbackSrc,
  className,
}: {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
}) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      draggable={false}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        }
      }}
      className={clsx(
        'h-full w-full object-contain object-bottom pointer-events-none select-none',
        className
      )}
    />
  )
}

function CompactMember({
  member,
  isDimmed,
  reduce,
}: {
  member: TeamMember
  isDimmed: boolean
  reduce: boolean
}) {
  return (
    <motion.div
      className="flex w-full flex-col items-center"
      animate={{
        opacity: isDimmed ? 0.22 : 1,
        filter: isDimmed ? 'blur(8px)' : 'blur(0px)',
        scale: isDimmed ? 0.92 : 1,
      }}
      transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
    >
      <div
        className="relative mx-auto w-full max-w-[250px] sm:max-w-[280px] overflow-hidden"
        style={{ height: 'clamp(280px, 32vw, 380px)' }}
      >
        <AvatarImage
          src={member.src}
          alt={member.name}
          className="!h-[118%] !w-full !object-contain !object-top scale-[2.35] origin-top"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%]"
          style={{
            background: 'linear-gradient(to top, #040508 12%, rgba(4,5,8,0.55) 42%, transparent 100%)',
          }}
          aria-hidden
        />
      </div>

      <div
        className="relative z-10 -mt-6 w-full max-w-[250px] sm:max-w-[280px] rounded-lg border border-white/[0.08] px-3 py-2.5 sm:px-3.5 sm:py-3"
        style={{
          background: 'linear-gradient(180deg, rgba(18,20,26,0.96) 0%, rgba(10,11,15,0.98) 100%)',
          boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
        }}
      >
        <p
          className="truncate text-white"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 600 }}
        >
          <span className="text-white/55 mr-1">•</span>
          {member.name}
        </p>
        <div className="mt-2">
          <RolePill role={member.role} variant="dark" />
        </div>
      </div>
    </motion.div>
  )
}

function ExpandedPanel({
  member,
  reduce,
}: {
  member: TeamMember
  reduce: boolean
}) {
  return (
    <motion.div
      key={member.name}
      className="pointer-events-none flex w-full max-w-4xl flex-col items-stretch sm:flex-row sm:items-end"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, y: 10 }}
      transition={{ duration: reduce ? 0 : 0.38, ease: EASE }}
    >
      <div
        className="relative mx-auto w-full shrink-0 sm:mx-0 sm:w-[42%] sm:max-w-[320px]"
        style={{ height: 'clamp(240px, 32vw, 360px)' }}
      >
        <AvatarImage
          src={member.realSrc}
          alt={member.name}
          fallbackSrc={member.src}
          className="object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
          style={{
            background: 'linear-gradient(to top, #040508 4%, transparent 100%)',
          }}
          aria-hidden
        />
      </div>

      <motion.div
        className="relative z-10 -mt-6 w-full rounded-xl bg-white px-5 py-5 sm:-ml-8 sm:mt-0 sm:mb-8 sm:flex-1 sm:px-7 sm:py-7"
        initial={reduce ? false : { opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduce ? 0 : 0.35, delay: reduce ? 0 : 0.06, ease: EASE }}
        style={{ boxShadow: '0 20px 50px rgba(4,5,8,0.22)' }}
      >
        <RolePill role={member.role} variant="light" />
        <h3
          className="mt-4 text-sz-interaction leading-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.35rem, 2.8vw, 2rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          {member.name}
        </h3>
        <p
          className="mt-3 text-sz-primary/70 leading-relaxed"
          style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.75 }}
        >
          {member.aboutBio}
        </p>
      </motion.div>
    </motion.div>
  )
}

function TeamMemberSlot({
  member,
  isDimmed,
  reduce,
  onActivate,
}: {
  member: TeamMember
  isDimmed: boolean
  reduce: boolean
  onActivate: () => void
}) {
  return (
    <div className="relative z-10 flex flex-1 min-w-0 max-w-[280px] shrink-0 justify-center">
      <button
        type="button"
        className="group w-full cursor-pointer border-0 bg-transparent p-0 text-start"
        onMouseEnter={() => !reduce && onActivate()}
        onFocus={() => onActivate()}
        onClick={onActivate}
        aria-label={`${member.name}, ${member.role}`}
      >
        <CompactMember member={member} isDimmed={isDimmed} reduce={reduce} />
      </button>
    </div>
  )
}

function TeamRow({
  members,
  activeSrc,
  onActivate,
  onDeactivate,
  reduce,
}: {
  members: TeamMember[]
  activeSrc: string | null
  onActivate: (src: string) => void
  onDeactivate: () => void
  reduce: boolean
}) {
  const activeMember = members.find((member) => member.src === activeSrc) ?? null
  const rowHasActive = activeMember !== null

  return (
    <div
      className="relative"
      style={{ minHeight: 'clamp(340px, 36vw, 420px)' }}
      onMouseLeave={() => !reduce && onDeactivate()}
    >
      <div className="flex items-end justify-center gap-3 sm:gap-5 lg:gap-6 px-2 sm:px-4">
        {members.map((member) => (
          <TeamMemberSlot
            key={member.src}
            member={member}
            isDimmed={rowHasActive}
            reduce={reduce}
            onActivate={() => onActivate(member.src)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeMember && (
          <motion.div
            key={activeMember.name}
            className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center px-2 sm:px-4 pb-1"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
          >
            <ExpandedPanel member={activeMember} reduce={reduce} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ExperienceTeam() {
  const { t } = useLocale()
  const team = useTeamMembers()
  const teamRows = useMemo(
    () => [team.slice(0, 4), team.slice(4, 8), team.slice(8, 11)],
    [team]
  )
  const reduceMotion = useReducedMotion()
  const reduce = reduceMotion ?? false
  const [activeSrc, setActiveSrc] = useState<string | null>(null)

  const activate = useCallback((src: string) => {
    setActiveSrc(src)
  }, [])

  const deactivate = useCallback(() => {
    setActiveSrc(null)
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-[#040508] py-20 sm:py-24 lg:py-28"
      id="team"
      aria-labelledby="team-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 50% at 50% 100%, rgba(50,88,164,0.12) 0%, transparent 68%)',
        }}
        aria-hidden
      />

      <div className="section-container relative z-10">
        <h2
          id="team-heading"
          className="mb-12 sm:mb-14 lg:mb-16 text-center text-white"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            lineHeight: 1.08,
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          {t('experience.team.title')}
        </h2>

        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
          {teamRows.map((row, rowIndex) => (
            <TeamRow
              key={rowIndex}
              members={row}
              activeSrc={activeSrc}
              onActivate={activate}
              onDeactivate={deactivate}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
