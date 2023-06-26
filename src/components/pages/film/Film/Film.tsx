import React, { FC } from 'react'

import { FilmCard } from '../FilmCard/FilmCard'
import { ReviewCardList } from '../ReviewCardList/ReviewCardList'

interface Props {
  id: string,
}

export const Film: FC<Props> = ({ id }) => {
  return (
    <>
      <FilmCard id={id} />
      <ReviewCardList id={id} />
    </>
  )
}
