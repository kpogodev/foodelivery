import RationList from "../ration_list/RationList"
import styles from "./RationMain.module.css"
import RationDayPicker from "components/ration_page/ration_day_picker/RationDayPicker"
import RationContent from "components/ration_page/ration_content/RationContent"

function RationMain() {
  return (
    <div className={styles.container}>
      <RationContent />
      <RationDayPicker />
      <RationList />
    </div>
  )
}

export default RationMain
