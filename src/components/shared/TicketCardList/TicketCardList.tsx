import React, { FC } from 'react'

import { IFilm } from '@/models/film.model'

import styles from './TicketCardList.module.css'

import { List, renderItem, getItemKey } from '@/components/ui/List/List'
import { TicketCard } from '../TicketCard/TicketCard'

interface Props {
  films: IFilm[]
}

export const TicketCardList: FC<Props> = ({ films }) => {
  const getTicketKey: getItemKey<IFilm> = (film) => film.id
  const renderTicket: renderItem<IFilm> = (film) => <TicketCard film={film} />

  return (
    <List<IFilm>
      data={films}
      getItemKey={getTicketKey}
      renderItem={renderTicket}
      listClassName={styles.list}
      itemClassName={styles.item}
    />
  )
}
