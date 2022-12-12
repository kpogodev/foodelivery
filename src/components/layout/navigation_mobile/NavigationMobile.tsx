import { useContext } from "react"
import Link from "next/link"
import { v4 as uuid } from "uuid"
import { motion } from "framer-motion"
import { BurgerContext } from "components/layout/header/burger/BurgerContext"
import Logo from "components/layout/header/logo/Logo"
import CrossIcon from "assets/cross.svg"
import { containerVariants, containerInnerVariants, listVariants, listItemVariants } from "./animation-variatns"
import styles from "./NavigationMobile.module.css"

interface NavigationProps {
  topics: string[]
}

function NavigationMobile({ topics }: NavigationProps) {
  const ctx = useContext(BurgerContext)

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      animate={ctx.isOpen ? "open" : "closed"}
      onClick={ctx.close}
      style={{ pointerEvents: ctx.isOpen ? "all" : "none" }}
    >
      <motion.nav
        className={styles.inner}
        variants={containerInnerVariants}
        animate={ctx.isOpen ? "open" : "closed"}
        data-burger-box
      >
        <div className={styles.bar}>
          <Logo text='foodelivery' />
          <button className={styles.button} onClick={ctx.handleToggle}>
            <CrossIcon />
          </button>
        </div>
        <motion.ul
          className={styles.list}
          variants={listVariants}
          initial='hide'
          animate={ctx.isOpen ? "show" : "hide"}
        >
          {topics.map((topic) => (
            <motion.li className={styles.item} key={uuid()} variants={listItemVariants}>
              <Link href={`/${topic.toLowerCase()}`}>
                <a className={styles.link}>{topic}</a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.div>
  )
}
export default NavigationMobile
