import { useContext } from 'react'
import { BurgerContext } from './BurgerContext'
import BurgerIcon from 'assets/burger.svg'
import styles from './Burger.module.css'

function Burger() {
  const ctx = useContext(BurgerContext)
  return (
    <button className={styles.btn} onClick={ctx.handleToggle}>
      <BurgerIcon />
    </button>
  )
}

export default Burger
