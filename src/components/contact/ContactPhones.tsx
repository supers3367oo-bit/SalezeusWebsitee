import { useCmsContact } from '../../cms/useCmsContact'

type Props = {
  className?: string
  labelClassName?: string
  phoneClassName?: string
}

export default function ContactPhones({
  className = 'space-y-4',
  labelClassName = 'text-white/30 text-xs mb-1',
  phoneClassName = 'text-white/60 hover:text-white transition-colors duration-200',
}: Props) {
  const { offices } = useCmsContact()

  return (
    <div className={className}>
      {offices.map((office) => (
        <div key={office.id}>
          <p className={labelClassName} style={{ fontFamily: 'var(--font-body)' }}>
            {office.label}
          </p>
          <a
            href={`tel:${office.phoneE164}`}
            className={phoneClassName}
            dir="ltr"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              unicodeBidi: 'isolate',
            }}
          >
            {office.phoneDisplay}
          </a>
        </div>
      ))}
    </div>
  )
}
