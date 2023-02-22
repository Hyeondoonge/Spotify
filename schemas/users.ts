import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  name: { type: SchemaTypes.String, required: true },
  birthdate: SchemaTypes.String,
  gender: SchemaTypes.String,
  profileUrl: SchemaTypes.String,
})
