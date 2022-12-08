import { useContext } from "react"
import { RationPlanContext } from "context/RationPlanContext"
import styles from "./RationContent.module.css"
import KcalIcon from "assets/kcal.svg"
import CalendarIcon from "assets/calendar.svg"

function RationContent() {
  const { rationPlanData } = useContext(RationPlanContext)

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{rationPlanData.plan_name}</h2>
      <div className={styles.info_bar}>
        <span>
          <KcalIcon className={styles.icon} />
          {rationPlanData.plan_calories_range}
        </span>
        <span>
          <CalendarIcon className={styles.icon} />
          {rationPlanData.plan_length}
        </span>
      </div>
      <p className={styles.text}>{rationPlanData.plan_description}</p>
    </div>
  )
}
export default RationContent
