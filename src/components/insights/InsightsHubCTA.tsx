import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { useLocale } from '../../providers/LocaleProvider'

export default function InsightsHubCTA() {
  const { t } = useLocale()
  const reduce = useReducedMotion() ?? false

  return (
    <section className="section-surface section-padding border-t border-sz-border">
      <div className="section-container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-sz-dark mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.12,
            }}
          >
            {t('insightsPage.hubTitle')}
          </h2>

          <ScrollReveal
            className="mb-10"
            textClassName="text-sz-primary/50"
            blurStrength={3}
            baseOpacity={0.12}
          >
            {t('insightsPage.hubSubtitle')}
          </ScrollReveal>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/#contact">{t('insightsPage.startConversation')}</Button>
            <Button to="/portfolio" size="sm">
              {t('insightsPage.viewWork')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
