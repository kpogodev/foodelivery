import Image from 'next/future/image'
import styles from './AboutMain.module.css'
import BulletIcon from 'assets/bullet-about.svg'
import { motion } from 'framer-motion'

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
interface AboutMainProps {
  header: string
  text: string
  imgSrc: string
  imgWidth: number
  imgHeight: number
  bulletPoints: string
}

function AboutMain({ header, text, imgSrc, imgWidth, imgHeight, bulletPoints }: AboutMainProps) {
  const listItems = bulletPoints.split(';')
  return (
    <motion.div
      className={styles.container}
      initial='offscreen'
      whileInView='onscreen'
      transition={{ staggerChildren: 0.05 }}
      viewport={{ amount: 0.3, once: true }}
    >
      <div className={styles.inner}>
        <motion.div className={styles.image_wrap} variants={imageEntranceVariants}>
          <Image src={imgSrc} alt='' width={imgWidth} height={imgHeight} />
        </motion.div>
        <div className={styles.content}>
          <motion.h2 className={styles.header} variants={elementsEntranceVariants}>
            {header}
          </motion.h2>
          <motion.p className={styles.text} variants={elementsEntranceVariants}>
            {text}
          </motion.p>
          <ul className={styles.list}>
            {listItems.map((item, index) => (
              <motion.li key={index} className={styles.item} variants={elementsEntranceVariants}>
                <BulletIcon className={styles.bullet} />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
export default AboutMain
