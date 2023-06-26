import React, { FC } from 'react'
import Link from 'next/link'

import styles from './Header.module.css'

import { TicketTotalCount } from '../TicketTotalCount/TicketTotalCount'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href='/films' className={styles.title}>
        Билетпоиск
      </Link>
      <div className={styles.cartContainer}>
        <TicketTotalCount />
        <Link href="/cart" className={styles.cartLink} />
      </div>
    </header>
  )
}
