import React from 'react'
import Link from 'next/link'
import LogoIcon from 'assets/logo.svg'
import styles from './Logo.module.css'

function Logo({text}: {text: string}) {
  return (
    <Link href='/'>
      <a className={styles.logo_link}>
        <LogoIcon className={styles.logo} />
        <span>{text}</span>
      </a>
    </Link>
  )
}

export default Logo