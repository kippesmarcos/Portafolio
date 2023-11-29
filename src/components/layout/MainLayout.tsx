import { FC, PropsWithChildren, useState } from 'react'
import { NextSeo } from 'next-seo'

import { Loader, SocialMedia } from '../home'
import { Footer, NavbarApp } from '../ui'
import NoSsr from '../shared/NoSsr'

interface Props extends PropsWithChildren {
    title: string;
    description: string;
}


export const MainLayout: FC<Props> = ({ children, title, description }) => {

    const [isLoading, setIsLoading] = useState(true)

    const handleFinish = () => setIsLoading(false)

    return (
        <>
            <NextSeo
                title={title}
                description={ description }
                canonical="https://rafael-sequeira-sandoval.dev"
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: "rafael sequeira sandoval, full stack developer, back-end developer, front-end developer, javascript developer, react developer"
                    }
                ]}
                additionalLinkTags={[
                    {
                        rel: "alternate",
                        hrefLang: "es",
                        href: "https://marcosezequielkippes.com.ar/es"
                    },
                    {
                        rel: "alternate",
                        hrefLang: "en",
                        href: "https://marcosezequielkippes.com.ar"
                    },
                    {
                        rel: "alternate",
                        hrefLang: "x-default",
                        href: "https://marcosezequielkippes.com.ar"
                    },
                ]}
                openGraph={{
                    url: "https://marcosezequielkippes.com.ar",
                    title: title,
                    siteName: title,
                    images: [
                        {
                            url: "https://marcosezequielkippes.com.ar/logo.webp",
                            width: 512,
                            height: 512,
                            alt: "Logo de Marcos Ezequiel Kippes",
                            type: "image/webp"
                        }
                    ]
                }}
                twitter={{
                    cardType: "summary_large_image"
                }}
            />

            {
                isLoading ? (
                    <NoSsr>
                        <Loader onFinish={handleFinish} />
                    </NoSsr>
                ) : (
                    <>
                        <NavbarApp />

                        <div className="container py-2 z-10 mx-auto relative max-w-screen-lg">
                            {children}
                        <Footer />
                        </div>

                        <SocialMedia />

                    </>
                )
            }

        </>
    )
}