import { Types } from 'mongoose'

export interface IUser {
  id: Types.ObjectId
  name: string
  birthdate?: string
  gender?: string
  profileUrl?: string
}
