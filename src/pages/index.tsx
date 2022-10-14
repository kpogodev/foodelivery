import { InferGetStaticPropsType } from 'next'
import { motion } from 'framer-motion'
import { pageTransition } from 'utils/framer-animations'
import Meta from 'components/reusable/meta/Meta'
import About from 'components/homepage/about/About'
import Hero from 'components/homepage/hero/Hero'
import HeroContextProvider from 'context/HeroContext'
import Menu from 'components/homepage/menu/Menu'
import Media from 'components/homepage/media/Media'
import HowItWorks from 'components/homepage/how_it_works/HowItWorks'
import LatestPosts from 'components/homepage/latest_posts/LatestPosts'
import GetInTouch from 'components/homepage/get_in_touch/GetInTouch'
import { NEXT_URL } from 'config'
import { MealsType } from './api/meals'

const Home = ({ mealsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <motion.main key='home-page' {...pageTransition}>
      <Meta />
      <HeroContextProvider data={mealsData}>
        <Hero />
      </HeroContextProvider>
      <About />
      <Menu />
      <Media />
      <HowItWorks />
      <LatestPosts />
      <GetInTouch />
    </motion.main>
  )
}

export async function getStaticProps() {
  const mealsReponse = await fetch(`${NEXT_URL}/api/meals`)
  const mealsData = await mealsReponse.json() as MealsType

  return {
    props: {
      mealsData: mealsData,
    },
  }
}

export default Home
