import { useTranslation } from 'next-i18next'
import { ButtonContact, Description } from '@/components'
import SectionTitle from '@/components/shared/SectionTitle'

export const Contact = () => {
  const { t } = useTranslation('home')

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-evenly">
      <div>
        <SectionTitle title={t('contact.title')} titleNumber={3} />
        <div className="grid place-content-center">

          <div className="max-w-screen-sm">
            <Description
              text={t('contact.description')}
              textAlign="text-center"
              size={20}
            />
          </div>
        </div>

        <div className="grid place-content-center">
          <ButtonContact text={t('contact.ui.contactAction')} />
        </div>
      </div>

    </section>
  )
}