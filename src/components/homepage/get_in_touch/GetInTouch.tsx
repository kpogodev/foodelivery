import React, { useState } from 'react'
import Image from 'next/future/image'
import styles from './GetInTouch.module.css'
import Watermark from 'assets/watermark-get-in-touch.svg'

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
    <div className={styles.container}>
      <div className={styles.inner}>
        <Watermark className={styles.watermark} />
        <div className={styles.content}>
          <h2 className={styles.header}>Need a free consulation?</h2>
          <p className={styles.text}>
            If you have questions, please drop your email address and we will get back to you shortly!
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input_wrap}>
              <input className={styles.input} type='email' placeholder='Email' value={email} onChange={handleChange} />
              <button className={styles.button} type='submit'>
                send
              </button>
            </div>
          </form>
        </div>
        <Image className={styles.img} src='/git.png' alt='' width={1213} height={1162} />
      </div>
    </div>
  )
}
export default GetInTouch
