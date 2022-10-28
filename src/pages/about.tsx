import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { pageTransition } from 'utils/framer-animations'
import PageHeading from 'components/reusable/page_heading/PageHeading'
import GetInTouch from 'components/reusable/get_in_touch/GetInTouch'

const About: NextPage = () => {
  return (
    <motion.div {...pageTransition}>
      <PageHeading title='About Us' backgroundColor='#FFBE34' textColor='#2E294E' />
      <GetInTouch />
    </motion.div>
  )
}

export default About
