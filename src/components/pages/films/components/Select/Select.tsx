'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'

import { ISelectOption } from '../../types/ISelectOption'
import { IOption } from '../../hooks/useFilter'
import { OnSelect } from '../SelectOption/SelectOption'

import styles from './Select.module.css'

import { prepareOptions } from '../../helpers/prepare-options'
import { SelectOptions } from '../SelectOptions/SelectOptions'

interface Props {
  title: string,
  placeholder: string,
  currOption: string,
  onSelect: OnSelect,
  options: ISelectOption[],
}

export const Select: FC<Props> = ({
  title,
  currOption,
  options,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectContainerElement, setSelectContainerElement] = useState<HTMLDivElement>()

  useEffect(() => {
    setSelectContainerElement(document.querySelector<HTMLDivElement>('#selects')!)
  }, [])

  const currentSelectRef = useRef<HTMLDivElement>(null)

  const onOpenOptions = () => {
    const { left, bottom } = currentSelectRef.current!.getBoundingClientRect()
    const width = currentSelectRef.current!.offsetWidth

    selectContainerElement!.style.left = `${left}px`
    selectContainerElement!.style.top = `${bottom + window.scrollY}px`
    selectContainerElement!.style.width = `${width}px`

    setIsOpen(true)
  }

  const onCloseOptions = () => {
    setIsOpen(false)
  }

  const onToggleOptions = () => !isOpen ? onOpenOptions() : onCloseOptions()

  const handleSelect = (option: IOption) => {
    onSelect(option)
    onCloseOptions()
  }

  const optionsWithHandler = prepareOptions(options, handleSelect)

  const finalTitleClassName = classnames({
    [styles.title]: true,
    [styles.titleSelected]: currOption !== '',
  })

  const finalButtonClassName = classnames({
    [styles.button]: true,
    [styles.buttonOpen]: isOpen,
  })

  return (
    <div ref={currentSelectRef}>
      <span className={styles.label}>{title}</span>
      <div className={styles.field}>
        <span className={finalTitleClassName}>{currOption || placeholder}</span>
        <button type="button" className={finalButtonClassName} onClick={onToggleOptions}/>
      </div>
      {
        isOpen &&
          createPortal(
            <SelectOptions  options={optionsWithHandler} onClose={onCloseOptions} />,
            selectContainerElement!,
          )
      }
    </div>
  )
}
