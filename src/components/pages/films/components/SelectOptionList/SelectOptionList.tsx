import React, { FC } from 'react'
import { getItemKey, List, renderItem } from '@/components/ui/List/List'

import { Props as SelectOptionProps, SelectOption } from '../SelectOption/SelectOption'

import styles from './SelectOptionList.module.css'

export interface Props {
  options: SelectOptionProps[],
}

export const SelectOptionList: FC<Props> = ({ options }) => {
  const getOptionKey: getItemKey<SelectOptionProps> = (_option, index) => index
  const renderOption: renderItem<SelectOptionProps> = ({ name, value, onSelect }) => {
    return <SelectOption name={name} value={value} onSelect={onSelect} />
  }

  return (
    <List<SelectOptionProps>
      data={options}
      getItemKey={getOptionKey}
      renderItem={renderOption}
      listClassName={styles.list}
      itemClassName={styles.item}
    />
  )
}
