import React from 'react'
import styles from './Phone.module.css'
import PhoneIcon from 'assets/phone.svg'

function Phone({phoneNumber}: {phoneNumber: string}) {
  return (
        <div className={styles.phone}>
          <span>{phoneNumber}</span>
          <a href={`tel:${phoneNumber.trim().replaceAll(' ', '')}`}><PhoneIcon/></a>
        </div>
  )
}

export default Phone