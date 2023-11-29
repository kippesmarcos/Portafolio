import { createRef } from 'react'
// import { useTheme, Text } from '@nextui-org/react'
import { useTranslation } from 'next-i18next'

import { ButtonContact, ButtonDownload } from '@/components'
import { TextName } from '@/components/home'
import { useIsMounted } from '@/hooks'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Balancer from 'react-wrap-balancer'

interface ChildrenProps {
    text: string
}

const Position = () => (
    <h1 className="text-4xl text-gradient md:text-6xl md:leading-[1.5em] tracking-tighter font-semibold mb-3">
        Desarrollador Web
    </h1>
)

const Im = ({ text }: ChildrenProps) => (
    <p className="mt-1 md:mt-0 tracking-wide">
        {text}
    </p>
)

const Description = ({ text }: ChildrenProps) => (
    <p className="text-base mb-5 tracking-tight sm:text-xl max-w-2xl">
        <Balancer>
            {text}
        </Balancer>
    </p>
)

const FullName = () => {
    return (
        <div className="flex gap-x-3 flex-wrap mb-2.5" >
            <TextName text='Marcos Ezequiel Kippes' />
        </div>
    )
}

export const Hero = () => {
    const { isMounted } = useIsMounted(1000)
    const { t } = useTranslation('home')

    return (
        <section className="h-[calc(100vh-80px*3)] md:h-[calc(100vh-80px*2)] flex items-center">
            <div style={{ display: isMounted ? "block" : "none" }}>
                <TransitionGroup component={null}>
                    {
                        isMounted && (
                            [
                                <Position key="position" />,
                                <Im key="i-am" text={t('hero.presentation')} />,
                                <FullName key="fullname" />,
                                <Description key="description" text={t('hero.description')} />,
                                <div key="buttons" className="flex gap-2">
                                    <ButtonContact text={t('hero.contact')} />
                                    <ButtonDownload text={t('hero.cv')} />
                                </div>
                            ].map((element, i) => {
                                const node = createRef<any>()

                                return (
                                    <CSSTransition key={i} classNames="fadedown" timeout={2000} nodeRef={node}>
                                        <div style={{ transitionDelay: `${i * 100}ms` }} ref={node}>
                                            {element}
                                        </div>
                                    </CSSTransition>

                                )
                            })
                        )
                    }
                </TransitionGroup>
            </div>
        </section>
    )
}