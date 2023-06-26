import React, { FC } from 'react'

import { ISelectOption } from '../../types/ISelectOption'
import { IOption } from '../../hooks/useFilter'

import styles from './SelectOption.module.css'

export type OnSelect = (option: IOption) => void

export interface Props extends ISelectOption {
  onSelect: OnSelect,
}

export const SelectOption: FC<Props> = ({ name, value, onSelect }) => {
  const handleSelect = () => onSelect({ name, value })

  return (
    <span className={styles.selectOption} onClick={handleSelect}>{name}</span>
  )
}
