'use client'

import React, { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

import { useActions } from '@/hooks/useActions'
import { useTicketsCountSelector } from '@/hooks/selectors/useTicketsCountSelector'

import styles from './TicketCounter.module.css'

import { Popup } from '../Popup/Popup'

const MAX_TICKETS_COUNT = 30
const MIN_TICKETS_COUNT = 0

interface Props {
  id: string,
}

export const TicketCounter: FC<Props> = ({ id }) => {
  const pathname = usePathname()
  const isCartPage = pathname === '/cart'

  const ticketsCount = useTicketsCountSelector(id)

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

  const { increment, decrement, remove } = useActions()

  const onOpenPopup = () => setIsPopupOpen(true)
  const onClosePopup = () => setIsPopupOpen(false)

  const onIncrement = () => increment(id)
  const onDecrement = () => {
    if (isCartPage && ticketsCount === 1) {
      onOpenPopup()
    } else {
      decrement(id)
    }

  }
  const onRemove = () => remove(id)

  const incrementButtonClassName = classnames(styles.button, styles.buttonIncrement)
  const decrementButtonClassName = classnames(styles.button, styles.buttonDecrement)
  const removeButtonClassName = classnames(styles.button, styles.removeButton)

  const isIncrementButtonDisabled = ticketsCount === MAX_TICKETS_COUNT
  const isDecrementButtonDisabled = ticketsCount === MIN_TICKETS_COUNT

  return (
    <>
      <div className={styles.container}>
        <button
          type="button"
          className={decrementButtonClassName}
          onClick={onDecrement}
          disabled={isDecrementButtonDisabled}
        />
        <span className={styles.ticketCount}>
          {ticketsCount}
        </span>
        <button
          type="button"
          onClick={onIncrement}
          className={incrementButtonClassName}
          disabled={isIncrementButtonDisabled}
        />
        {
          isCartPage
            &&
            <button
              type="button"
              className={removeButtonClassName}
              onClick={onOpenPopup}
            />
        }
      </div>

      {
        isPopupOpen
          &&
          createPortal(
            <Popup onConfirm={onRemove} onReject={onClosePopup} onClose={onClosePopup} />,
            document.getElementById('popups')!,
          )
      }
    </>
  )
}
