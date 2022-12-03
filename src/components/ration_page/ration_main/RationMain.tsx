import RationList from "../ration_list/RationList"
import styles from "./RationMain.module.css"
import RationDayPicker from "components/ration_page/ration_day_picker/RationDayPicker"
import RationContent from "components/ration_page/ration_content/RationContent"

function RationMain() {
  return (
    <div className={styles.container}>
      <RationContent
        header='Ration for weight lose'
        kcal='1300-1500 kcal'
        course='7 days'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam nulla perspiciatis deleniti explicabo ipsa quam debitis, repellendus tempora! Totam repudiandae explicabo quasi eveniet aut optio qui deleniti fugit sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque inventore, ut veniam praesentium quibusdam officia soluta quis beatae optio dolor cum officiis reprehenderit modi, corrupti consequatur, cumque fugit alias impedit!'
      />
      <RationDayPicker days={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]} />
      <RationList />
    </div>
  )
}

export default RationMain
