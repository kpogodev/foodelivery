import styles from './MealCard.module.css'
import Image from 'next/image'
import NutritionTabel from 'components/reusable/nutrition_tabel/NutritionTabel'

interface MealCardProps {
  image?: string
  name: string
  calories: number | string
  fats: number | string
  proteins: number | string
}

function MealCard({ image, name, calories, fats, proteins }: MealCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image!} layout='fill' alt='' />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <NutritionTabel calories={calories} fats={fats} proteins={proteins} />
      </div>
    </div>
  )
}

export default MealCard
