import { motion } from 'framer-motion'
import IndicatorIcon from 'assets/menu-category-indicator.svg'
import styles from './MealSwiperSlide.module.css'

interface MealSwiperSlideProps {
  children: React.ReactNode
  meal: string
  selected: boolean
}

function MealSwiperSlide({ children, meal, selected }: MealSwiperSlideProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.inner} ${selected ? styles.selected : ''}`}>
        {children}
        <span>{meal}</span>
      </div>
      {selected && (
        <motion.div className={styles.indicator} layoutId='indicator'>
          <IndicatorIcon />
        </motion.div>
      )}
    </div>
  )
}

export default MealSwiperSlide
