import { motion } from "framer-motion"
import { pageTransition } from "utils/framer-animations"
import PageHeading from "components/reusable/page_heading/PageHeading"
import LatestPosts from "components/reusable/latest_posts/LatestPosts"
import GetInTouch from "components/reusable/get_in_touch/GetInTouch"

const Ration = () => {
  return (
    <motion.main {...pageTransition}>
      <PageHeading title='Ration' backgroundColor='#33A9FF' textColor='#fff' imgSrc='/porridge.png' />
      <LatestPosts />
      <GetInTouch />
    </motion.main>
  )
}
export default Ration
