import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  albumId: SchemaTypes.ObjectId,
  title: SchemaTypes.String,
  lyrics: SchemaTypes.String,
  audioUrl: SchemaTypes.String,
  shortsUrl: SchemaTypes.String,
  playerBackgroundColor: SchemaTypes.String,
  lyricsBackgroundColor: SchemaTypes.String,
  primaryGenreId: SchemaTypes.ObjectId,
  secondaryGenreId: SchemaTypes.ObjectId,
})
