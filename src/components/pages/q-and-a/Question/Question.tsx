'use client'

import React, { FC, useState } from 'react'
import classnames from 'classnames'

import { IQuestion } from '@/models/question.model'

import styles from './Question.module.css'

import { Card } from '@/components/ui/Card/Card'
import { Text } from '@/components/ui/Text/Text'
import { Paragraph } from '@/components/ui/Paragraph/Paragraph'

type Props = {
  question: IQuestion,
}

export const Question: FC<Props> = ({ question }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)

  const onButtonClick = () => setIsAnswerOpen(currIsOpen => !currIsOpen)

  const answerClassName = classnames({
    [styles.answer]: true,
    [styles.answerOpen]: isAnswerOpen,
  })

  const buttonClassName = classnames({
    [styles.button]: true,
    [styles.buttonOpen]: isAnswerOpen,
  })

  return (
    <Card>
      <div className={styles.header}>
        <h2 className={styles.title}>{question.question}</h2>
        <button type="button" className={buttonClassName} onClick={onButtonClick} />
      </div>
      <div className={answerClassName}>
        <Text>
          <Paragraph>
            {question.answer}
          </Paragraph>
        </Text>
      </div>
    </Card>
  )
}
