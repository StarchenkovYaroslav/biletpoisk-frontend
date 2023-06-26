import React, { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.css'

import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { MainContainer } from '../MainContainer/MainContainer'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.page}>
        <Header/>
          <MainContainer>
            {children}
          </MainContainer>
        <Footer />
      </div>

      <div id="popups" className={styles.popups} />
      <div id="selects" className={styles.selects} />
    </>
  )
};
