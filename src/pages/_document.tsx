import { Html, Head, Main, NextScript } from 'next/document'
import { inter } from '@/font/inter'

export default function Document() {
  return (
    <Html className={ inter.variable }>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}