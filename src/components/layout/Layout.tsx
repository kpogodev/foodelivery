import { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BurgerContext } from './header/burger/BurgerContext'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.css'
import NavigationMobile from './navigation_mobile/NavigationMobile'

const layoutAnimation = {
  open: {
    scale: 0.5,
    borderRadius: '2.5rem',
    x: '2%',
    y: '1%',
    rotateY: 5,
    boxShadow: '20px -30px 50px rgba(0, 0, 0, 0.16)',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  closed: {
    scale: 1,
    borderRadius: 0,
    x: 0,
    y: 0,
    rotateY: 0,
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
}

function Layout({ children }: { children: React.ReactNode }) {
  const ctx = useContext(BurgerContext)

  return (
    <>
      <NavigationMobile topics={['About', 'Menu', 'Ration', 'News', 'FAQ', 'Contact']} />
      <motion.div className={styles.container} variants={layoutAnimation} animate={ctx.isOpen ? 'open' : 'closed'}>
        <Header />
        <AnimatePresence mode='wait'>
          {children}
        </AnimatePresence>
        <Footer />
      </motion.div>
    </>
  )
}
export default Layout
