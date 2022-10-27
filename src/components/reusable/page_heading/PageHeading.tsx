import { useRouter } from 'next/router'
import React from 'react'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import styles from './PageHeading.module.css'

interface PageHeadingProps {
  title: string
  backgroundColor: string
  textColor: string
}

function PageHeading({ title, backgroundColor, textColor }: PageHeadingProps) {
  return (
    <div
      className={styles.container}
      style={{ '--background-cl': backgroundColor, '--text-cl': textColor } as React.CSSProperties}
    >
      <div className={styles.inner}>
        <Breadcrumbs />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  )
}
export default PageHeading
