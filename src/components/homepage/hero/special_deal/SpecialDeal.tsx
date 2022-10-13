import React from 'react'
import styles from './SpecialDeal.module.css'
import Link from 'next/link'
import NutritionTabel from 'components/reusable/nutrition_tabel/NutritionTabel'
import { AnimatePresence, motion } from 'framer-motion'
import { heroVariants } from 'utils/framer-animations'
import { Meal } from 'types'
import { v4 as uuid } from 'uuid'

function SpecialDeal({ data }: { data: Meal }) {
  return (
    <div className={styles.container}>
      <AnimatePresence mode='wait'>
        <motion.h2
          key={uuid()}
          className={styles.header}
          variants={heroVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {data.name}
        </motion.h2>
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.p
          key={uuid()}
          className={styles.description}
          variants={heroVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {data.description}
        </motion.p>
      </AnimatePresence>
      <NutritionTabel
        calories={data.nutritions.calories}
        fats={data.nutritions.fats}
        proteins={data.nutritions.proteins}
        withAnimation
      />
      <Link href='/'>
        <a className={styles.cta}>
          <AnimatePresence mode='wait'>
            <motion.span key={uuid()} variants={heroVariants} initial='hidden' animate='visible' exit='hidden'>
              £{data.price}
            </motion.span>
          </AnimatePresence>
          <span>order now</span>
        </a>
      </Link>
      <div className={styles.counter}>
        <AnimatePresence mode='wait'>
          <motion.span
            className={styles.counter_value}
            variants={heroVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            key={uuid()}
          >
            0{data.id}
          </motion.span>
        </AnimatePresence>
        <div className={styles.counter_divider}></div>
        <span className={styles.counter_total}>06</span>
      </div>
    </div>
  )
}

export default SpecialDeal
