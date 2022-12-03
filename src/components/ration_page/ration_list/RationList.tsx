import MealCard from "components/reusable/meal_card/MealCard"
import styles from "./RationList.module.css"

function RationList() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <h3 className={styles.wrapper_header}>Breakfast</h3>
          <MealCard />
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.wrapper_header}>Lunch</h3>
          <MealCard />
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.wrapper_header}>Dinner</h3>
          <MealCard />
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.wrapper_header}>Snack</h3>
          <MealCard />
        </div>
      </div>
    </div>
  )
}
export default RationList
