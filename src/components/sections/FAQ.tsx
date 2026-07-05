import { useMemo, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import { useLocale } from '../../providers/LocaleProvider'

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const

export default function FAQ() {
  const { t } = useLocale()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = useMemo(
    () =>
      FAQ_KEYS.map((key) => ({
        q: t(`faq.items.${key}.q`),
        a: t(`faq.items.${key}.a`),
      })),
    [t]
  )

  return (
    <section className="section-surface section-padding" id="faq">
      <div className="section-container">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          <div className="lg:col-span-2">
            <span className="label-tag mb-3 block">{t('faq.label')}</span>
            <h2 className="heading-lg text-sz-dark mb-5">
              {t('faq.titleLine1')}<br />{t('faq.titleLine2')}
            </h2>
            <p
              className="text-sz-secondary mb-8"
              style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7 }}
            >
              {t('faq.subtitle')}
            </p>
            <Button href="#contact">
              {t('faq.cta')}
            </Button>
          </div>

          <div className="lg:col-span-3 space-y-0 divide-y divide-sz-border">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div key={FAQ_KEYS[i]}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-start group"
                  >
                    <span
                      className="font-medium text-sz-dark group-hover:text-sz-interaction transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: 16 }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full border border-sz-border flex items-center justify-center transition-all duration-200 mt-0.5"
                      style={{
                        borderColor: isOpen ? '#3258A4' : '#E8E4DE',
                        color: isOpen ? '#3258A4' : '#303640',
                      }}
                    >
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          className="text-sz-secondary pb-5 pe-10"
                          style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7 }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
