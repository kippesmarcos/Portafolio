import { FC, useMemo } from 'react'
import { Switch } from '@nextui-org/react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from 'next-themes'

export const SwitchApp: FC = () => {
    const { theme, setTheme } = useTheme()
    const isSelected = useMemo(() => !(theme === 'dark'), [theme])

    const handleSwitch = (value: boolean) => {
        const selectedTheme = value ? 'light' : 'dark'
        setTheme(selectedTheme)
    }

    return (
        <Switch
            isSelected={isSelected}
            onValueChange={handleSwitch}
            color="primary"
            size="lg"

            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <FontAwesomeIcon icon={faSun} className={ className } />
                ) : (
                    <FontAwesomeIcon icon={faMoon} className={ className } />
                )
            }
        />
    )
}