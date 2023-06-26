'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = Record<string, number>

const initialState: State = {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<string>) {
      const currCount = state[action.payload] || 0

      state[action.payload] = currCount + 1 <= 30 ? currCount + 1 : 30
    },
    decrement(state, action: PayloadAction<string>) {
      const currCount = state[action.payload]

      if (!currCount) {
        return
      }

      if (currCount === 1) {
        delete state[action.payload]
        return
      }

      state[action.payload] = state[action.payload] - 1
    },
    remove(state, action: PayloadAction<string>) {
      delete state[action.payload]
    },
  },
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
