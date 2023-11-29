
import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainLayout } from '@/components/layout'
import { About, Contact, Hero, Projects } from '@/screens'
import { useTranslation } from 'next-i18next'

const HomePage: NextPage = () => {
  const { t } = useTranslation('home')

  return (
    <MainLayout title="Marcos Ezequiel Kippes | Full Stack Developer" description={ t('hero.description') }>
      <Hero />
      <div className="h-[calc(80px*2)]" />
      <Projects />
      <About />
      <Contact />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale ?? 'en', ['home', 'projects'])

  return {
    props: {
      ...translations
    }
  }
}

export default HomePage