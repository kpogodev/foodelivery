import { useState, useEffect, useContext } from 'react'
import { HeroContext } from 'context/HeroContext'
import Image from 'next/image'
import styles from './Hero.module.css'
import Watermark from 'assets/watermark-special.svg'
import SpecialDeal from './special_deal/SpecialDeal'
import { AnimatePresence, motion } from 'framer-motion'
import { heroVariants } from 'utils/framer-animations'


function Hero() {
  const [slide, setSlide] = useState(0)
  const { meals } = useContext(HeroContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % meals.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [meals.length])


  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SpecialDeal slide={slide} />
        <AnimatePresence mode='wait'>
          <motion.div
            key={meals[slide].id}
            className={styles.image}
            variants={heroVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <Image
              src={meals[slide].attributes.images?.data[0].attributes.url!}
              width={600}
              height={600}
              objectFit='contain'
              alt=''
            />
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
