import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import styles from './GetInTouch.module.css'
import Watermark from 'assets/watermark-get-in-touch.svg'

const elementsEntranceVariants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
    },
  },
}

function GetInTouch() {
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    alert(`Thank you for your email! We'll be in touch soon.`)
    setEmail('')
  }

  return (
    <motion.div
      className={styles.container}
      initial='offscreen'
      whileInView='onscreen'
      transition={{ staggerChildren: 0.05 }}
      viewport={{ amount: 0.3, once: true }}
    >
      <div className={styles.inner}>
        <Watermark className={styles.watermark} />
        <div className={styles.content}>
          <motion.h2 className={styles.header} variants={elementsEntranceVariants}>
            Need a free consulation?
          </motion.h2>
          <motion.p className={styles.text} variants={elementsEntranceVariants}>
            If you have questions, please drop your email address and we will get back to you shortly!
          </motion.p>
          <motion.form className={styles.form} onSubmit={handleSubmit} variants={elementsEntranceVariants}>
            <div className={styles.input_wrap}>
              <input className={styles.input} type='email' placeholder='Email' value={email} onChange={handleChange} />
              <button className={styles.button} type='submit'>
                send
              </button>
            </div>
          </motion.form>
        </div>
        <Image className={styles.img} src='/git.png' alt='' width={1213} height={1162} />
      </div>
    </motion.div>
  )
}
export default GetInTouch
