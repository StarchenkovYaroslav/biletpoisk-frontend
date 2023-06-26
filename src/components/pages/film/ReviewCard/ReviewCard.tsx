import React, { FC } from 'react'
import Image from 'next/image'

import { IReview } from '../../../../models/review.model'

import avatarImage from '../../../../images/avatar-icon.jpg'

import styles from './ReviewCard.module.css'

import { Card } from '@/components/ui/Card/Card'
import { Text } from '@/components/ui/Text/Text'
import { Paragraph } from '@/components/ui/Paragraph/Paragraph'
import { Rate } from '../Rate/Rate'

interface Props {
  review: IReview,
}

export const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <Card>
      <div className={styles.container}>
        <div>
          <Image
            src={avatarImage}
            alt="аватар"
            className={styles.image}
            loading="lazy"
            placeholder="empty"
            height={100}
            width={100}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <p className={styles.name}>{review.name}</p>
            <Rate rate={review.rating} />
          </div>

          <Text>
            <Paragraph>
              {review.text}
            </Paragraph>
          </Text>
        </div>
      </div>
    </Card>
  )
}
