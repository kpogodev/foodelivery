import { AnimatePresence, motion } from 'framer-motion'
import styles from './NutritionTable.module.css'
import { heroVariants } from 'utils/framer-animations'
import { v4 as uuid } from 'uuid'

interface NutritionTableProps {
  calories: number | string
  proteins: number | string
  fats: number | string
  withAnimation?: boolean
}

const animationProps = {
  variants: heroVariants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
}

function NutritionTabel({ calories, fats, proteins, withAnimation }: NutritionTableProps) {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <span className={styles.name}>Calories</span>
        <AnimatePresence mode='wait'>
          <motion.span key={uuid()} className={styles.value} {...(withAnimation ? animationProps : {})}>
            {calories} kcal
          </motion.span>
        </AnimatePresence>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Fats</span>
        <AnimatePresence mode='wait'>
          <motion.span key={uuid()} className={styles.value} {...(withAnimation ? animationProps : {})}>
            {fats} gr
          </motion.span>
        </AnimatePresence>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Proteins</span>
        <AnimatePresence mode='wait'>
          <motion.span key={uuid()} className={styles.value} {...(withAnimation ? animationProps : {})}>
            {proteins} gr
          </motion.span>
        </AnimatePresence>
      </li>
    </ul>
  )
}

export default NutritionTabel
