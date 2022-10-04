import styles from './Sitemap.module.css'
import Link from 'next/link'

function Sitemap() {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Sitemap</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href='/'>
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/about'>
            <a className={styles.link}>About</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/news'>
            <a className={styles.link}>News</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/menu'>
            <a className={styles.link}>Menu</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/faq'>
            <a className={styles.link}>FAQ</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/blog'>
            <a className={styles.link}>Blog</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/contact'>
            <a className={styles.link}>Contact</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/privacy'>
            <a className={styles.link}>Privacy</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/terms'>
            <a className={styles.link}>Terms</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Sitemap
