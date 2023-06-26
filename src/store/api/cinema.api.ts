import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICinema } from '@/models/cinema.model'
import { ISelectOption } from '@/components/pages/films/types/ISelectOption'

export const cinemaApi = createApi({
  reducerPath: 'cinemaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api',
  }),
  endpoints: build => ({
    getCinemaOptions: build.query<ISelectOption[], void>({
      query: () => ({
        url: '/cinemas',
      }),
      transformResponse: (cinemas: ICinema[]) => {
        return cinemas.map(({ name, id }) => ({ name, value: id }))
      },
    }),
  }),
})

export const {
  useGetCinemaOptionsQuery,
} = cinemaApi
