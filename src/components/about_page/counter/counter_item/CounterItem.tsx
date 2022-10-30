import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './CounterItem.module.css'

interface CounterItemProps {
  value: number
  label: string
  countDuration?: number
  initialOrbit: number
  orbitDuration?: number
  valueWithPlusSign?: boolean
}

function CounterItem({
  value,
  label,
  initialOrbit,
  orbitDuration = 30,
  valueWithPlusSign,
  countDuration = 3000,
}: CounterItemProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const itemRef = useRef<HTMLLIElement | null>(null)
  const isInView = useInView(itemRef, { amount: 0.5, once: true })

  const animateValues = useCallback(() => {
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      let delta = Math.min(1, (timestamp - startTime) / countDuration)
      setCurrentValue(Math.floor(delta * value))
      if (delta < 1) window.requestAnimationFrame(animate)
    }
    window.requestAnimationFrame((timestamp) => animate(timestamp))
  }, [countDuration, value])

  useEffect(() => {
    if (isInView) animateValues()
  }, [isInView, animateValues])

  return (
    <li ref={itemRef} className={styles.container}>
      <p className={styles.value}>
        {currentValue}
        {valueWithPlusSign ? '+' : ''}
      </p>
      <p className={styles.label}>{label}</p>
      <motion.div
        className={styles.orbit}
        whileInView={{
          rotate: [initialOrbit, initialOrbit + 360],
          transition: {
            duration: orbitDuration,
            ease: 'linear',
            repeat: Infinity,
          },
        }}
      />
    </li>
  )
}
export default CounterItem
