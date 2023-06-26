import { useTypedSelector } from '../useTypedSelector'

export const useTotalTicketsCountSelector = () => {
  return Object.values(useTypedSelector(state => state.cart))
    .reduce((totalCount, ticketCount) => totalCount + ticketCount, 0)
}
