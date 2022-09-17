import { useContext } from 'react'
import { MenuContext } from 'components/homepage/menu/MenuContext'
import { meals } from '../data'
import styles from './MealsList.module.css'
import MealCard from './meal_card/MealCard'
import { v4 as uuid } from 'uuid'

function MealsList() {
  const ctx = useContext(MenuContext)

  const filteredMeals = meals.filter((meal) =>
    ctx.categoryFilter === 'All' ? true : meal.category === ctx.categoryFilter
  )
  // Todo: add more filters

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {filteredMeals.map((meal) => (
          <MealCard key={uuid()} meal={meal} />
        ))}
      </div>
    </div>
  )
}

export default MealsList
