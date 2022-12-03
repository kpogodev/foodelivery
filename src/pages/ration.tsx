import { InferGetStaticPropsType } from "next"
import { motion } from "framer-motion"
import { pageTransition } from "utils/framer-animations"
import { fetchRationPageData } from "lib/fetchRationPageData"
import RationMain from "components/ration_page/ration_main/RationMain"
import PageHeading from "components/reusable/page_heading/PageHeading"
import LatestPosts from "components/reusable/latest_posts/LatestPosts"
import GetInTouch from "components/reusable/get_in_touch/GetInTouch"
import Meta from "components/reusable/meta/Meta"

const Ration = ({ rationPageData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { attributes: pageData } = rationPageData.data
  return (
    <motion.main {...pageTransition}>
      <Meta title={pageData.seo.title} description={pageData.seo.description} />
      <PageHeading
        title={pageData.page_banner.page_title}
        backgroundColor={pageData.page_banner.background_color}
        textColor={pageData.page_banner.text_color}
        imgSrc={pageData.page_banner.image.data.attributes.url}
      />
      <RationMain />
      <LatestPosts />
      <GetInTouch />
    </motion.main>
  )
}

export async function getStaticProps() {
  const rationPageData = await fetchRationPageData()
  return {
    props: {
      rationPageData,
    },
    revalidate: 60,
  }
}

export default Ration
