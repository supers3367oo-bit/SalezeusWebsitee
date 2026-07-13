import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/ui/Button'
import ProjectDetailHero from '../components/projects/detail/ProjectDetailHero'
import ProjectBehanceGallery from '../components/projects/detail/ProjectBehanceGallery'
import ProjectBodyBlocks from '../components/projects/detail/ProjectBodyBlocks'
import ProjectMoreWork from '../components/projects/detail/ProjectMoreWork'
import { ProjectGalleryProvider } from '../components/projects/detail/ProjectGalleryContext'
import { collectProjectGalleryImages } from '../lib/collectProjectGalleryImages'
import { refreshLocomotiveScroll } from '../lib/locomotive'
import { useLocale } from '../providers/LocaleProvider'
import { useProjectDetail, useRelatedProjects } from '../i18n/useLocalizedData'

export default function ProjectDetailPage() {
  const { t } = useLocale()
  const { slug } = useParams<{ slug: string }>()
  const project = useProjectDetail(slug)
  const related = useRelatedProjects(slug)
  const galleryImages = useMemo(
    () => (project ? collectProjectGalleryImages(project) : []),
    [project],
  )
  const bodyBlocks = project?.bodyBlocks ?? []
  const useStackedBody = bodyBlocks.length > 0

  useEffect(() => {
    requestAnimationFrame(() => refreshLocomotiveScroll())
  }, [slug, useStackedBody])

  if (!project) {
    return (
      <section className="section-surface flex min-h-[60vh] items-center pt-28">
        <div className="section-container w-full text-center">
          <h1
            className="mb-4 text-sz-dark"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600 }}
          >
            {t('errors.projectNotFound')}
          </h1>
          <Button href="/portfolio" size="sm">
            {t('errors.backToPortfolio')}
          </Button>
        </div>
      </section>
    )
  }

  if (useStackedBody) {
    return (
      <>
        <ProjectDetailHero project={project} />
        <ProjectBodyBlocks blocks={bodyBlocks} />
        <ProjectMoreWork project={project} related={related} />
      </>
    )
  }

  return (
    <ProjectGalleryProvider images={galleryImages}>
      <ProjectDetailHero project={project} />
      <ProjectBehanceGallery images={galleryImages} projectTitle={project.client} />
      <ProjectMoreWork project={project} related={related} />
    </ProjectGalleryProvider>
  )
}
