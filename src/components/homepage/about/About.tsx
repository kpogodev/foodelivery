import Image from 'next/image'
import Link from 'next/link'
import AboutImg from 'assets/home-about.png'
import styles from './About.module.css'
import { motion } from 'framer-motion'
import { string } from 'zod'

const imageEntranceVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
}

const elementsEntranceVariants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
    },
  },
}

interface AboutProps {
  description: string
  image: string
}

function About({ description, image }: AboutProps) {
  return (
    <motion.div
      className={styles.container}
      initial='offscreen'
      whileInView='onscreen'
      transition={{ staggerChildren: 0.05 }}
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.div className={styles.inner}>
        <motion.div className={styles.image} variants={imageEntranceVariants}>
          <Image src={image} width={550} height={644} objectFit='contain' alt='' />
        </motion.div>
        <div className={styles.content}>
          <motion.h2 className={styles.header} variants={elementsEntranceVariants}>
            About Our Company
          </motion.h2>
          <motion.p className={styles.text} variants={elementsEntranceVariants}>
            {description}
          </motion.p>
          <Link href='/about'>
            <motion.a className={styles.cta} variants={elementsEntranceVariants}>
              read more
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
