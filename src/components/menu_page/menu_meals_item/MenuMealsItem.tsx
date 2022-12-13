import styles from "./MenuMealsItem.module.css"

function MenuMealsItem() {
  return (
    <div className={styles.container}>
      <div className={styles.img_wrap}></div>
      <div className={styles.body}>
        <h3 className={styles.title}>Title</h3>
      </div>
    </div>
  )
}
export default MenuMealsItem
