import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IReview } from '@/models/review.model'

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api',
  }),
  endpoints: build => ({
    getReviewsByFilmId: build.query<IReview[], string>({
      query: (id) => ({
        url: `reviews?movieId=${id}`,
      }),
    }),
  }),
})

export const {
  useGetReviewsByFilmIdQuery,
} = reviewApi
