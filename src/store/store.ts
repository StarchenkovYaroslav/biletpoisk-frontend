import { configureStore } from '@reduxjs/toolkit'

import { filmApi } from './api/film.api'
import { reviewApi } from './api/review.api'
import { cinemaApi } from './api/cinema.api'

import { cartReducer } from './slices/cart.slice'

export const store = configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(filmApi.middleware)
      .concat(reviewApi.middleware)
      .concat(cinemaApi.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
