import { CSSProperties, useMemo } from 'react'
import { useTheme } from 'next-themes'

export const useThemeUncontrolled = () => {
    const { theme } = useTheme()

    const controlledStyles:CSSProperties = useMemo(() => ({
        color: theme === "dark" ? '#FFFFFF' : "#000000"
    }), [theme])    

    const selectedColor:string = useMemo(() => theme === "dark" ? '#FFFFFF' : "#000000", [theme])

    const colorsContrast = useMemo(
        () => [ theme === "dark" ? '#000000' : '#FFFFFF', theme === "dark" ? '#FFFFFF' : '#000000']
        , [theme])

    return {
        controlledStyles,
        selectedColor,
        colorsContrast // not used
    }
}
