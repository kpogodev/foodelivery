import { InferGetStaticPropsType } from 'next'
import { motion } from 'framer-motion'
import { pageTransition } from 'utils/framer-animations'
import Meta from 'components/reusable/meta/Meta'
import About from 'components/homepage/about/About'
import Hero from 'components/homepage/hero/Hero'
import HeroContextProvider from 'context/HeroContext'
import Menu from 'components/homepage/menu/Menu'
import MenuContextProvider from 'context/MenuContext'
import Media from 'components/homepage/media/Media'
import HowItWorks from 'components/homepage/how_it_works/HowItWorks'
import LatestPosts from 'components/homepage/latest_posts/LatestPosts'
import GetInTouch from 'components/homepage/get_in_touch/GetInTouch'
import { NEXT_URL } from 'config'
import { MealsAPIResponse } from './api/meals'
import { HomepageAPIResponse } from './api/homepage'

const Home = ({ mealsData, homepageData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <motion.main key='home-page' {...pageTransition}>
      <Meta
        title={homepageData.data.attributes.page_title}
        description={homepageData.data.attributes.page_description}
      />
      <HeroContextProvider data={mealsData}>
        <Hero />
      </HeroContextProvider>
      <About
        description={homepageData.data.attributes.about_us_text}
        image={homepageData.data.attributes.about_us_image.data.attributes.url}
      />
      <MenuContextProvider initialState={{ meals: mealsData }}>
        <Menu />
      </MenuContextProvider>
      <Media
        header={homepageData.data.attributes.media_header}
        text={homepageData.data.attributes.media_text}
        videoSrc={homepageData.data.attributes.media_video.data.attributes.url}
        posterSrc='/placeholder.png'
      />
      <HowItWorks />
      <LatestPosts />
      <GetInTouch />
    </motion.main>
  )
}

export async function getStaticProps() {
  const mealsReponse = await fetch(`${NEXT_URL}/api/meals`)
  const mealsData = (await mealsReponse.json()) as MealsAPIResponse

  const homepageReponse = await fetch(`${NEXT_URL}/api/homepage`)
  const homepageData = (await homepageReponse.json()) as HomepageAPIResponse

  return {
    props: {
      mealsData: mealsData,
      homepageData: homepageData,
    },
  }
}

export default Home
