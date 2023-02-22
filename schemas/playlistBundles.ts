import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  title: { type: SchemaTypes.String, required: true },
  playlistIds: { type: SchemaTypes.Array, required: true },
})
