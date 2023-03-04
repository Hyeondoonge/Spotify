import { Types } from 'mongoose'

export interface ITodayBundle {
  id: Types.ObjectId
  playlistBundlesId: Types.ObjectId
}
