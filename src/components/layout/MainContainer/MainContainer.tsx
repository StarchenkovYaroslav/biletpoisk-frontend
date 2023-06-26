import React, { FC, PropsWithChildren } from 'react'

import styles from './MainContainer.module.css'

export const MainContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}
