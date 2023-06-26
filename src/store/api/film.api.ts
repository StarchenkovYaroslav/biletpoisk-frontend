import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IFilm } from '@/models/film.model'

import { translateGenre, translateGenres } from '@/helpers/translate-genres'

export const filmApi = createApi({
  reducerPath: 'filmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api',
  }),
  endpoints: build => ({
    getAllFilms: build.query<IFilm[], void>({
      query: () => ({
        url: 'movies',
      }),
      transformResponse: ((initialFilms: IFilm[]) => translateGenres(initialFilms)),
    }),
    getFilmById: build.query<IFilm, string>({
      query: (id) => ({
        url: `movie?movieId=${id}`,
      }),
      transformResponse: ((initialFilm: IFilm) => translateGenre(initialFilm)),
    }),
    getFilmsByIds: build.query<IFilm[], string[]>({
      async queryFn(ids, _queryApi, _extraOptions, baseQuery) {
        const queryResults = await Promise.all(ids.map(id => baseQuery(`movie?movieId=${id}`)))

        const films = queryResults.map(result => result.data) as IFilm[]

        return { data: translateGenres(films) }
      },
    }),
    getFilteredFilms: build.query<IFilm[], { title: string, cinemaId: string, genre: string }>({
      async queryFn({ title, cinemaId, genre }, _queryApi, _extraOptions, baseQuery) {
        let films: IFilm[] = []

        if (cinemaId) {
          films = (await baseQuery(`movies?cinemaId=${cinemaId}`)).data as IFilm[]
        } else {
          films = (await baseQuery('movies')).data as IFilm[]
        }

        films = translateGenres(films)

        if (title) {
          films = films.filter(film => film.title.toLowerCase().includes(title.toLowerCase()))
        }

        if (genre) {
          films = films.filter(film => film.genre === genre)
        }

        return { data: films }
      },
    }),
  }),
})

export const {
  useGetAllFilmsQuery,
  useGetFilmByIdQuery,
  useGetFilmsByIdsQuery,
  useGetFilteredFilmsQuery,
} = filmApi
