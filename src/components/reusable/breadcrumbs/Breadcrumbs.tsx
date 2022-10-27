import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Breadcrumbs.module.css'

function Breadcrumbs() {
  const router = useRouter()
  const pathArray = router.route.split('/')

  const breadcrumbs = pathArray.map((path, index) => {
    const isLast = index === pathArray.length - 1
    const isHome = index === 0
    const href = pathArray.slice(0, index + 1).join('/')
    const as = href

    if (isHome) {
      return (
        <li className={styles.item} key={index}>
          <Link href='/'>
            <a className={styles.link}>Home</a>
          </Link>
        </li>
      )
    } else if (isLast) {
      return (
        <li className={styles.item} key={index}>
          <span className={styles.current}>{`${path.charAt(0).toUpperCase()}${path.slice(1)}`}</span>
        </li>
      )
    } else {
      return (
        <li className={styles.item} key={index}>
          <Link href={href} as={as}>
            <a className={styles.link}>{`${path.charAt(0).toUpperCase()}${path.slice(1)}`}</a>
          </Link>
        </li>
      )
    }
  })

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>{breadcrumbs}</ul>
    </nav>
  )
}
export default Breadcrumbs
