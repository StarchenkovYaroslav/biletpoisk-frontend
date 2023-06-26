import { useState } from 'react'

import { useDebounce } from './useDebounce'
import { IFilterParams } from '../components/FilmsTicketCardList/FilmsTicketCardList'

export interface IOption {
  name: string,
  value: string,
}

export interface IFields {
  title: string,
  genre: IOption,
  cinema: IOption,
}

const initialFields: IFields = {
  title: '',
  genre: { name: '', value: '' },
  cinema: { name: '', value: '' },
}

export const useFilter = () => {
  const [fields, setFields] = useState<IFields>(initialFields)

  const setTitle = (title: string) => setFields(currFields => ({ ...currFields, title }))
  const setGenre = (genre: IOption) => setFields(currFields => ({ ...currFields, genre }))
  const setCinema = (cinema: IOption) => setFields(currFields => ({ ...currFields, cinema }))

  const debouncedFilterParams = useDebounce<IFilterParams>({
    title: fields.title,
    genre: fields.genre.value,
    cinemaId: fields.cinema.value,
  })

  return {
    fields,
    debouncedFilterParams,
    setTitle,
    setGenre,
    setCinema,
  }
}
