import Image from 'next/image'
import Link from 'next/link'
import AboutImg from 'assets/home-about.png'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <Image src={AboutImg} width={550} height={644} objectFit='contain' alt='' />
        </div>
        <div className={styles.content}>
          <h2 className={styles.header}>About Our Company</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nunc eu nisl ultrices, nec ultricies nisl aliquam. Sed euismod nunc eu
            nisl ultrices, nec ultricies nisl aliquam. Sed euismod nunc eu nisl
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nunc eu nisl ultrices, nec ultricies nisl aliquam. Sed euismod nunc eu
          </p>
          <Link href='/about'>
            <a className={styles.cta}>read more</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About