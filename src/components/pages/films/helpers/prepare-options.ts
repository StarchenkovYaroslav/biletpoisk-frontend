import { ISelectOption } from '../types/ISelectOption'

import { Props as SelectOptionProps, OnSelect } from '../components/SelectOption/SelectOption'

const baseOption: ISelectOption = {
  name: 'Не выбрано',
  value: '',
}

export const prepareOptions = (
  options: ISelectOption[],
  onSelect: OnSelect,
): SelectOptionProps[] => {
  return [ baseOption, ...options].map(option => ({ ...option, onSelect }))
}
