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
  const { attributes: pageData } = aboutPageData.data

  return (
    <motion.main {...pageTransition}>
      <Meta
        title={pageData.page_title}
        description={pageData.page_description}
      />
      <PageHeading
        title={pageData.page_heading_title}
        backgroundColor={pageData.page_heading_background_color}
        textColor={pageData.page_heading_text_color}
        imgSrc={pageData.page_heading_image.data.attributes.url}
      />
      <AboutMain
        header={pageData.main_section_header}
        text={pageData.main_section_text}
        bulletPoints={pageData.main_section_bullet_points}
        imgSrc={pageData.main_section_image.data.attributes.url}
        imgWidth={pageData.main_section_image.data.attributes.width}
        imgHeight={pageData.main_section_image.data.attributes.height}
      />
      <Counter
        happyClients={pageData.counter_happy_clients}
        ordersEveryday={pageData.counter_orders_everyday}
        professionals={pageData.counter_professionals}
        daysWork={pageData.counter_work_since}
      />
      <Media
        header={pageData.media_header}
        text={pageData.media_text}
        videoSrc={pageData.media_video.data.attributes.url}
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
