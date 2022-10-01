import Image from 'next/future/image'
import styles from './StepItem.module.css'

interface StepItemProps {
  title: string
  description: string
  image: string
  reverse?: boolean
}

function StepItem({ title, description, image, reverse }: StepItemProps) {
  return (
    <div className={`${styles.container} ${reverse ? styles.reversed : ''}`}>
      <Image className={styles.img} src={image} alt='Step 1' width={1024} height={768} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  )
}
export default StepItem
