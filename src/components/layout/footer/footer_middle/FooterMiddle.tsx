import ContactUs from './contact_us/ContactUs'
import styles from './FooterMiddle.module.css'
import Newsletters from './newsletters/Newsletters'
import Sitemap from './sitemap/Sitemap'

function FooterMiddle() {
  return (
    <div className={styles.container}>
      <Newsletters />
      <Sitemap />
      <ContactUs />
    </div>
  )
}
export default FooterMiddle
