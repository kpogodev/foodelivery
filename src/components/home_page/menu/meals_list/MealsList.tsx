import { useContext } from 'react'
import { MenuContext } from 'context/MenuContext'
import styles from './MealsList.module.css'
import MealCard from '../../../reusable/meal_card/MealCard'

function MealsList() {
  const ctx = useContext(MenuContext)

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {ctx.meals.map((meal) => (
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
      </div>
    </div>
  )
}

export default MealsList
