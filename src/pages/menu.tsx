import { motion } from "framer-motion"
import { pageTransition } from "utils/framer-animations"
import Meta from "components/reusable/meta/Meta"
import PageHeading from "components/reusable/page_heading/PageHeading"
import MenuMain from "components/menu_page/menu_main/MenuMain"

const Menu = () => {
  return (
    <motion.main {...pageTransition}>
      <Meta />
      <PageHeading title='Menu' backgroundColor='#39A137' textColor='#fff' imgSrc='/salmon.webp' />
      <MenuMain />
    </motion.main>
  )
}

export default Menu
