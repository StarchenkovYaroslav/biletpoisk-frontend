'use client'

import React, { FC } from 'react'

import { useGetReviewsByFilmIdQuery } from '@/store/api/review.api'

import { IReview } from '@/models/review.model'

import styles from './ReviewCardList.module.css'

import { List, renderItem, getItemKey } from '@/components/ui/List/List'
import { ReviewCard } from '../ReviewCard/ReviewCard'

interface Props {
  id: string,
}

export const ReviewCardList: FC<Props> = ({ id }) => {
  const {
    data: reviews,
    isLoading: areReviewLoading,
  } = useGetReviewsByFilmIdQuery(id)

  const getReviewKey: getItemKey<IReview> = (review) => review.id
  const renderReview: renderItem<IReview> = (review) => <ReviewCard review={review}/>

  if (areReviewLoading) {
    return <div>Загрузка комментариев...</div>
  }

  if (reviews && !reviews.length) {
    return <div>Нет комментариев</div>
  }

  return (
    reviews
      ?
      <List<IReview>
        data={reviews}
        getItemKey={getReviewKey}
        renderItem={renderReview}
        listClassName={styles.list}
        itemClassName={styles.item}
      />
      :
      <div>Ошибка загрузки комментариев</div>
  )
}
