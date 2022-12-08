import { useContext } from "react"
import { RationPlanContext } from "context/RationPlanContext"
import styles from "./RationContent.module.css"
import KcalIcon from "assets/kcal.svg"
import CalendarIcon from "assets/calendar.svg"
import { motion } from "framer-motion"

const elementsEntranceVariants = {
  offscreen: {
    opacity: 0,
    y: 60,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

function RationContent() {
  const { rationPlanData } = useContext(RationPlanContext)

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      transition={{ staggerChildren: 0.05 }}
      viewport={{ amount: 0.3, once: true }}
      className={styles.container}
    >
      <motion.h2 className={styles.header} variants={elementsEntranceVariants}>
        {rationPlanData.plan_name}
      </motion.h2>
      <motion.div className={styles.info_bar} variants={elementsEntranceVariants}>
        <span>
          <KcalIcon className={styles.icon} />
          {rationPlanData.plan_calories_range}
        </span>
        <span>
          <CalendarIcon className={styles.icon} />
          {rationPlanData.plan_length}
        </span>
      </motion.div>
      <motion.p className={styles.text} variants={elementsEntranceVariants}>
        {rationPlanData.plan_description}
      </motion.p>
    </motion.div>
  )
}
export default RationContent
