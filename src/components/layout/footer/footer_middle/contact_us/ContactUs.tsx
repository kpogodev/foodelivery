import styles from './ContactUs.module.css'
import PhoneIcon from 'assets/phone.svg'
import EmailIcon from 'assets/email.svg'
import ClockIcon from 'assets/clock.svg'

function ContactUs() {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Contact Us</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <PhoneIcon />
          8 (800) 0000 000
        </li>
        <li className={styles.item}>
          <ClockIcon />
          Monday-Firday: 9:00 am - 6:00 pm
          <br />
          Saturday: 9:00 am - 4:00 pm
        </li>
        <li className={styles.item}>
          <EmailIcon />
          customerserv@foodelivery.co.uk
        </li>
      </ul>
    </div>
  )
}
export default ContactUs
