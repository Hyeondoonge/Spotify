import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  playlistBundlesId: { type: Schema.Types.ObjectId, required: true },
})
