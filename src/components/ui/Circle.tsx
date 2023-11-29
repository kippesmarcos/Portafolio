interface Props {
    titleNumber: number | string;
    sizeBox: string;
    fontSize: number;
}

export const Circle = ({ titleNumber, sizeBox, fontSize }: Props) => {
    return (
        <div
            className="bg-primary rounded-full flex justify-center items-center"
            style={{ width: sizeBox, height: sizeBox }}
        >
            <p className="font-semibold text-primary-foreground" style={{ fontSize }}>{titleNumber}</p>
        </div>
    )
}