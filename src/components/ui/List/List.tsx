import React from 'react'

import classnames from 'classnames'

import styles from './List.module.css'

export type getItemKey<Item> = (item: Item, index: number, arr: Item[]) => string | number

export type renderItem<Item> = (item: Item) => JSX.Element

interface Props<Item> {
  data: Item[]
  getItemKey: getItemKey<Item>
  renderItem: renderItem<Item>
  listClassName?: string
  itemClassName?: string
}

export function List<Item>({
  data,
  getItemKey,
  renderItem,
  listClassName,
  itemClassName,
}: Props<Item>) {
  const finalListClassName = classnames(styles.list, listClassName)
  const finalItemClassName = classnames(styles.item, itemClassName)

  return (
    <ul className={finalListClassName}>
      {data.map((item, index, arr) => (
        <li key={getItemKey(item, index, arr)} className={finalItemClassName}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}
