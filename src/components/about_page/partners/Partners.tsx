import styles from './Partners.module.css'
import Image from 'next/future/image'

function Partners() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.img_wrap}>
          <Image className={styles.img} src='/partner-1.png' alt='' fill />
        </div>
        <div className={styles.img_wrap}>
          <Image className={styles.img} src='/partner-2.png' alt='' fill />
        </div>
        <div className={styles.img_wrap}>
          <Image className={styles.img} src='/partner-3.png' alt='' fill />
        </div>
        <div className={styles.img_wrap}>
          <Image className={styles.img} src='/partner-4.png' alt='' fill />
        </div>
      </div>
    </div>
  )
}
export default Partners
