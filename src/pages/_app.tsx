import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/layout/Layout'
import { BurgerContextProvider } from 'components/layout/header/burger/BurgerContext'
import { v4 as uuidv4 } from 'uuid'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BurgerContextProvider>
      <Layout>
        <Component key={uuidv4()} {...pageProps} />
      </Layout>
    </BurgerContextProvider>
  )
}

export default MyApp
