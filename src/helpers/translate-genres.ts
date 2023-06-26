import { IFilm } from '@/models/film.model'

const genresTranslations: { [key: string]: string } = {
  fantasy: 'Фэнтези',
  horror: 'Ужасы',
  action: 'Боевик',
  comedy: 'Комедия',
}

export const translateGenre = (film: IFilm): IFilm => {
  return { ...film, genre: genresTranslations[film.genre] }
}

export const translateGenres = (films: IFilm[]): IFilm[] => {
  return films.map(translateGenre)
}
