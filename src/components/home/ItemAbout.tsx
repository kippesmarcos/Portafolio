import { FC, useMemo } from 'react';
import { Circle } from '../ui';
import { type IItemAbout } from '@/interfaces';

interface Props {
    itemAbout: IItemAbout;
    itemIndex: number;
}

const ItemAbout:FC<Props> = ({ itemAbout, itemIndex }) => {
    const { title, description } = itemAbout

    const isReverse = useMemo(() => itemIndex % 2 === 0, [itemIndex])

    return (
        <div>
            <div
                className="flex gap-3 items-center mb-3"
                style={{
                    flexDirection: isReverse ? "row-reverse" : "row",
                }}
            >
                <div className="w-[24px]">
                    <Circle
                        titleNumber={itemIndex}
                        sizeBox="24px"
                        fontSize={14}
                    />
                </div>

                <h5 className="text-primary mb-0" style={{ textAlign: isReverse ? "end" : "start" }}>{title}</h5>
            </div>
            <div className="flex" style={{ justifyContent: isReverse ? "end" : "start" }}>
                <div
                    className="max-w-screen-sm"
                    style={{
                        paddingLeft: isReverse ? 0 : "34px",
                        paddingRight: isReverse ? "34px" : 0,
                    }}
                >
                    <p style={{ textAlign: isReverse ? "end" : "start" }}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemAbout