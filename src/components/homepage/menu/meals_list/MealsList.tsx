import { useContext } from 'react'
import { MenuContext } from 'context/MenuContext'
import styles from './MealsList.module.css'
import MealCard from '../meal_card/MealCard'
import { AnimatePresence } from 'framer-motion'

function MealsList() {
  const ctx = useContext(MenuContext)

  // Randomize meals
  const meals = ctx.meals.sort(() => Math.random() - 0.5).slice(0, 4)

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <AnimatePresence mode='wait'>
          {meals.map((meal) => (
            <MealCard
              key={meal.attributes.slug}
              image={meal.attributes.images?.data[0].attributes.url!}
              name={meal.attributes.name}
              calories={meal.attributes.calories}
              fats={meal.attributes.fats}
              proteins={meal.attributes.proteins}
              slug={meal.attributes.slug}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MealsList
