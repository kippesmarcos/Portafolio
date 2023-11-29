import { cn } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { FC } from 'react'

interface Props {
    text: string;
}

// linear-gradient(180deg,rgba(0,0,0,.8),#000)
export const TextName: FC<Props> = ({ text }) => {
    const { theme } = useTheme()

    return (
        <h2
            className={
                cn(
                    "text-3xl",
                    "sm:text-4xl",
                    "sm:leading-[48px]",
                    theme === "dark"
                        ? "text-fullname-dark"
                        : "text-fullname-light",
                    "font-semibold")
            }
        >
            {text}
        </h2>
    )
}