import React, { FC } from 'react'

import { useTotalTicketsCountSelector } from '@/hooks/selectors/useTotalTicketsCountSelector'

import styles from './TicketTotalCount.module.css'

import { Card } from '@/components/ui/Card/Card'

export const TicketTotalCount: FC = () => {
  const totalCount = useTotalTicketsCountSelector()

  return (
    <Card>
      <div className={styles.container}>
        <span className={styles.text}>Итого билетов:</span>
        <span className={styles.text}>{totalCount}</span>
      </div>
    </Card>
  )
}
