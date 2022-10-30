import { motion } from 'framer-motion'
import { pageTransition } from 'utils/framer-animations'
import PageHeading from 'components/reusable/page_heading/PageHeading'
import { InferGetStaticPropsType } from 'next'
import AboutMain from 'components/about_page/about_main/AboutMain'
import Counter from 'components/about_page/counter/Counter'
import Media from 'components/reusable/media/Media'
import Partners from 'components/about_page/partners/Partners'
import Meta from 'components/reusable/meta/Meta'
import { fetchAboutPageData } from 'lib/fetchAboutPageData'

const About = ({ aboutPageData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <motion.main {...pageTransition}>
      <Meta
        title={aboutPageData.data.attributes.page_title}
        description={aboutPageData.data.attributes.page_description}
      />
      <PageHeading
        title={aboutPageData.data.attributes.page_heading_title}
        backgroundColor={aboutPageData.data.attributes.page_heading_background_color}
        textColor={aboutPageData.data.attributes.page_heading_text_color}
        imgSrc={aboutPageData.data.attributes.page_heading_image.data.attributes.url}
      />
      <AboutMain
        header={aboutPageData.data.attributes.main_section_header}
        text={aboutPageData.data.attributes.main_section_text}
        bulletPoints={aboutPageData.data.attributes.main_section_bullet_points}
        imgSrc={aboutPageData.data.attributes.main_section_image.data.attributes.url}
        imgWidth={aboutPageData.data.attributes.main_section_image.data.attributes.width}
        imgHeight={aboutPageData.data.attributes.main_section_image.data.attributes.height}
      />
      <Counter
        happyClients={aboutPageData.data.attributes.counter_happy_clients}
        ordersEveryday={aboutPageData.data.attributes.counter_orders_everyday}
        professionals={aboutPageData.data.attributes.counter_professionals}
        daysWork={aboutPageData.data.attributes.counter_work_since}
      />
      <Media
        header={aboutPageData.data.attributes.media_header}
        text={aboutPageData.data.attributes.media_text}
        videoSrc={aboutPageData.data.attributes.media_video.data.attributes.url}
        posterSrc='/media_video_placeholder.webp'
      />
      <Partners />
    </motion.main>
  )
}

export async function getStaticProps() {
  const aboutPageData = await fetchAboutPageData()
  return {
    props: {
      aboutPageData,
    },
    revalidate: 60,
  }
}

export default About
