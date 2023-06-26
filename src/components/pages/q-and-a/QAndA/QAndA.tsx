import React, { FC } from 'react'

import styles from './QAndA.module.css'

import { PageTitleCard } from '@/components/ui/PageTitleCard/PageTitleCard'
import { QuestionList } from '../QuestionList/QuestionList'

export const QAndA: FC = () => {
  return (
    <>
      <PageTitleCard className={styles.title}>
        Вопросы-ответы
      </PageTitleCard>
      <QuestionList />
    </>
  )
}
