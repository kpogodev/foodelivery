import Link from 'next/link'
import React from 'react'
import { uuid } from 'uuidv4';
import styles from './Navigation.module.css';


interface NavigationProps {
  topics: string[]
}

function Navigation({topics}: NavigationProps) {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {topics.map(topic =>
          (<li className={styles.item} key={uuid()}><Link href={`/${topic.toLowerCase()}`}><a className={styles.link}>{topic}</a></Link></li>)
        )}
      </ul>
    </nav>
  )
}

export default Navigation