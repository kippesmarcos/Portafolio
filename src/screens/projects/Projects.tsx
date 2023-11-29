import { useTranslation } from 'next-i18next'

import { AnotherProjectCard, ProjectCard } from '@/components/projects'
import { type Project } from '@/interfaces'
import SectionTitle from '@/components/shared/SectionTitle'

export const Projects = () => {

    const { t } = useTranslation('home')
    const projectsF: Project[] = t('projects.featured', { returnObjects: true })
    const projectsS: Project[] = t('projects.secondary', { returnObjects: true })

    return (
        <section id="projects">
            <SectionTitle title={t('projects.title')} />

            {
                projectsF.map((proyect, i) => (
                    <ProjectCard key={proyect.title} project={proyect} direction={i % 2 === 0 ? "row" : "row-reverse"} />
                ))
            }


            <h3 className="mt-10 mb-5 uppercase text-sm text-primary leading-normal text-center w-full">
                {t('projects.subtitle')}
            </h3>

            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    projectsS.map(e => (
                        <AnotherProjectCard key={e.title} project={e} />
                    ))
                }
            </div>

        </section>
    )
}

export default Projects