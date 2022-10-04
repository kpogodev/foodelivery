import styles from './Footer.module.css'
import FooterBottom from './footer_bottom/FooterBottom'
import FooterMiddle from './footer_middle/FooterMiddle'
import FooterTop from './footer_top/FooterTop'

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
