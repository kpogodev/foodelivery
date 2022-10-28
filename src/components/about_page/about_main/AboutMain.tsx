import Image from 'next/future/image'
import styles from './AboutMain.module.css'
import imgSrc from 'assets/home-about.webp'
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

const points: string[] = [
  'people who want to lose weight',
  'athlets and those who lead an active lifestyle',
  'pragnant and lactating women',
  'vegetarians and vegans',
  'fasting',
]

function AboutMain() {
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
          <Image src={imgSrc} alt='' />
        </motion.div>
        <div className={styles.content}>
          <motion.h2 className={styles.header} variants={elementsEntranceVariants}>
            Only Quality Products
          </motion.h2>
          <motion.p className={styles.text} variants={elementsEntranceVariants}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolore deserunt earum magnam quo
            excepturi laborum cupiditate eveniet cum repellat, soluta, itaque debitis cumque adipisci recusandae natus,
            amet doloribus laboriosam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolore
            deserunt earum magnam quo excepturi laborum cupiditate eveniet cum repellat, soluta, itaque debitis cumque
            adipisci recusandae natus, amet doloribus laboriosam!
          </motion.p>
          <ul className={styles.list}>
            {points.map((point, index) => (
              <motion.li key={index} className={styles.item} variants={elementsEntranceVariants}>
                <BulletIcon className={styles.bullet} />
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
export default AboutMain
