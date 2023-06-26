'use client'

import React, { FC } from 'react'
import Image from 'next/image'

import { useGetFilmByIdQuery } from '@/store/api/film.api'

import styles from './FilmCard.module.css'

import { Card } from '@/components/ui/Card/Card'
import { PageTitle } from '@/components/ui/PageTitle/PageTitle'
import { Text } from '@/components/ui/Text/Text'
import { Paragraph } from '@/components/ui/Paragraph/Paragraph'
import { TicketCounter } from '@/components/shared/TicketCounter/TicketCounter'
import { FilmInfoItem } from '../FilmInfoItem/FilmInfoItem'

interface Props {
  id: string,
}

export const FilmCard: FC<Props> = ({ id }) => {
  const {
    data: film,
    isLoading: isFilmLoading,
  } = useGetFilmByIdQuery(id)

  if (isFilmLoading) {
    return <div>Загрузка фильма...</div>
  }

  return (
    film
      ?
      <Card className={styles.card}>
        <div className={styles.container}>
          <div className={styles.filmImageContainer}>
            <Image
              src={film.posterUrl}
              alt="Постер"
              className={styles.filmImage}
              priority
              height={500}
              width={400}
            />
          </div>

          <div>
            <div className={styles.header}>
              <PageTitle className={styles.filmName}>
                {film.title}
              </PageTitle>
              <TicketCounter id={id} />
            </div>

            <div className={styles.filmInfo}>
              <FilmInfoItem property="Жанр" value={film.genre} />
              <FilmInfoItem property="Год" value={film.releaseYear} />
              <FilmInfoItem property="Рейтинг" value={film.rating} />
              <FilmInfoItem property="Режиссер" value={film.director} />
            </div>

            <div>
              <p className={styles.descriptionTitle}>Описание</p>
              <Text>
                <Paragraph>
                  {film.description}
                </Paragraph>
              </Text>
            </div>
          </div>
        </div>
      </Card>
      :
      <div>Ошибка загрузки фильма</div>
  )
}
