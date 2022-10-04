import styles from './FooterBottom.module.css'

function FooterBottom() {
  return (
    <div className={styles.container}>
      <p>Copyright © {new Date().getFullYear()} - All right reserved - Foodelivery by kpogodev</p>
    </div>
  )
}
export default FooterBottom
