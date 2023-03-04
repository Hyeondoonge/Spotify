import { Types } from 'mongoose'

export interface IMusic {
  id: Types.ObjectId
  albumId: Types.ObjectId
  title: string
  lyrics: string
  audioUrl: string
  shortUrl?: string
  playerBackgroundColor: string
  lyricsBackgroundColor: string
  primaryGenreId: Types.ObjectId
  secondaryGenreId: Types.ObjectId
}
