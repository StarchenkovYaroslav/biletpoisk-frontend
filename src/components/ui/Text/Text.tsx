import React, { FC, PropsWithChildren } from 'react'

import styles from './Text.module.css'

export const Text: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.text}>
      {children}
    </div>
  )
}
