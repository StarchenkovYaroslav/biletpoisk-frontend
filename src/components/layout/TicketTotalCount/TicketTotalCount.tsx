'use client'

import React, { FC } from 'react'

import styles from './TicketTotalCount.module.css'
import { useTotalTicketsCountSelector } from '@/hooks/selectors/useTotalTicketsCountSelector'

export const TicketTotalCount: FC = () => {
  const totalCount = useTotalTicketsCountSelector()

  if (totalCount === 0) {
    return null
  }

  return (
    <span className={styles.count}>{totalCount}</span>
  )
}
