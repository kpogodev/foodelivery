import { useContext } from "react"
import { RationPlanContext } from "context/RationPlanContext"
import MealCard from "components/reusable/meal_card/MealCard"
import styles from "./RationList.module.css"

function RationList() {
  const { mealsData } = useContext(RationPlanContext)
  const data = {
    breakfast: mealsData.breakfast.data.attributes,
    lunch: mealsData.lunch.data.attributes,
    dinner: mealsData.dinner.data.attributes,
    snack: mealsData.snack.data.attributes,
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <h3 className={styles.wrapper_header}>Breakfast</h3>
          <MealCard
            name={data.breakfast.name}
            calories={data.breakfast.calories}
            fats={data.breakfast.fats}
            proteins={data.breakfast.proteins}
            slug={data.breakfast.slug}
            image={data.breakfast.images?.data[0].attributes.url!}
          />
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.wrapper_header}>Lunch</h3>
          <MealCard
            name={data.lunch.name}
            calories={data.lunch.calories}
            fats={data.lunch.fats}
            proteins={data.lunch.proteins}
            slug={data.lunch.slug}
            image={data.lunch.images?.data[0].attributes.url!}
          />
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.wrapper_header}>Dinner</h3>
          <MealCard
            name={data.dinner.name}
            calories={data.dinner.calories}
            fats={data.dinner.fats}
            proteins={data.dinner.proteins}
            slug={data.dinner.slug}
            image={data.dinner.images?.data[0].attributes.url!}
          />
        </div>
        <div className={styles.wrapper}>
          <h3 className={styles.wrapper_header}>Snack</h3>
          <MealCard
            name={data.snack.name}
            calories={data.snack.calories}
            fats={data.snack.fats}
            proteins={data.snack.proteins}
            slug={data.snack.slug}
            image={data.snack.images?.data[0].attributes.url!}
          />
        </div>
      </div>
    </div>
  )
}
export default RationList
