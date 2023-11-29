import { FC } from 'react'
import { Circle } from '../ui'

interface Props {
    title: string;
    titleNumber?: number;
    my?: string;
}

const SectionTitle: FC<Props> = ({ title, titleNumber = 1, my = "my-6" }) => {
    return (
        <div className={`flex flex-col items-center ${my}`}>
            <div className="bg-gradient-to-b from-primary-foreground to-primary w-px h-32" />
            <Circle
                titleNumber={`0${titleNumber}`}
                sizeBox="40px"
                fontSize={16}
            />
            <h2 className="text-2xl text-primary font-semibold sm:text-3xl mt-2">{title}</h2>
        </div>
    )
}

export default SectionTitle