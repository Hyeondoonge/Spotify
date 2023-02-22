import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  title: SchemaTypes.String,
  userId: SchemaTypes.ObjectId,
  description: SchemaTypes.String,
  musicsIds: SchemaTypes.Array,
  playlistImageUrl: SchemaTypes.String,
})
