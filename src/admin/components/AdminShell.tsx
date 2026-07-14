import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AdminSidebar from './AdminSidebar'
import AdminTopbar from './AdminTopbar'
import AdminToasts from './AdminToasts'
import { useAdminContent } from '../content/AdminContentContext'
import { useLocale } from '../../providers/LocaleProvider'

const TITLES: Record<string, { en: string; ar: string }> = {
  '/admin': { en: 'Overview', ar: 'نظرة عامة' },
  '/admin/pages': { en: 'Page copy', ar: 'نصوص الصفحات' },
  '/admin/case-studies': { en: 'Case studies', ar: 'دراسة الحالات' },
  '/admin/media': { en: 'Site images', ar: 'صور الموقع' },
  '/admin/team': { en: 'Team', ar: 'الفريق' },
  '/admin/services': { en: 'Services', ar: 'الخدمات' },
  '/admin/projects': { en: 'Projects', ar: 'المشاريع' },
  '/admin/insights': { en: 'Insights', ar: 'المقالات' },
  '/admin/contact': { en: 'Contact', ar: 'التواصل' },
}

function resolveTitle(pathname: string, isAr: boolean) {
  const exact = TITLES[pathname]
  if (exact) return isAr ? exact.ar : exact.en

  if (pathname.startsWith('/admin/pages/')) return isAr ? 'تحرير نصوص الصفحة' : 'Edit page copy'
  if (pathname.startsWith('/admin/team/')) return isAr ? 'تعديل عضو الفريق' : 'Edit team member'
  if (pathname.startsWith('/admin/services/')) return isAr ? 'تعديل الخدمة' : 'Edit service'
  if (pathname.startsWith('/admin/projects/')) return isAr ? 'تعديل المشروع' : 'Edit project'
  if (pathname.startsWith('/admin/insights/')) return isAr ? 'تعديل المقال' : 'Edit article'

  return isAr ? 'لوحة التحكم' : 'Admin'
}

export default function AdminShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { uiLocale, loading } = useAdminContent()
  const { locale: siteLocale } = useLocale()
  const isAr = uiLocale === 'ar'
  const title = resolveTitle(location.pathname, isAr)

  useEffect(() => {
    document.documentElement.lang = uiLocale
    document.documentElement.dir = uiLocale === 'ar' ? 'rtl' : 'ltr'
    return () => {
      document.documentElement.lang = siteLocale
      document.documentElement.dir = siteLocale === 'ar' ? 'rtl' : 'ltr'
    }
  }, [uiLocale, siteLocale])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="admin-scroll relative h-svh overflow-x-clip overflow-y-auto font-body text-sz-dark antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#eef1f6]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(50,88,164,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.7),transparent_40%)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(15,23,42,0.045) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <AdminSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="lg:ps-[18rem]">
        <AdminTopbar title={title} onMenuClick={() => setMenuOpen(true)} />
        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:pb-10">
          {loading ? (
            <div className="flex min-h-[40vh] items-center justify-center">
              <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-5 py-3 text-sm text-sz-primary/65 shadow-sm backdrop-blur">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-sz-interaction/50" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-sz-interaction" />
                </span>
                {isAr ? 'جاري تحميل المحتوى…' : 'Loading content…'}
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          )}
        </main>
      </div>
      <AdminToasts />
    </div>
  )
}
