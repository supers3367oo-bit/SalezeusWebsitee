import { useEffect, useState, type FormEvent } from 'react'
import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'
import PhoneCountryInput from './PhoneCountryInput'
import { DEFAULT_COUNTRY_ISO, formatPhoneE164, getDefaultCountry } from '../../data/countries'
import {
  isValidEmail,
  resolveInitialContactEmail,
  setStoredContactEmail,
} from '../../lib/contactFormStorage'
import { useLocale } from '../../providers/LocaleProvider'

export type ContactReason = 'service' | 'join'

type FormState = {
  name: string
  email: string
  countryIso: string
  phoneNational: string
  reason: ContactReason
  message: string
}

const INITIAL: FormState = {
  name: '',
  email: resolveInitialContactEmail(),
  countryIso: DEFAULT_COUNTRY_ISO,
  phoneNational: '',
  reason: 'service',
  message: '',
}

function createFreshForm(preserveEmail = true): FormState {
  return {
    ...INITIAL,
    email: preserveEmail ? resolveInitialContactEmail() : '',
  }
}

const REASON_VALUES: ContactReason[] = ['service', 'join']

const fieldClass =
  'w-full rounded-[10px] bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/35 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3258A4]/30'

const labelClass = 'block text-white/55 mb-2 text-sm'
const labelStyle = { fontFamily: 'var(--font-body)' } as const

function RequiredLabel({ htmlFor, children }: { htmlFor?: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className={labelClass} style={labelStyle}>
      {children}
      <span className="text-[#F0B80D] ms-0.5" aria-hidden>
        *
      </span>
    </label>
  )
}

export default function ContactForm() {
  const { t } = useLocale()
  const reduce = useReducedMotion() ?? false
  const [form, setForm] = useState<FormState>(() => createFreshForm())
  const [submitted, setSubmitted] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showEmailField, setShowEmailField] = useState(false)
  const [showEmailAutoHint, setShowEmailAutoHint] = useState(() => Boolean(resolveInitialContactEmail()))

  const reasonLabels: Record<ContactReason, string> = {
    service: t('contact.form.serviceRequest'),
    join: t('contact.form.joinUs'),
  }

  useEffect(() => {
    const resolved = resolveInitialContactEmail()
    if (!resolved) return
    setForm((prev) => (prev.email ? prev : { ...prev, email: resolved }))
    setShowEmailAutoHint(true)
  }, [])

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (key === 'phoneNational') setPhoneError('')
    if (key === 'email') {
      setEmailError('')
      setShowEmailAutoHint(false)
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    const phoneDigits = form.phoneNational.replace(/\D/g, '')
    if (phoneDigits.length < 6) {
      setPhoneError(t('contact.form.phoneError'))
      return
    }

    if (!isValidEmail(form.email)) {
      setEmailError(t('contact.form.emailError'))
      setShowEmailField(true)
      return
    }

    setPhoneError('')
    setEmailError('')
    setStoredContactEmail(form.email)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-card border border-white/10 bg-white/[0.05] backdrop-blur-md p-8 lg:p-10 text-center"
      >
        <h2
          className="text-white mb-3"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          {t('contact.form.successTitleAlt')}
        </h2>
        <p className="text-white/50 mb-6" style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65 }}>
          {t('contact.form.successBody')}
        </p>
        <Button
          type="button"
          size="sm"
          onClick={() => {
            setForm(createFreshForm())
            setSubmitted(false)
            setPhoneError('')
            setEmailError('')
            setShowEmailField(false)
            setShowEmailAutoHint(Boolean(resolveInitialContactEmail()))
          }}
        >
          {t('contact.form.sendAnotherAlt')}
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-card border border-white/10 bg-white/[0.05] backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
      autoComplete="on"
    >
      {!showEmailField && (
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          onBlur={(e) => setStoredContactEmail(e.target.value)}
          className="sr-only"
          tabIndex={-1}
          aria-hidden
        />
      )}

      <div className="mb-5">
        <RequiredLabel htmlFor="contact-name">{t('contact.form.name')}</RequiredLabel>
        <input
          id="contact-name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className={fieldClass}
          style={{ fontFamily: 'var(--font-body)', fontSize: 15 }}
          placeholder={t('contact.form.namePlaceholder')}
        />
      </div>

      {showEmailField && (
        <div className="mb-5">
          <RequiredLabel htmlFor="contact-email-visible">{t('contact.form.email')}</RequiredLabel>
          <input
            id="contact-email-visible"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            onBlur={(e) => setStoredContactEmail(e.target.value)}
            className={fieldClass}
            style={{ fontFamily: 'var(--font-body)', fontSize: 15 }}
            placeholder={t('contact.form.emailPlaceholder')}
          />
          {emailError && (
            <p className="mt-2 text-sm text-[#F0B80D]" style={{ fontFamily: 'var(--font-body)' }} role="alert">
              {emailError}
            </p>
          )}
        </div>
      )}

      {!showEmailField && showEmailAutoHint && form.email && (
        <p className="mb-5 text-xs text-white/35" style={{ fontFamily: 'var(--font-body)' }}>
          {t('contact.form.autoFillHint')}
        </p>
      )}

      {!showEmailField && emailError && (
        <p className="mb-5 text-sm text-[#F0B80D]" style={{ fontFamily: 'var(--font-body)' }} role="alert">
          {emailError}
        </p>
      )}

      <div className="mb-5">
        <RequiredLabel htmlFor="contact-phone">{t('contact.form.phone')}</RequiredLabel>
        <PhoneCountryInput
          inputId="contact-phone"
          required
          countryIso={form.countryIso}
          nationalNumber={form.phoneNational}
          onCountryChange={(iso2) => update('countryIso', iso2)}
          onNationalNumberChange={(value) => update('phoneNational', value)}
        />
        {phoneError && (
          <p className="mt-2 text-sm text-[#F0B80D]" style={{ fontFamily: 'var(--font-body)' }} role="alert">
            {phoneError}
          </p>
        )}
      </div>

      <fieldset className="mb-5 border-0 p-0 m-0">
        <legend className={labelClass} style={labelStyle}>
          {t('contact.form.reasonLegend')}
        </legend>
        <div className="flex flex-wrap gap-2">
          {REASON_VALUES.map((value) => {
            const active = form.reason === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => update('reason', value)}
                aria-pressed={active}
                className={clsx(
                  'px-4 py-2.5 rounded-full text-sm border transition-colors duration-200 min-h-[44px]',
                  active
                    ? 'bg-white text-sz-dark border-white'
                    : 'bg-transparent text-white/55 border-white/15 hover:border-white/30 hover:text-white'
                )}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {reasonLabels[value]}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="mb-8">
        <label htmlFor="contact-message" className={labelClass} style={labelStyle}>
          {t('contact.form.message')}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={clsx(fieldClass, 'resize-y min-h-[140px]')}
          style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6 }}
          placeholder={t('contact.form.messagePlaceholder')}
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto justify-center">
        {t('contact.form.submitAlt')}
      </Button>
    </motion.form>
  )
}
