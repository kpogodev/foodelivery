import type { NextPage } from 'next'
import About from 'components/homepage/about/About'
import Hero from 'components/homepage/hero/Hero'
import Menu from 'components/homepage/menu/Menu'
import Media from 'components/homepage/media/Media'
import HowItWorks from 'components/homepage/how_it_works/HowItWorks'
import Meta from 'components/reusable/meta/Meta'

const Home: NextPage = () => {
  return (
    <>
      <Meta/>
      <Hero />
      <About />
      <Menu />
      <Media />
      <HowItWorks />
    </>
  )
}

export default Home
