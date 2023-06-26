import React, { FC, PropsWithChildren } from 'react'
import classnames from 'classnames'

import styles from './Card.module.css'

interface Props {
  withShadow?: boolean,
  className?: string,
}

export const Card: FC<PropsWithChildren<Props>> = ({ children, className, withShadow = false }) => {
  const finalClassName = classnames({
    [styles.card]: true,
    [styles.cardShadow]: withShadow,
  }, className)

  return (
    <div className={finalClassName}>
      {children}
    </div>
  )
}
