import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'
import Watermark from 'assets/watermark-special.svg'
import SpecialDeal from './special_deal/SpecialDeal'
import { AnimatePresence, motion } from 'framer-motion'
import { heroVariants } from 'utils/framer-animations'
import { Meal } from 'types'
import { v4 as uuid } from 'uuid'

const data: Meal[] = [
  {
    id: 1,
    name: 'Salmon with asparagus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl',
    price: 12.99,
    image: '/salmon.webp',
    nutritions: {
      calories: 300,
      proteins: 20,
      fats: 10,
    },
    category: 'Breakfast',
    vegetarian: false,
    vegan: false,
    glutenFree: false,
  },
  {
    id: 2,
    name: 'Steak with veggies',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl',
    price: 16.99,
    image: '/steak.png',
    nutritions: {
      calories: 500,
      proteins: 60,
      fats: 20,
    },
    category: 'Dinner',
    vegetarian: false,
    vegan: false,
    glutenFree: false,
  },
]

function Hero() {
  const [currentDeal, setCurrentDeal] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % data.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SpecialDeal data={data[currentDeal]} />
        <AnimatePresence mode='wait'>
          <motion.div
            key={uuid()}
            className={styles.image}
            variants={heroVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <Image src={data[currentDeal].image} width={600} height={600} objectFit='contain' alt='' />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.pad}>
        <Watermark className={styles.pad_watermark} />
      </div>
    </div>
  )
}

export default Hero
