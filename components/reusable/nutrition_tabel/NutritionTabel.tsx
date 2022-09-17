import styles from './NutritionTable.module.css'

interface NutritionTableProps {
  calories: number | string
  proteins: number | string
  fats: number | string
}

function NutritionTabel({ calories, fats, proteins }: NutritionTableProps) {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <span className={styles.name}>Calories</span>
        <span className={styles.value}>{calories} kcal</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Fats</span>
        <span className={styles.value}>{fats} gr</span>
      </li>
      <li className={styles.item}>
        <span className={styles.name}>Proteins</span>
        <span className={styles.value}>{proteins} gr</span>
      </li>
    </ul>
  )
}

export default NutritionTabel
