import { useMemo } from 'react'
import type { PageCopyField } from '../types/adminContent'
import type { Locale, TranslationTree } from '../../i18n/types'
import { getRootLabel } from '../utils/pageCopy'
import { pageFieldsToTree } from '../../cms/adapters'
import { DraftLocaleProvider } from '../../providers/LocaleProvider'
import AdminLivePreview from './AdminLivePreview'

import Hero from '../../components/sections/Hero'
import TrustedBy from '../../components/sections/TrustedBy'
import ImpactNumbers from '../../components/sections/ImpactNumbers'
import OurSolutions from '../../components/sections/OurSolutions'
import ClientReviews from '../../components/sections/ClientReviews'
import FeaturedSuccess from '../../components/sections/FeaturedSuccess'
import PortfolioPreview from '../../components/sections/PortfolioPreview'
import WhySalezeus from '../../components/sections/WhySalezeus'
import LatestInsights from '../../components/sections/LatestInsights'
import FAQ from '../../components/sections/FAQ'
import ClosingFuture from '../../components/sections/ClosingFuture'
import ExperienceOpening from '../../components/about/experience/ExperienceOpening'
import ExperiencePhilosophy from '../../components/about/experience/ExperiencePhilosophy'
import ExperienceCreate from '../../components/about/experience/ExperienceCreate'
import ExperienceTeam from '../../components/about/experience/ExperienceTeam'
import ExperienceImpact from '../../components/about/experience/ExperienceImpact'
import ExperienceBorders from '../../components/about/experience/ExperienceBorders'
import ServicesHero from '../../components/services/ServicesHero'
import ServicesGrid from '../../components/services/ServicesGrid'
import PortfolioHero from '../../components/portfolio/PortfolioHero'
import InsightsHero from '../../components/insights/InsightsHero'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import FloatingActions from '../../components/ui/FloatingActions'
import ContactForm from '../../components/contact/ContactForm'
import ContactPhones from '../../components/contact/ContactPhones'
import ContactLocation from '../../components/contact/ContactLocation'

type Props = {
  root: string
  fields: PageCopyField[]
  /** All page-copy fields so overlay includes sibling roots used by shared chrome */
  allFields?: PageCopyField[]
  previewLocale: Locale
  onPreviewLocaleChange: (locale: Locale) => void
  isArUi: boolean
}

function SectionBody({ root }: { root: string }) {
  switch (root) {
    case 'hero':
      return <Hero />
    case 'trustedBy':
      return <TrustedBy />
    case 'impact':
      return <ImpactNumbers />
    case 'solutions':
      return <OurSolutions />
    case 'reviews':
      return <ClientReviews />
    case 'featured':
    case 'featuredSuccess':
      return <FeaturedSuccess />
    case 'portfolio':
      return <PortfolioPreview />
    case 'why':
      return <WhySalezeus />
    case 'insights':
      return <LatestInsights />
    case 'faq':
      return <FAQ />
    case 'closing':
      return <ClosingFuture sectionId="contact-preview" />
    case 'experience':
      return (
        <>
          <ExperienceOpening />
          <ExperiencePhilosophy />
          <ExperienceCreate />
          <ExperienceTeam />
          <ExperienceImpact />
          <ExperienceBorders />
        </>
      )
    case 'services':
      return (
        <>
          <ServicesHero />
          <ServicesGrid />
        </>
      )
    case 'serviceDetail':
      return <ServicesHero />
    case 'portfolioPage':
      return <PortfolioHero />
    case 'insightsPage':
      return <InsightsHero />
    case 'contact':
      return (
        <div className="section-padding">
          <div className="section-container space-y-10">
            <ContactPhones />
            <ContactForm />
            <ContactLocation />
          </div>
        </div>
      )
    case 'nav':
      return (
        <div className="relative min-h-[120px] bg-sz-dark">
          <Navbar />
        </div>
      )
    case 'floating':
      return (
        <div className="relative h-40 overflow-hidden bg-sz-surface">
          <FloatingActions />
        </div>
      )
    case 'footer':
      return <Footer />
    case 'common':
    case 'errors':
      return (
        <div className="p-6 text-sm text-sz-secondary">
          {root === 'errors'
            ? 'Error strings appear on empty / not-found states across the site.'
            : 'Common strings are shared across multiple pages.'}
        </div>
      )
    default:
      return (
        <div className="p-6 text-sm text-sz-secondary">No live preview for “{root}”.</div>
      )
  }
}

export default function PageSectionPreview({
  root,
  fields,
  allFields,
  previewLocale,
  onPreviewLocaleChange,
  isArUi,
}: Props) {
  const overlay = useMemo<TranslationTree>(() => {
    const source = allFields?.length ? allFields : fields
    return pageFieldsToTree(source, previewLocale)
  }, [allFields, fields, previewLocale])

  return (
    <AdminLivePreview
      title={isArUi ? 'معاينة الموقع' : 'Live site preview'}
      subtitle={getRootLabel(root, isArUi ? 'ar' : 'en')}
      previewLocale={previewLocale}
      onPreviewLocaleChange={onPreviewLocaleChange}
      isArUi={isArUi}
    >
      <DraftLocaleProvider locale={previewLocale} overlay={overlay}>
        <SectionBody root={root} />
      </DraftLocaleProvider>
    </AdminLivePreview>
  )
}
