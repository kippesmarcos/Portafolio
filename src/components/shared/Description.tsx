import { FC } from 'react'
import { cn } from '@nextui-org/react'
import Balancer from 'react-wrap-balancer';

interface Props {
    text: string;
    textAlign?: "text-start" | "text-end" | "text-left" | "text-right" | "text-center";
    size?: number;
    isBalancer?: boolean
}

export const Description: FC<Props> = ({ text, textAlign = "text-start", size, isBalancer = false }) => (
    <p
        className={cn(['text-base', 'tracking-tight', textAlign])}
        style={{ marginBottom: size !== 20 ? 0 : 30 }}
    >
        {
            isBalancer ? (
                <Balancer>
                    {text}
                </Balancer>
            ) : (
                <>{text}</>
            )
        }
    </p>
)