import Image from 'next/future/image'
import React from 'react'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import styles from './PageHeading.module.css'

interface PageHeadingProps {
  title: string
  backgroundColor: string
  textColor: string
  imgSrc?: string
}

function PageHeading({ title, backgroundColor, textColor, imgSrc }: PageHeadingProps) {
  return (
    <div
      className={styles.container}
      style={{ '--background-cl': backgroundColor, '--text-cl': textColor } as React.CSSProperties}
    >
      <div className={styles.inner}>
        <Breadcrumbs />
        <h1 className={styles.title}>{title}</h1>
        {imgSrc ? (
          <div className={styles.img}>
            <Image src={imgSrc} alt='' fill />
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default PageHeading
