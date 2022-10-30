import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import { pageTransition } from 'utils/framer-animations'
import PageHeading from 'components/reusable/page_heading/PageHeading'
import GetInTouch from 'components/reusable/get_in_touch/GetInTouch'
import AboutMain from 'components/about_page/about_main/AboutMain'
import Counter from 'components/about_page/counter/Counter'
import Media from 'components/reusable/media/Media'

const About: NextPage = () => {
  return (
    <motion.main {...pageTransition}>
      <PageHeading title='About Us' backgroundColor='#FFBE34' textColor='#2E294E' />
      <AboutMain />
      <Counter />
      <Media
        header='You Can Watch Cooking Process Translation'
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat reprehenderit molestias, numquam repudiandae optio repellendus ullam explicabo ducimus non reiciendis fugit a corrupti autem. Reprehenderit reiciendis repellat aspernatur quisquam quod.'
        videoSrc='/placeholder.mp4'
        posterSrc='/media_video_placeholder.webp'
      />
      <GetInTouch />
    </motion.main>
  )
}

export default About
