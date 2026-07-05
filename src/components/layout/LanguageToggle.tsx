import clsx from 'clsx'
import { useLocale } from '../../providers/LocaleProvider'
import './LanguageToggle.css'

export default function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale, t } = useLocale()
  const isArabic = locale === 'ar'

  return (
    <button
      type="button"
      dir="ltr"
      onClick={toggleLocale}
      className={clsx('lang-toggle', className)}
      aria-label={isArabic ? t('nav.switchToEnglish') : t('nav.switchToArabic')}
      aria-pressed={isArabic}
    >
      <span className="lang-toggle__track" aria-hidden>
        <span className={clsx('lang-toggle__pill', isArabic && 'lang-toggle__pill--ar')} />
        <span className={clsx('lang-toggle__label', !isArabic && 'lang-toggle__label--active')}>
          EN
        </span>
        <span className={clsx('lang-toggle__label lang-toggle__label--ar', isArabic && 'lang-toggle__label--active')}>
          ع
        </span>
      </span>
    </button>
  )
}
