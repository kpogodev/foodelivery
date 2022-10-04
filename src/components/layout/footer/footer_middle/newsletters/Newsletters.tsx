import { useState, useId } from 'react'
import styles from './Newsletters.module.css'
import SendIcon from 'assets/send.svg'
import { AnimatePresence, motion } from 'framer-motion'

function Newsletters() {
  const [email, setEmail] = useState('')
  const key = useId()

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
      <h3 className={styles.header}>Sing up for Updates</h3>
      <p className={styles.text}>
        To stay up to date with our latest news and offers, please sign up to our newsletter.
      </p>
      <form className={styles.input_wrap} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='email'
          placeholder='Your email address'
          value={email}
          onChange={handleChange}
        />
        <AnimatePresence key={key} mode='wait'>
          {email.length > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.button}
              type='submit'
            >
              <SendIcon />
            </motion.button>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
export default Newsletters
