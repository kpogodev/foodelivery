import Image from 'next/image'
import styles from './Hero.module.css'
import Watermark from 'assets/watermark-special.svg'
import SpecialDeal from './special_deal/SpecialDeal'


function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <SpecialDeal />
        <div className={styles.image}>
          <Image src='/salmon.webp' width={600} height={600} objectFit='contain' alt='' />
        </div>
      </div>
      <div className={styles.pad}>
        <Watermark className={styles.pad_watermark} />
      </div>
    </div>
  )
}

export default Hero
