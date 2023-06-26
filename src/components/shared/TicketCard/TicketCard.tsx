import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IFilm } from '@/models/film.model'

import styles from './TicketCard.module.css'

import { Card } from '@/components/ui/Card/Card'
import { TicketCounter } from '../TicketCounter/TicketCounter'

interface Props {
  film: IFilm,
}

export const TicketCard: FC<Props> = ({ film }) => {
  return (
    <Card>
      <div className={styles.content}>
        <div className={styles.filmInfo}>
          <Image
            src={film.posterUrl}
            alt="Постер"
            className={styles.filmImage}
            loading="lazy"
            placeholder="empty"
            height={120}
            width={100}
          />
          <div>
            <Link href={`/film/${film.id}`} className={styles.filmTitle}>
              {film.title}
            </Link>
            <p className={styles.filmGenre}>
              {film.genre}
            </p>
          </div>
        </div>

        <TicketCounter id={film.id} />
      </div>
    </Card>
  )
}
