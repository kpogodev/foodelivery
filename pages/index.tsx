import type { NextPage } from 'next'
import Head from 'next/head'
import Header from 'components/header/Header'
import About from 'components/homepage/about/About'
import Hero from 'components/homepage/hero/Hero'
import Menu from 'components/homepage/menu/Menu'
import Media from 'components/homepage/media/Media'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Media />
    </div>
  )
}

export default Home
