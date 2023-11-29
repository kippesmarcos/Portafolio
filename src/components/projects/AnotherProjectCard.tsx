import { FC } from 'react'
import { Card, CardBody, CardHeader, CardFooter, Link } from '@nextui-org/react'
import { CarpterSVG, GitHubSVG, OpenSVG } from '../icons'
import { Project } from '@/interfaces'
import Balancer from 'react-wrap-balancer'

interface Props {
    project: Omit<Project, 'src' | 'state'>
}

export const AnotherProjectCard: FC<Props> = ({ project }) => {
    const { title, description, technologies, linksType } = project

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between w-full">
                    <div>
                        <CarpterSVG />
                    </div>

                    <div className="flex items-center gap-5">
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
            </CardHeader>
            <CardBody className="py-2">
                <h4 className="text-lg mb-2 capitalize font-semibold">{title}</h4>
                <p className="text-small">
                    {/* <Balancer> */}
                        {description}
                    {/* </Balancer> */}
                </p>
            </CardBody>
            <CardFooter className="px-5">
                <div className="flex gap-5">
                    {
                        technologies.map(tech => (
                            <p key={tech} className="text-small text-primary">{tech}</p>
                        ))
                    }
                    <p className="text-small text-primary">...</p>
                </div>
            </CardFooter>
        </Card>
    )
}