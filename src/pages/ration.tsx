import { InferGetStaticPropsType } from "next"
import { motion } from "framer-motion"
import { pageTransition } from "utils/framer-animations"
import { fetchRationPageData } from "lib/fetchRationPageData"
import { fetchRationPlanData } from "lib/fetchRationPlanData"
import RationMain from "components/ration_page/ration_main/RationMain"
import PageHeading from "components/reusable/page_heading/PageHeading"
import LatestPosts from "components/reusable/latest_posts/LatestPosts"
import GetInTouch from "components/reusable/get_in_touch/GetInTouch"
import Meta from "components/reusable/meta/Meta"
import RationPlanContextProvider from "context/RationPlanContext"

const Ration = ({ rationPageData, rationPlanData }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <RationPlanContextProvider data={rationPlanData}>
        <RationMain/>
      </RationPlanContextProvider>
      <LatestPosts />
      <GetInTouch />
    </motion.main>
  )
}

export async function getStaticProps() {
  const rationPageData = await fetchRationPageData()
  const rationPlanData = await fetchRationPlanData()
  return {
    props: {
      rationPageData,
      rationPlanData,
    },
    revalidate: 60,
  }
}

export default Ration
