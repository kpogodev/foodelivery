import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/layout/Layout'
import { BurgerContextProvider } from 'components/layout/header/burger/BurgerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BurgerContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BurgerContextProvider>
  )
}

export default MyApp
