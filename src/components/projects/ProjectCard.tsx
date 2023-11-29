import { FC, useCallback } from 'react'
import Balancer from 'react-wrap-balancer'
import { useTranslation } from 'next-i18next'
import { Link, Chip, Image } from '@nextui-org/react'
import { GitHubSVG, OpenSVG } from '../icons'
import { Description } from '../shared'
import { Project } from '@/interfaces'
interface Props {
    project: Project
    direction?: "row-reverse" | "row"
}

export const ProjectCard: FC<Props> = ({ direction = "row", project }) => {
    const { t } = useTranslation('home')
    const { title, description, linksType, technologies, src, state } = project

    const getUrlImage = useCallback(() => {
        const link = linksType.find(e => e.name === 'browser')
        if (!link) {
            throw new Error('Invalid value')
        }
        return link.url
    }, [linksType])

    return (
        <div className={`grid gap-4 grid-flow-row grid-cols-1 sm:grid-cols-2 mb-10`}>
            <div className={`${direction === 'row' ? "order-row" : "order-row-reverse"}`}>
                <div className="flex justify-center items-center h-full">
                    <div className={`w-full bg-transparent sm:w-[80%]`}>
                        <Link href={getUrlImage()} isExternal>
                            <Image
                                src={src}
                                width="100%"
                                alt={`${title} - Image`}
                                style={{ objectFit: "contain" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${direction !== 'row' ? "order-row" : "order-row-reverse"}`}>
                <div className="flex flex-col gap-4" style={{ textAlign: direction === "row-reverse" ? "start" : "end" }}>
                    <p className="uppercase text-xs text-primary tracking-normal w-full font-medium">
                        {t('projects.detail')}
                    </p>

                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4"
                        style={{ flexDirection: direction !== "row" ? "row" : "row-reverse" }}
                    >
                        <h4
                            className="text-2xl text-start text-gradient font-bold tracking-tighter w-full sm:text-[28px] sm:leading-[32px]"
                            style={{ textAlign: direction === "row-reverse" ? "start" : "end" }}
                            >
                                <Balancer>
                                    {title}
                                </Balancer>
                        </h4>

                        <div className={`w-full justify-end ${direction === 'row' ? "sm:justify-start" : "sm:justify-end"}`} style={{ display: !state ? "flex" : "none" }}>
                            <Chip color="success" variant="dot">{ t('projects.textState') }</Chip>
                        </div>
                    </div>

                    <Description size={14} text={description} textAlign={direction === "row-reverse" ? "text-start" : "text-end"} isBalancer />
                    <div
                        className="flex gap-2 flex-wrap"
                        style={{ flexDirection: direction !== "row" ? "row" : "row-reverse" }}
                    >
                        {
                            technologies.map(tech => (
                                <p key={tech} className="text-xs text-primary">{tech}</p>
                            ))
                        }
                    </div>

                    <div
                        className="flex items-center gap-5"
                        style={{ flexDirection: direction !== "row" ? "row" : "row-reverse" }}
                    >
                        {
                            linksType.map(({ name, url }) => {
                                switch (name) {
                                    case 'github':
                                        return (
                                            <Link key={name} href={url} isExternal>
                                                <GitHubSVG />
                                            </Link>
                                        )
                                    case 'browser':
                                        return (
                                            <Link key={name} href={url} isExternal>
                                                <OpenSVG />
                                            </Link>
                                        )
                                    default:
                                        return null
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}