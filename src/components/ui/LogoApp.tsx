import { FC } from 'react'
import { LogoSVGApp } from '../icons'
import { useTheme } from 'next-themes'

interface Props {
    width: string;
    height: string;
}

const colorSVG: { [key: string]: 'white' | 'black' } = {
    light: 'black',
    dark: 'white'
}

export const LogoApp: FC<Props> = ({ width, height }) => {
    const { theme } = useTheme()
    // const theme = 'light'

    return (
        // <NoSsr>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m24 16.17l-9.24 5.33l-9.24 5.34V5.5l9.24 5.33L24 16.17zm0 0l9.24-5.34l9.24-5.33v21.34l-9.24-5.34L24 16.17z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M42.48 26.84L24 42.5V16.17l9.24 5.33l9.24 5.34zm-36.96 0l9.24-5.34L24 16.17V42.5L5.52 26.84z"/></svg>
        // </NoSsr>
    )
}