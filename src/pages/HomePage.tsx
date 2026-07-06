import Hero from '../components/sections/Hero'
import ClientReviews from '../components/sections/ClientReviews'
import TrustedBy from '../components/sections/TrustedBy'
import ImpactNumbers from '../components/sections/ImpactNumbers'
import OurSolutions from '../components/sections/OurSolutions'
import FeaturedSuccess from '../components/sections/FeaturedSuccess'
import PortfolioPreview from '../components/sections/PortfolioPreview'
import WhySalezeus from '../components/sections/WhySalezeus'
import LatestInsights from '../components/sections/LatestInsights'
import FAQ from '../components/sections/FAQ'
import ClosingFuture from '../components/sections/ClosingFuture'
import { useLocale } from '../providers/LocaleProvider'

export default function HomePage() {
  const { locale } = useLocale()

  return (
    <>
      <Hero />
      <ClientReviews />
      <TrustedBy />
      <ImpactNumbers />
      <OurSolutions />
      <FeaturedSuccess key={locale} />
      <PortfolioPreview />
      <WhySalezeus />
      <LatestInsights />
      <FAQ />
      <ClosingFuture sectionId="contact" />
    </>
  )
}
