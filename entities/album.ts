import { Types } from 'mongoose'

export interface IAlbum {
  id: Types.ObjectId
  title: string
  musician: string
  albumImagesUrl: string
}
