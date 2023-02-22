import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  title: { type: SchemaTypes.String, required: true },
  musician: { type: SchemaTypes.String, required: true },
  albumImagesUrl: { type: SchemaTypes.String, required: true },
})
