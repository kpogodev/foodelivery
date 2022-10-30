import styles from './Counter.module.css'
import CounterItem from './counter_item/CounterItem'

interface CounterProps {
  happyClients: number
  ordersEveryday: number
  professionals: number
  daysWork: string
}

function Counter({ happyClients, ordersEveryday, professionals, daysWork }: CounterProps) {
  const daysSince = (date: string) => {
    const today = new Date()
    const startDate = new Date(date)
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          <CounterItem value={happyClients} label='Happy Clients' initialOrbit={0} valueWithPlusSign />
          <CounterItem value={ordersEveryday} label='Oders Everyday' initialOrbit={180} valueWithPlusSign />
          <CounterItem value={professionals} label='Professionals' initialOrbit={0} />
          <CounterItem value={daysSince(daysWork)} label='Days Work' initialOrbit={180} />
        </ul>
      </div>
    </div>
  )
}
export default Counter
