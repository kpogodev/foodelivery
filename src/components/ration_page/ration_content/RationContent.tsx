import styles from "./RationContent.module.css"
import KcalIcon from "assets/kcal.svg"
import CalendarIcon from "assets/calendar.svg"

interface RationContentProps {
  header: string
  kcal: string
  course: string
  description: string
}

function RationContent({ header, kcal, course, description }: RationContentProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.info_bar}>
        <span>
          <KcalIcon className={styles.icon} />
          {kcal}
        </span>
        <span>
          <CalendarIcon className={styles.icon} />
          {course}
        </span>
      </div>
      <p className={styles.text}>{description}</p>
    </div>
  )
}
export default RationContent
