import { motion } from "framer-motion"
import { pageTransition } from "utils/framer-animations"
import Meta from "components/reusable/meta/Meta"

const Menu = () => {
  return (
    <motion.main {...pageTransition}>
      <Meta />
    </motion.main>
  )
}

export default Menu
