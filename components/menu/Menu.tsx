import React from 'react'
import Filter from './filter/Filter'
import styles from './Menu.module.css'

function Menu() {
  return (
    <div className={styles.container}>
      <Filter />
    </div>
  )
}

export default Menu