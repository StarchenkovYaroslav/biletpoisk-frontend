'use client'

import React, { FC } from 'react'

import { useFilter } from '../../hooks/useFilter'

import styles from './Films.module.css'

import { FilterPanel } from '../FilterPanel/FilterPanel'
import { MemoizedFilmsTicketCardList } from '../FilmsTicketCardList/FilmsTicketCardList'

export const Films: FC = () => {
  const {
    fields,
    debouncedFilterParams,
    setCinema,
    setGenre,
    setTitle,
  } = useFilter()

  return (
      <div className={styles.container}>
        <FilterPanel
         fields={fields}
         setGenre={setGenre}
         setCinema={setCinema}
         setTitle={setTitle}
        />

        <MemoizedFilmsTicketCardList
          filterParams={debouncedFilterParams}
        />
      </div>
  )
}
