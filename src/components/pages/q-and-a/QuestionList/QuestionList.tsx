import React, { FC } from 'react'

import { IQuestion } from '@/models/question.model'

import { questions } from '@/data/questions'

import styles from './QuestionList.module.css'

import { List, renderItem, getItemKey } from '@/components/ui/List/List'
import { Question } from '../Question/Question'

export const QuestionList: FC= () => {
  const getQuestionKey: getItemKey<IQuestion> = question => question.id

  const renderQuestion: renderItem<IQuestion> = question => <Question question={question} />

  return (
    <List<IQuestion>
      data={questions}
      getItemKey={getQuestionKey}
      renderItem={renderQuestion}
      listClassName={styles.list}
      itemClassName={styles.item}
    />
  )
}
