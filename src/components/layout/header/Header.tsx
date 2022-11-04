import Navigation from './navigation/Navigation'
import styles from './Header.module.css'
import Logo from './logo/Logo'
import Phone from './phone/Phone'
import Burger from './burger/Burger'

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Logo text='foodelivery' />
        <Navigation topics={['About', 'Menu', 'Ration', 'News', 'FAQ', 'Contact']} />
        <Phone phoneNumber='0 1425 231 352' />
        <Burger />
      </div>
    </header>
  )
}

export default Header
