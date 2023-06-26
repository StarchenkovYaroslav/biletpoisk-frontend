import React, { FC, memo } from 'react'
import { TicketCardList } from '@/components/shared/TicketCardList/TicketCardList'
import { useGetFilteredFilmsQuery } from '@/store/api/film.api'

export interface IFilterParams {
  title: string
  genre: string,
  cinemaId: string,
}

interface Props {
  filterParams: IFilterParams,
}

const FilmsTicketCardList: FC<Props> = ({ filterParams }) => {
  const {
    data: films,
    isLoading: areFilmsLoading,
  } = useGetFilteredFilmsQuery(filterParams)

  if (areFilmsLoading) {
    return <div>Загрузка...</div>
  }

  if (films && !films.length) {
    return <div>Ничего не найдено</div>
  }

  return (
    films
      ?
      <TicketCardList films={films} />
      :
      <div>Ошибка</div>
  )
}

export const MemoizedFilmsTicketCardList = memo<Props>(FilmsTicketCardList)
