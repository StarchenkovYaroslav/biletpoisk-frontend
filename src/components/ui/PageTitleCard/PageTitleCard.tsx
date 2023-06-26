import React, { FC, PropsWithChildren } from 'react'

import styles from './PageTitleCard.module.css'

import { Card } from '../Card/Card'
import { PageTitle } from '../PageTitle/PageTitle'

interface Props {
  className?: string
}

export const PageTitleCard: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <Card className={className}>
      <PageTitle className={styles.title}>
        {children}
      </PageTitle>
    </Card>
  )
}
