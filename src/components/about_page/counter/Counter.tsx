import styles from './Counter.module.css'
import CounterItem from './counter_item/CounterItem'

function Counter() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          <CounterItem value={1200} label='Happy Clients' initialOrbit={0} valueWithPlusSign />
          <CounterItem value={500} label='Oders Everyday' initialOrbit={180} valueWithPlusSign />
          <CounterItem value={32} label='Professionals' initialOrbit={0} />
          <CounterItem value={651} label='Days Work' initialOrbit={180} />
        </ul>
      </div>
    </div>
  )
}
export default Counter
