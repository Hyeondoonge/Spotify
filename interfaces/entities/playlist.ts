import { Types } from 'mongoose'

export interface IPlaylist {
  id: Types.ObjectId
  title: string
  userId: Types.ObjectId
  description?: string
  musicsIds: Array<Types.ObjectId>
  playlistImageUrl: String
}
