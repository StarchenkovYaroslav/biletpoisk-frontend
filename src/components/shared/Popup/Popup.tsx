import React, { FC } from 'react'
import classnames from 'classnames'

import styles from './Popup.module.css'

import { Card } from '@/components/ui/Card/Card'

interface Props {
  onConfirm: () => void,
  onReject: () => void,
  onClose: () => void,
}

export const Popup: FC<Props> = ({ onConfirm, onReject, onClose }) => {
  const yesButtonClassName = classnames(styles.button, styles.yesButton)
  const noButtonClassName = classnames(styles.button, styles.noButton)

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div onClick={evt => evt.stopPropagation()}>
        <Card>
          <div className={styles.header}>
            <p className={styles.title}>Удаление билета</p>
            <button type="button" className={styles.closeButton} onClick={onClose} />
          </div>
          <p className={styles.question}>Вы уверены, что хотите удалить билет?</p>
          <div className={styles.buttons}>
            <button type="button" className={yesButtonClassName} onClick={onConfirm}>Да</button>
            <button type="button" className={noButtonClassName} onClick={onReject}>Нет</button>
          </div>
        </Card>
      </div>
    </div>
  )
}
