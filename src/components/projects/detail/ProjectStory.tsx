import { motion, useReducedMotion } from 'framer-motion'
import type { ProjectDetail } from '../../../types/projectDetail'
import { revealProps } from './shared'
import { useLocale } from '../../../providers/LocaleProvider'

type Props = {
  project: ProjectDetail
}

export default function ProjectStory({ project }: Props) {
  const { t } = useLocale()
  const reduce = useReducedMotion() ?? false
  const storyBlocks = [
    { key: 'challenge', title: t('projectDetail.story.challenge') },
    { key: 'approach', title: t('projectDetail.story.approach') },
    { key: 'result', title: t('projectDetail.story.result') },
  ] as const

  return (
    <section className="section-surface section-padding border-t border-sz-border/60">
      <div className="section-container">
        <div className="max-w-[65ch] space-y-10 lg:space-y-12">
          {storyBlocks.map((block, i) => (
            <motion.div key={block.key} {...revealProps(reduce, i * 0.06)}>
              <h2
                className="text-sz-dark mb-3"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                {block.title}
              </h2>
              <p
                className="text-sz-secondary"
                style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.75 }}
              >
                {project[block.key]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
