'use client'

import React, { FC, useEffect } from 'react'

import { Props as SelectOptionsListProps } from '../SelectOptionList/SelectOptionList'

import { Card } from '@/components/ui/Card/Card'
import { SelectOptionList } from '../SelectOptionList/SelectOptionList'

interface Props extends SelectOptionsListProps {
  onClose: () => void,
}

export const SelectOptions: FC<Props> = ({ options, onClose }) => {
  useEffect(() => {
    const scrollHandler = () => onClose()
    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [onClose])

  return (
    <Card withShadow>
      <SelectOptionList options={options} />
    </Card>
  )
}
