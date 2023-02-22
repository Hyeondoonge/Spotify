import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  type: { type: SchemaTypes.String, required: true },
  name: { type: SchemaTypes.String, required: true },
})
