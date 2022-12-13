import MenuMealsItem from "../menu_meals_item/MenuMealsItem"
import styles from "./MenuMealsList.module.css"

interface MenuMealsListProps {
  header: string
}

function MenuMealsList({ header }: MenuMealsListProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{header}</h2>
      <ul className={styles.list}>
        <MenuMealsItem />
        <MenuMealsItem />
        <MenuMealsItem />
        <MenuMealsItem />
      </ul>
    </div>
  )
}
export default MenuMealsList
