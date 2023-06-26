import React, { FC } from 'react'
import classnames from 'classnames'

import styles from './FilmInfoItem.module.css'

interface Props {
  property: string,
  value: string | number,
}

export const FilmInfoItem: FC<Props> = ({ property, value }) => {
  const keyClassName = classnames(styles.text, styles.key)
  const valueClassName = classnames(styles.text, styles.value)

  return (
    <div>
      <span className={keyClassName}>{`${property}: `}</span>
      <span className={valueClassName}>{value}</span>
    </div>
  )
}
