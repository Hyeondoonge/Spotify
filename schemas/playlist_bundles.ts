import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  title: SchemaTypes.String,
  playlistIds: SchemaTypes.Array,
})
