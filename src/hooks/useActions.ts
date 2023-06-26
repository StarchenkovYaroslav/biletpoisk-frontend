import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

import { cartActions } from '@/store/slices/cart.slice'

export const useActions = () => {
  return bindActionCreators(cartActions, useDispatch())
}
