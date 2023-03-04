import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  title: { type: SchemaTypes.String, required: true },
  playlistIds: { type: [Schema.Types.ObjectId], required: true },
})
