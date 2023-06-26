import { useTypedSelector } from '../useTypedSelector'

export const useFilmsIdsSelector = () => {
  return Object.keys(useTypedSelector(state => state.cart))
}
