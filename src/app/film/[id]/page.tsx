import React, { FC } from 'react'

import { Film } from '@/components/pages/film'

interface Props {
  params: { id: string },
}

const Page: FC<Props> = ({ params }) => <Film id={params.id} />

export default Page
