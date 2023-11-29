
import Marquee from 'react-fast-marquee'
import Balancer from 'react-wrap-balancer'
import { config } from '@/config'

interface Props {
    title: string
}

export const SecondarySkills = ({ title }:Props) => {
    return (
        <div>
            <h4 className="text-primary text-sm text-center mb-4 font-semibold">
                <Balancer>
                    {title}
                </Balancer>
            </h4>

            <div className="relative w-full">
                <div className="absolute top-0 left-0 w-[40px] lg:w-[80px] h-full bg-gradient-to-r from-primary-foreground via-transparent to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-[40px] lg:w-[80px] h-full bg-gradient-to-l from-primary-foreground via-transparent to-transparent z-10"></div>

                <Marquee autoFill pauseOnHover>
                    {
                        config.skills.secondary.map(({ name, logo }, i) => (
                            <div key={name + i} className="px-4">
                                {logo}
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
}