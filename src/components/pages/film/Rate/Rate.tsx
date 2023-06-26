import React, { FC } from 'react'

import styles from './Rate.module.css'

interface Props {
  rate: number,
}

export const Rate: FC<Props> = ({ rate }) => {
  return (
    <p className={styles.rate}>
      {`Оценка: ${rate}`}
    </p>
  )
}
