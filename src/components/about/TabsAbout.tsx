import { useRef } from 'react'
import { Button, Tab, Tabs } from '@nextui-org/react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Balancer from 'react-wrap-balancer'
import { IItemAbout } from '@/interfaces'


interface Props {
    itemsAbout: IItemAbout[]
}

export const TabsAbout = ({ itemsAbout }:Props) => {

    const baseTabRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = (direction: 'left' | 'right') => {
        if (!baseTabRef.current) return

        const value = direction === 'left' ? -200 : +200
        const currentValue = baseTabRef.current.scrollLeft

        baseTabRef.current.scroll({
            left: currentValue + value,
            behavior: "smooth"
        })
    }

    return (
        <div>

            <div className="flex justify-between items-center lg:hidden">
                <Button
                    variant="light"
                    isIconOnly
                    onClick={() => handleScroll('left')}
                    size="sm"
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Button>

                <Button
                    variant="light"
                    isIconOnly
                    onClick={() => handleScroll('right')}
                    size="sm"
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </Button>
            </div>

            <div className="lg:flex lg:gap-4">
                <Tabs
                    aria-label="Options"
                    variant="light"
                    ref={baseTabRef}
                    classNames={{
                        base: "h-[48px] w-full lg:w-auto lg:h-auto",
                        tab: ["lg:justify-start", "h-full", "lg:h-auto"],
                        tabContent: ["w-[225px]", "line-clamp-2", "whitespace-normal", "lg:text-center"],
                        tabList: "lg:flex-col h-full lg:h-fit"
                    }}
                    color="primary"
                >
                    {itemsAbout.map((item, i) => (
                        <Tab className="flex-1" key={item.title} title={item.title}>
                            <div className="w-full min-h-[225px]">
                                <p>
                                    <Balancer>
                                        {item.description}
                                    </Balancer>
                                </p>
                            </div>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>
    )
}
