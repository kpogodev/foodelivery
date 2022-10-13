import Image from 'next/future/image'
import styles from './StepItem.module.css'
import { motion } from 'framer-motion'

interface StepItemProps {
  title: string
  description: string
  image: string
  reverse?: boolean
}

const contentEntranceVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
}

const imageEntranceVariants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
}

function StepItem({ title, description, image, reverse }: StepItemProps) {
  return (
    <div className={`${styles.container} ${reverse ? styles.reversed : ''}`}>
      <motion.div className={styles.img_wrap} variants={imageEntranceVariants}>
        <Image className={styles.img} src={image} alt='Step 1' width={1024} height={768} />
      </motion.div>
      <div className={styles.body}>
        <motion.h3 className={styles.title} variants={contentEntranceVariants}>
          {title}
        </motion.h3>
        <motion.p className={styles.desc} variants={contentEntranceVariants}>
          {description}
        </motion.p>
      </div>
    </div>
  )
}
export default StepItem
