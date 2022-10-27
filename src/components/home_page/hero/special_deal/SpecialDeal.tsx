import Link from 'next/link'
import { useContext } from 'react'
import { HeroContext } from 'context/HeroContext'
import { AnimatePresence, motion } from 'framer-motion'
import NutritionTabel from 'components/reusable/nutrition_tabel/NutritionTabel'
import { heroVariants } from 'utils/framer-animations'
import styles from './SpecialDeal.module.css'

function SpecialDeal({ slide }: { slide: number }) {
  const { meals } = useContext(HeroContext)

  return (
    <div className={styles.container}>
      <AnimatePresence mode='wait'>
        <motion.h2
          key={meals[slide].id}
          className={styles.header}
          variants={heroVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {meals[slide].attributes.name}
        </motion.h2>
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.p
          key={meals[slide].id}
          className={styles.description}
          variants={heroVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {meals[slide].attributes.description}
        </motion.p>
      </AnimatePresence>
      <NutritionTabel
        calories={meals[slide].attributes.calories}
        fats={meals[slide].attributes.fats}
        proteins={meals[slide].attributes.proteins}
        withAnimation
      />
      <Link href='/'>
        <a className={styles.cta}>
          <AnimatePresence mode='wait'>
            <motion.span key={meals[slide].id} variants={heroVariants} initial='hidden' animate='visible' exit='hidden'>
              £{meals[slide].attributes.price}
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
            key={meals[slide].id}
          >
            {`${slide < 9 ? '0' : ''}${slide + 1}`}
          </motion.span>
        </AnimatePresence>
        <div className={styles.counter_divider}></div>
        <span className={styles.counter_total}>{`${meals.length < 10 ? '0' : ''}${meals.length}`}</span>
      </div>
    </div>
  )
}

export default SpecialDeal
