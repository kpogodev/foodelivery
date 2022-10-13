import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { pageTransition } from 'utils/framer-animations'

const About: NextPage = () => {
  return (
    <motion.div key='about-page' {...pageTransition}>
      This is about page
    </motion.div>
  )
}

export default About
