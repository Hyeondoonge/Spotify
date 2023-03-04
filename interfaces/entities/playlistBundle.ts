import { Types } from 'mongoose'

export interface IPlaylistBundle {
  id: Types.ObjectId
  title: string
  playlistIds: Array<Types.ObjectId>
}
