import { motion } from "framer-motion"
import { pageTransition } from "utils/framer-animations"
import Meta from "components/reusable/meta/Meta"
import PageHeading from "components/reusable/page_heading/PageHeading"

const Menu = () => {
  return (
    <motion.main {...pageTransition}>
      <Meta />
      <PageHeading title='Menu' backgroundColor='#39A137' textColor='#fff' imgSrc='/salmon.webp' />
    </motion.main>
  )
}

export default Menu
