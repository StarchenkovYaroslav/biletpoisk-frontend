'use client'

import React, { FC } from 'react'

import { useGetFilmsByIdsQuery } from '@/store/api/film.api'
import { useFilmsIdsSelector } from '@/hooks/selectors/useFilmsIdsSelector'

import styles from './Cart.module.css'

import { TicketCardList } from '../../../shared/TicketCardList/TicketCardList'
import { TicketTotalCount } from '../TicketTotalCount/TicketTotalCount'

export const Cart: FC = () => {
  const {
    data: films,
    isLoading: areFilmsLoading,
  } = useGetFilmsByIdsQuery(useFilmsIdsSelector())

  if (areFilmsLoading) {
    return <div>Загрузка</div>
  }

  if (films && !films.length) {
    return <div>Корзина пуста</div>
  }

  return (
    films
      ?
      <div className={styles.container}>
        <TicketCardList films={films} />
        <TicketTotalCount />
      </div>
      :
      <div>Ошибка</div>
  )
}
