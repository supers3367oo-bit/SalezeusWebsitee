import BilingualField from '../components/BilingualField'
import { useAdminContent } from '../content/AdminContentContext'
import type { AdminSocialLinks } from '../types/adminContent'

const SOCIAL_FIELDS: {
  key: keyof AdminSocialLinks
  labelEn: string
  labelAr: string
  placeholder: string
}[] = [
  {
    key: 'linkedin',
    labelEn: 'LinkedIn',
    labelAr: 'لينكدإن',
    placeholder: 'https://www.linkedin.com/company/...',
  },
  {
    key: 'instagram',
    labelEn: 'Instagram',
    labelAr: 'إنستغرام',
    placeholder: 'https://www.instagram.com/...',
  },
  {
    key: 'twitter',
    labelEn: 'X / Twitter',
    labelAr: 'إكس / تويتر',
    placeholder: 'https://x.com/...',
  },
  {
    key: 'youtube',
    labelEn: 'YouTube',
    labelAr: 'يوتيوب',
    placeholder: 'https://www.youtube.com/@...',
  },
]

export default function ContactEditor() {
  const { content, setContent, uiLocale } = useAdminContent()
  const isAr = uiLocale === 'ar'
  if (!content) return null

  const { contact } = content
  const socialLinks = contact.socialLinks ?? {
    linkedin: '',
    instagram: '',
    twitter: '',
    youtube: '',
  }
  const inputClass =
    'w-full rounded-xl border border-sz-border bg-white px-3.5 py-2.5 text-sm outline-none focus:border-sz-interaction focus:ring-2 focus:ring-sz-interaction/20'

  const updateSocial = (key: keyof AdminSocialLinks, value: string) => {
    setContent((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        socialLinks: {
          ...prev.contact.socialLinks,
          [key]: value,
        },
      },
    }))
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <p className="text-sm text-sz-primary/65">
        {isAr
          ? 'البريد والمكاتب والأرقام وروابط السوشيال تُحفظ على السيرفر وتظهر في الفوتر وصفحة التواصل.'
          : 'Email, offices, phones, and social links save to the CMS server and appear in the footer and contact page.'}
      </p>

      <div className="space-y-5 rounded-2xl border border-sz-border bg-white p-5">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">{isAr ? 'البريد الإلكتروني' : 'Contact email'}</span>
          <input
            type="email"
            className={inputClass}
            value={contact.email}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, email: e.target.value },
              }))
            }
            dir="ltr"
          />
        </label>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium">
            {isAr ? 'هاتف واتساب (E.164)' : 'WhatsApp phone (E.164)'}
          </span>
          <input
            className={inputClass}
            value={contact.whatsappPhone}
            onChange={(e) =>
              setContent((prev) => ({
                ...prev,
                contact: { ...prev.contact, whatsappPhone: e.target.value },
              }))
            }
            dir="ltr"
            placeholder="+9055..."
          />
        </label>
      </div>

      <div className="space-y-4 rounded-2xl border border-sz-border bg-white p-5">
        <h3 className="font-heading text-base font-semibold">
          {isAr ? 'روابط السوشيال ميديا' : 'Social media links'}
        </h3>
        <p className="text-xs text-sz-primary/50">
          {isAr
            ? 'اترك الحقل فارغاً لإخفاء الأيقونة من الفوتر'
            : 'Leave empty to hide that icon from the footer'}
        </p>
        <div className="space-y-4">
          {SOCIAL_FIELDS.map((field) => (
            <label key={field.key} className="block space-y-1.5">
              <span className="text-sm font-medium">
                {isAr ? field.labelAr : field.labelEn}
              </span>
              <input
                className={inputClass}
                value={socialLinks[field.key]}
                onChange={(e) => updateSocial(field.key, e.target.value)}
                dir="ltr"
                placeholder={field.placeholder}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-heading text-base font-semibold">{isAr ? 'المكاتب' : 'Offices'}</h3>
        {contact.offices.map((office, index) => (
          <div key={office.id} className="space-y-4 rounded-2xl border border-sz-border bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-sz-interaction">
              {office.id}
            </p>
            <BilingualField
              label={isAr ? 'الاسم (يظهر في الفوتر)' : 'Label (shown in footer)'}
              value={office.label}
              onChange={(label) =>
                setContent((prev) => ({
                  ...prev,
                  contact: {
                    ...prev.contact,
                    offices: prev.contact.offices.map((o, i) =>
                      i === index ? { ...o, label } : o,
                    ),
                  },
                }))
              }
            />
            <label className="block space-y-1.5">
              <span className="text-sm font-medium">
                {isAr ? 'رقم الاتصال (E.164)' : 'Dial number (E.164)'}
              </span>
              <input
                className={inputClass}
                value={office.phoneE164}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    contact: {
                      ...prev.contact,
                      offices: prev.contact.offices.map((o, i) =>
                        i === index ? { ...o, phoneE164: e.target.value } : o,
                      ),
                    },
                  }))
                }
                dir="ltr"
                placeholder="+905518548129"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium">
                {isAr ? 'العرض على الموقع' : 'Display on site'}
              </span>
              <input
                className={inputClass}
                value={office.phoneDisplay}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    contact: {
                      ...prev.contact,
                      offices: prev.contact.offices.map((o, i) =>
                        i === index ? { ...o, phoneDisplay: e.target.value } : o,
                      ),
                    },
                  }))
                }
                dir="ltr"
                placeholder="+90 551 854 81 29"
              />
              <span className="text-[11px] text-sz-primary/45">
                {isAr
                  ? 'يُعرض دائماً من اليسار لليمين حتى في النسخة العربية'
                  : 'Always shown LTR, including on the Arabic site'}
              </span>
            </label>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-sz-border bg-sz-dark p-5 text-white">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-white/40">
          {isAr ? 'معاينة الفوتر' : 'Footer preview'}
        </p>
        <div className="space-y-4" dir={isAr ? 'rtl' : 'ltr'}>
          <div>
            <p className="mb-1 text-xs text-white/30">{isAr ? 'البريد' : 'Email'}</p>
            <p className="text-sm text-white/60" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
              {contact.email}
            </p>
          </div>
          {contact.offices.map((office) => (
            <div key={office.id}>
              <p className="mb-1 text-xs text-white/30">
                {isAr ? office.label.ar || office.label.en : office.label.en}
              </p>
              <p className="text-sm text-white/60" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
                {office.phoneDisplay}
              </p>
            </div>
          ))}
          <div>
            <p className="mb-2 text-xs text-white/30">
              {isAr ? 'السوشيال' : 'Social'}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-white/55" dir="ltr">
              {SOCIAL_FIELDS.filter((f) => socialLinks[f.key]?.trim()).map((f) => (
                <span
                  key={f.key}
                  className="rounded-full border border-white/15 px-2.5 py-1"
                >
                  {f.labelEn}
                </span>
              ))}
              {!SOCIAL_FIELDS.some((f) => socialLinks[f.key]?.trim()) ? (
                <span className="text-white/35">
                  {isAr ? 'لا روابط بعد' : 'No links yet'}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
