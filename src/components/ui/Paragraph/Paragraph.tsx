import React, { FC, PropsWithChildren } from 'react'

import styles from './Paragraph.module.css'

export const Paragraph: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className={styles.paragraph}>
      {children}
    </p>
  )
}
