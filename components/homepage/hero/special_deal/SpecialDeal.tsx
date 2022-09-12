import React from 'react'
import styles from './SpecialDeal.module.css'
import Link from 'next/link'

function SpecialDeal() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Salmon with asparagus</h2>
      <p className={styles.description}>Fragrant baked salmon with notes of citrus on a pillow of spinach and mushrooms. Perfectly in hardmony with asparagus.</p>
      <ul className={styles.nutritions}>
        <li className={styles.nutrition}>
          <span className={styles.nutrition_name}>Calories</span>
          <span className={styles.nutrition_value}>450 kcal</span>
        </li>
        <li className={styles.nutrition}>
          <span className={styles.nutrition_name}>Fats</span>
          <span className={styles.nutrition_value}>4.5 gr</span>
        </li>
        <li className={styles.nutrition}>
          <span className={styles.nutrition_name}>Proteins</span>
          <span className={styles.nutrition_value}>8.3 gr</span>
        </li>
      </ul>
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

