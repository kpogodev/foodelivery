import React from 'react'
import BurgerIcon from 'assets/burger.svg'
import styles from './Burger.module.css'

function Burger() {
  return <button className={styles.btn}><BurgerIcon/></button>

}

export default Burger