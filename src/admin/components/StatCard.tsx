import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

type Props = {
  label: string
  value: string | number
  hint?: string
  icon: LucideIcon
  to?: string
  delay?: number
}

export default function StatCard({ label, value, hint, icon: Icon, to, delay = 0 }: Props) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full overflow-hidden rounded-[1.35rem] border border-white bg-white p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_-28px_rgba(50,88,164,0.35)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sz-interaction/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute -end-8 -top-10 h-28 w-28 rounded-full bg-sz-interaction/[0.07] blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-sz-interaction/[0.14]" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sz-primary/40">
            {label}
          </p>
          <p className="mt-3 font-heading text-[2rem] font-semibold leading-none tracking-tight text-sz-dark tabular-nums">
            {value}
          </p>
          {hint ? <p className="mt-2 text-xs text-sz-primary/50">{hint}</p> : null}
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="rounded-2xl bg-sz-interaction/10 p-2.5 text-sz-interaction ring-1 ring-sz-interaction/10 transition duration-300 group-hover:bg-sz-interaction group-hover:text-white group-hover:ring-sz-interaction/20">
            <Icon className="h-[18px] w-[18px]" />
          </div>
          {to ? (
            <ArrowUpRight className="h-3.5 w-3.5 text-sz-primary/20 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sz-interaction rtl:group-hover:-translate-x-0.5 rtl:-scale-x-100" />
          ) : null}
        </div>
      </div>
    </motion.div>
  )

  if (to) {
    return (
      <Link
        to={to}
        className="block h-full rounded-[1.35rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-sz-interaction"
      >
        {inner}
      </Link>
    )
  }

  return inner
}
