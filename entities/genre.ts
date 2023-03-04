import { Types } from 'mongoose'

export interface IGenre {
  id: Types.ObjectId
  type: string
  name: string
}
