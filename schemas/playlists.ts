import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  title: { type: SchemaTypes.String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  description: SchemaTypes.String,
  musicsIds: { type: [Schema.Types.ObjectId], required: true },
  playlistImageUrl: { type: SchemaTypes.String, required: true },
})
