import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { WHATSAPP_URL } from '../../data/contact'
import { useLocale } from '../../providers/LocaleProvider'
import './FloatingActions.css'

export default function FloatingActions() {
  const { t } = useLocale()

  return (
    <div className="floating-actions-wrap fixed bottom-6 end-6 z-40" role="group" aria-label={t('floating.groupAria')}>
      <div className="floating-dual-btn">
        <div className="floating-dual-btn__slant" aria-hidden />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-dual-btn__segment floating-dual-btn__segment--whatsapp group"
          aria-label={t('floating.whatsappAria')}
        >
          <span>{t('floating.whatsapp')}</span>
          <span className="floating-dual-btn__icon">
            <WhatsAppIcon className="h-[15px] w-[15px]" />
          </span>
        </a>

        <Link
          to="/contact"
          className="floating-dual-btn__segment floating-dual-btn__segment--start group"
          aria-label={t('floating.startNowAria')}
        >
          <span>{t('floating.startNow')}</span>
          <span className="floating-dual-btn__icon">
            <ArrowUpRight className="h-[15px] w-[15px]" strokeWidth={2.25} />
          </span>
        </Link>
      </div>
    </div>
  )
}
