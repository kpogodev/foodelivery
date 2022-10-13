import styles from './HowItWorks.module.css'
import Watermark from 'assets/watermark-how-it-works.svg'
import ConnectorLeft from 'assets/connector-left.svg'
import ConnectorRight from 'assets/connector-right.svg'
import StepItem from './step_item/StepItem'
import { motion } from 'framer-motion'

function HowItWorks() {
  return (
    <motion.div
      className={styles.container}
      initial='offscreen'
      whileInView='onscreen'
      transition={{ staggerChildren: 0.1 }}
      viewport={{ amount: 0.6, once: true }}
    >
      <div className={styles.inner}>
        <Watermark className={styles.watermark} />
        <ConnectorLeft className={styles.connector_left} />
        <ConnectorRight className={styles.connector_right} />
        <StepItem
          title='Choose'
          image='/order.png'
          description='Do you want to lose weight, exercise, adhere to a therapeutic diet? Our dietitian will help you with choosing the right program!'
        />
        <StepItem
          title='Prepare Food'
          image='/salmon.png'
          description='We prepare food from fresh and proven products according to the menu developed by our chef, nutritionist and fitness trainer.'
          reverse
        />
        <StepItem
          title='Deliver'
          image='/delivery.png'
          description='Home or Office? Our courier will deliver your food to you at the time you choose.'
        />
      </div>
    </motion.div>
  )
}
export default HowItWorks
