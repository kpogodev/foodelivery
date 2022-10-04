import styles from './FooterTop.module.css'
import Logo from 'components/layout/header/logo/Logo'
import FacebookIcon from 'assets/facebook.svg'
import InstagramIcon from 'assets/instagram.svg'
import TwitterIcon from 'assets/twitter.svg'

function FooterTop() {
  return (
    <div className={styles.container}>
      <Logo text='foodelivery' />
      <div className={styles.social_links}>
        <a href='https://www.twitter.com/foolivery' target='_blank' rel='noreferrer'>
          <TwitterIcon />
        </a>
        <a href='https://www.facebook.com/foolivery' target='_blank' rel='noreferrer'>
          <FacebookIcon />
        </a>
        <a href='https://www.instagram.com/foolivery' target='_blank' rel='noreferrer'>
          <InstagramIcon />
        </a>
      </div>
    </div>
  )
}
export default FooterTop
