import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-wrap-balancer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '@/styles/globals.css'

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default appWithTranslation(App)