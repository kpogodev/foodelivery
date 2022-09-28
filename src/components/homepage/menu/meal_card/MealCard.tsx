import styles from './MealCard.module.css'
import Image from 'next/image'
import NutritionTabel from 'components/reusable/nutrition_tabel/NutritionTabel'
import { Meal } from 'types'

function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={meal.image} layout='fill' alt='' />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{meal.name}</h3>
        <NutritionTabel
          calories={meal.nutritions.calories}
          fats={meal.nutritions.fats}
          proteins={meal.nutritions.proteins}
        />
      </div>
    </div>
  )
}

export default MealCard
