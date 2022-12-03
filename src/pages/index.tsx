import { InferGetStaticPropsType } from "next"
import { motion } from "framer-motion"
import { pageTransition } from "utils/framer-animations"
import Meta from "components/reusable/meta/Meta"
import About from "components/home_page/about/About"
import Hero from "components/home_page/hero/Hero"
import HeroContextProvider from "context/HeroContext"
import Menu from "components/home_page/menu/Menu"
import MenuContextProvider from "context/MenuContext"
import Media from "components/reusable/media/Media"
import HowItWorks from "components/home_page/how_it_works/HowItWorks"
import LatestPosts from "components/reusable/latest_posts/LatestPosts"
import GetInTouch from "components/reusable/get_in_touch/GetInTouch"
import { fetchHomepageData } from "lib/fetchHomepageData"
import { fetchMealsData } from "lib/fetchMealsData"

const Home = ({ mealsData, homepageData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { attributes: pageData } = homepageData.data
  return (
    <motion.main {...pageTransition}>
      <Meta title={pageData.seo.title} description={pageData.seo.description} />
      <HeroContextProvider data={mealsData}>
        <Hero />
      </HeroContextProvider>
      <About description={pageData.about_us_text} image={pageData.about_us_image.data.attributes.url} />
      <MenuContextProvider initialState={{ meals: mealsData }}>
        <Menu />
      </MenuContextProvider>
      <Media
        header={pageData.media_header}
        text={pageData.media_text}
        videoSrc={pageData.media_video.data.attributes.url}
        posterSrc='/media_video_placeholder.webp'
      />
      <HowItWorks />
      <LatestPosts />
      <GetInTouch />
    </motion.main>
  )
}

export async function getStaticProps() {
  const homepageData = await fetchHomepageData()
  const mealsData = await fetchMealsData()

  return {
    props: {
      homepageData,
      mealsData,
    },
    revalidate: 60,
  }
}

export default Home
