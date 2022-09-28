import React from 'react'
import styles from './SpecialDeal.module.css'
import Link from 'next/link'
import NutritionTabel from 'components/reusable/nutrition_tabel/NutritionTabel'

function SpecialDeal() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Salmon with asparagus</h2>
      <p className={styles.description}>
        Fragrant baked salmon with notes of citrus on a pillow of spinach and mushrooms. Perfectly in hardmony with
        asparagus.
      </p>
      <NutritionTabel calories={450} fats={4.3} proteins={8.2} />
      <Link href='/'>
        <a className={styles.cta}>
          <span>£10</span>
          <span>order now</span>
        </a>
      </Link>
      <div className={styles.counter}>
        <span className={styles.counter_value}>01</span>
        <div className={styles.counter_divider}></div>
        <span className={styles.counter_total}>06</span>
      </div>
    </div>
  )
}

export default SpecialDeal
