import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  name: SchemaTypes.String,
  birthdate: SchemaTypes.String,
  gender: SchemaTypes.String,
  profileUrl: SchemaTypes.String,
})
