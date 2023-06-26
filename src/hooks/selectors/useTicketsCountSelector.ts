import { useTypedSelector } from '../useTypedSelector'

export const useTicketsCountSelector = (id: string) => {
  return useTypedSelector(state => state.cart)[id] || 0
}
