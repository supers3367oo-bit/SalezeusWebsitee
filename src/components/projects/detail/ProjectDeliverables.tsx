import { motion, useReducedMotion } from 'framer-motion'
import type { ProjectDetail } from '../../../types/projectDetail'
import { ProjectSectionHeading, revealProps } from './shared'
import { useLocale } from '../../../providers/LocaleProvider'

type Props = {
  project: ProjectDetail
}

export default function ProjectDeliverables({ project }: Props) {
  const { t } = useLocale()
  const reduce = useReducedMotion() ?? false

  return (
    <section className="section-surface section-padding border-t border-sz-border/60">
      <div className="section-container">
        <motion.div {...revealProps(reduce)}>
          <ProjectSectionHeading title={t('projectDetail.whatWeDelivered')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 max-w-4xl">
            {project.deliverables.map((item, i) => (
              <div
                key={item}
                className="rounded-card border border-sz-border bg-white px-5 py-4"
              >
                <span
                  className="text-sz-interaction mr-2"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-sz-dark"
                  style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5 }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
