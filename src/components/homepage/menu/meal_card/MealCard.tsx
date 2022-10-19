import styles from './MealCard.module.css'
import Image from 'next/future/image'
import NutritionTabel from 'components/reusable/nutrition_tabel/NutritionTabel'
import { motion } from 'framer-motion'

interface MealCardProps {
  image?: string
  name: string
  calories: number | string
  fats: number | string
  proteins: number | string
  slug: string
}

export const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.35 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: 0.1,
    },
  },
}

function MealCard({ image, name, calories, fats, proteins, slug }: MealCardProps) {
  return (
    <motion.div
      key={slug}
      className={styles.container}
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
      layoutId={slug}
    >
      <div className={styles.image}>
        <Image src={image!} alt='' fill priority />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <NutritionTabel calories={calories} fats={fats} proteins={proteins} />
      </div>
    </motion.div>
  )
}

export default MealCard
