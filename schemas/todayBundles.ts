import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  playlistBundlesId: { type: SchemaTypes.ObjectId, required: true },
})
