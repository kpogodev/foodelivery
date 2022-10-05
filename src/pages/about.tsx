import type { NextPage } from 'next'
import { motion } from 'framer-motion'

const About: NextPage = () => {
  return (
    <motion.div
      key='about-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      This is about page
    </motion.div>
  )
}

export default About
