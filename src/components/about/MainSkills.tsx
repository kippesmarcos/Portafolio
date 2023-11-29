import { Tooltip } from '@nextui-org/react'
import { config } from '@/config'

interface Props {
    title: string
}

export const MainSkills = ({ title }:Props) => {
    return (
        <div>
            <h3 className="text-primary text-center mb-5 font-semibold">{ title }</h3>

            <div className="container max-w-screen-md mx-auto px-0">
                <div className="flex justify-center lg:justify-between gap-14 lg:gap-5 flex-wrap">
                    {
                        config.skills.main.map(({ name, logo }, i) => (
                            <div key={name} className="grid place-content-center">
                                <Tooltip content={name} color="primary">
                                    <div className={`animation-updown-${i % 2 === 0 ? 'up' : 'down'} h-12 w-12 lg:h-14 lg:w-14`}>
                                        {logo}
                                    </div>
                                </Tooltip>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}