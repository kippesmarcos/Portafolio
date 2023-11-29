import { useThemeUncontrolled } from '@/hooks'

export const OpenSVG = () => {

    const [, colorOne] = useThemeUncontrolled().colorsContrast

    return (
        <svg  width="28.25" height="28.25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>{"open-external"}</title>
            <path
                fill={ colorOne }
                width="20%"
                height="20%"
                fillRule="evenodd"
                d="M213.333 128v42.666H128V384h213.333v-85.334H384l.001 128H85.333V128h128ZM448 64v170.667h-42.667v-97.832L228.418 313.752l-30.17-30.17 176.915-176.916h-97.83V64H448Z"
            />
        </svg>
    )
}
