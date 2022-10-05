import type { NextPage } from 'next'
import { motion } from 'framer-motion'
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
    <motion.div
      key='home-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Meta />
      <Hero />
      <About />
      <Menu />
      <Media />
      <HowItWorks />
      <LatestPosts />
      <GetInTouch />
    </motion.div>
  )
}

export default Home
