import { motion } from 'framer-motion'
import IndicatorIcon from 'assets/menu-category-indicator.svg'
import styles from './MealButton.module.css'

interface MealButtonProps {
  children: React.ReactNode
  meal: string
  selected: boolean
  handleClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void
}

function MealButton({ children, meal, selected, handleClick }: MealButtonProps) {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${selected ? styles.button_selected : ''}`}
        value={meal}
        onClick={handleClick}
      >
        {children}
        <span>{meal}</span>
      </button>
      {selected && (
        <motion.div className={styles.indicator} layoutId='indicator'>
          <IndicatorIcon />
        </motion.div>
      )}
    </div>
  )
}

export default MealButton
