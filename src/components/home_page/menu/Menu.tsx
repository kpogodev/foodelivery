import Category from "./category/Category"
import Filter from "./filter/Filter"
import MealsList from "./meals_list/MealsList"
import styles from "./Menu.module.css"

function Menu() {
  return (
    <div className={styles.container}>
      <Filter />
      <Category categories={["Breakfast", "Dinner", "Drinks", "Lunch", "Snack"]} />
      <MealsList />
    </div>
  )
}

export default Menu
