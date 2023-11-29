
import { useTranslation } from 'next-i18next'
import SectionTitle from '@/components/shared/SectionTitle'
import { MainSkills, SecondarySkills, TabsAbout } from '@/components'

export const About = () => {
    const { t } = useTranslation('home')

    return (
        <section id="about" className="container max-w-screen-md mx-auto px-0">
            <SectionTitle title={t('about.title')} titleNumber={2} />

            <div className="flex flex-col gap-16">

                <TabsAbout itemsAbout={t('about.items', { returnObjects: true })} />

                <MainSkills title={ t('about.subtitle') } />

                <SecondarySkills title={ t('about.detail') } />

            </div>

        </section>
    )
}