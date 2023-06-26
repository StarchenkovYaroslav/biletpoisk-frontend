import React, { FC } from 'react'

import styles from './Footer.module.css'
import Link from 'next/link'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/q-and-a" className={styles.link}>Вопросы-ответы</Link>
      <Link href="/about-us" className={styles.link}>О нас</Link>
    </footer>
  )
}
