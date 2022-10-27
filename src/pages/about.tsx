import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { pageTransition } from 'utils/framer-animations'
import PageHeading from 'components/reusable/page_heading/PageHeading'

const About: NextPage = () => {
  return (
    <motion.div {...pageTransition}>
      <PageHeading title='About Us' backgroundColor='#FFBE34' textColor='#2E294E' />
    </motion.div>
  )
}

export default About
