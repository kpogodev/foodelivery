import styles from './Phone.module.css'
import PhoneIcon from 'assets/phone.svg'

function Phone({ phoneNumber }: { phoneNumber: string | number }) {
  return (
    <div className={styles.phone}>
      <span>{phoneNumber}</span>
      <a href={`tel:${typeof phoneNumber === 'string' ? phoneNumber.trim().replaceAll(' ', '') : phoneNumber}`}>
        <PhoneIcon />
      </a>
    </div>
  )
}

export default Phone
