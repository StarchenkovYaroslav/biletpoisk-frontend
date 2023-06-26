import React, { ChangeEventHandler, FC } from 'react'

import { useGetCinemaOptionsQuery } from '@/store/api/cinema.api'
import { IOption, IFields } from '../../hooks/useFilter'
import { initialGenreSelectOptions } from '../../data/initial-genre-select-options'

import styles from './FilterPanel.module.css'

import { Card } from '@/components/ui/Card/Card'
import { Select } from '../Select/Select'

interface Props {
  fields: IFields,
  setCinema: (cinema: IOption) => void,
  setGenre: (genre: IOption) => void,
  setTitle: (title: string) => void,
}

export const FilterPanel: FC<Props> = ({
  fields,
  setGenre,
  setTitle,
  setCinema,
}) => {
  const {
    data: cinemaOptions,
  } = useGetCinemaOptionsQuery()

  const onTitleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => setTitle(evt.target.value)

  return (
    <Card>
      <div className={styles.container}>
        <p className={styles.title}>Фильтр поиска</p>
        <form className={styles.form}>
          <div>
            <span className={styles.label}>Название</span>
            <input
              placeholder="Введите название"
              className={styles.input}
              onChange={onTitleInputChange}
              value={fields.title}
            />
          </div>
          <Select
            title="Жанр"
            placeholder="Выберите жанр"
            currOption={fields.genre.name}
            options={initialGenreSelectOptions}
            onSelect={setGenre}
          />
          <Select
            title="Кинотеатр"
            placeholder="Выберите кинотеатр"
            currOption={fields.cinema.name}
            options={cinemaOptions || []}
            onSelect={setCinema}
          />
        </form>
      </div>
    </Card>
  )
}
