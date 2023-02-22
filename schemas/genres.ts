import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  type: SchemaTypes.String,
  name: SchemaTypes.String,
})
