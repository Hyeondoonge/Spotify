import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  title: SchemaTypes.String,
  musician: SchemaTypes.String,
  albumImagesUrl: SchemaTypes.String,
})
