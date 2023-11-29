import resolveConfig from 'tailwindcss/resolveConfig'
import { theme, content } from '@/../tailwind.config'

export const tailwindTheme = resolveConfig({
    theme, content
}).theme as any