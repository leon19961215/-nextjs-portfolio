import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import '@/styles/globals.css'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-medium-image-zoom/dist/styles.css'

export const metadata = {
  title: 'Hal\'s castle',
  description: 'Hal\'s blog and gallery',
}

export default function App({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
