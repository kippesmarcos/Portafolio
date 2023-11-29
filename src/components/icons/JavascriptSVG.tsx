import { useThemeUncontrolled } from '@/hooks'

interface Props {
    size?: string;
}

export const JavascriptSVG = ({ size = "60px" }: Props) => {
    const [ , colorOne ] = useThemeUncontrolled().colorsContrast

    return (
        <svg
            width={ size }
            height={ size }
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={0.7}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
            <path
                d="M12.5 8V7.83333C12.5 7.09695 11.903 6.5 11.1667 6.5H10C9.17157 6.5 8.5 7.17157 8.5 8C8.5 8.82843 9.17157 9.5 10 9.5H11C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5H10C9.17157 12.5 8.5 11.8284 8.5 11M6.5 6V11C6.5 11.8284 5.82843 12.5 5 12.5C4.17157 12.5 3.5 11.8284 3.5 11M0.5 0.5H14.5V14.5H0.5V0.5Z"
                stroke={ colorOne }
            />
            </g>
        </svg>
    //     <svg
    //     viewBox="0 0 32 32"
    //     xmlns="http://www.w3.org/2000/svg"
    //     xmlnsXlink="http://www.w3.org/1999/xlink"
    //     fill={ colorTwo }
    //     stroke={ colorOne }
    //     strokeWidth={2.3}
    //   >
    //     <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    //     <g
    //       id="SVGRepo_tracerCarrier"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     />
    //     <g id="SVGRepo_iconCarrier">
    //       <path
    //         fill={ colorTwo }
    //         d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"
    //       />
    //     </g>
    //   </svg>
    )
}
