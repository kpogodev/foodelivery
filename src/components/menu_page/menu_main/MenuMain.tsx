import MenuMealsList from "../menu_meals_list/MenuMealsList"
import styles from "./MenuMain.module.css"

function MenuMain() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <MenuMealsList header='Breakfast' />
        <MenuMealsList header='Lunch' />
        <MenuMealsList header='Dinner' />
        <MenuMealsList header='Snack' />
        <MenuMealsList header='Drink' />
      </div>
    </div>
  )
}
export default MenuMain
