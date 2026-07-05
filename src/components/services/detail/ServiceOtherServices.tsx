import { motion, useReducedMotion } from 'framer-motion'
import ServiceCard from '../ServiceCard'
import type { Service } from '../../../types/services'
import { useLocale } from '../../../providers/LocaleProvider'

type Props = {
  services: Service[]
  currentTitle: string
}

export default function ServiceOtherServices({ services, currentTitle }: Props) {
  const { t } = useLocale()
  const reduce = useReducedMotion() ?? false

  if (services.length === 0) return null

  return (
    <section className="section-surface section-padding border-t border-sz-border">
      <div className="section-container">
        <motion.div
          className="mb-10 lg:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-xl">
            <span className="label-tag mb-3 block">{t('serviceDetail.moreFromSalezeus')}</span>
            <h2
              className="text-sz-dark"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                lineHeight: 1.12,
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              {t('serviceDetail.exploreOtherServices')}
            </h2>
            <p
              className="text-sz-secondary mt-4"
              style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7 }}
            >
              {t('serviceDetail.youViewed').replace('{service}', currentTitle.toLowerCase())}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <ServiceCard service={service} layout="grid" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
