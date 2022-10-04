import type { NextPage } from 'next'
import Meta from 'components/reusable/meta/Meta'
import About from 'components/homepage/about/About'
import Hero from 'components/homepage/hero/Hero'
import Menu from 'components/homepage/menu/Menu'
import Media from 'components/homepage/media/Media'
import HowItWorks from 'components/homepage/how_it_works/HowItWorks'
import LatestPosts from 'components/homepage/latest_posts/LatestPosts'
import GetInTouch from 'components/homepage/get_in_touch/GetInTouch'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Hero />
      <About />
      <Menu />
      <Media />
      <HowItWorks />
      <LatestPosts />
      <GetInTouch />
    </>
  )
}

export default Home
