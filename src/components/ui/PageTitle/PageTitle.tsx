import React, { FC, PropsWithChildren } from 'react'
import classnames from 'classnames'

import styles from './PageTitle.module.css'

interface Props {
  className?: string,
}

export const PageTitle: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const finalClassName = classnames(styles.title, className)

  return (
    <h1 className={finalClassName}>
      {children}
    </h1>
  )
}
