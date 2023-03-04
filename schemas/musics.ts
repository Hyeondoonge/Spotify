import { Schema, SchemaTypes } from 'mongoose'

export default new Schema({
  albumId: { type: Schema.Types.ObjectId, required: true },
  title: { type: SchemaTypes.String, required: true },
  lyrics: { type: SchemaTypes.String, required: true },
  audioUrl: { type: SchemaTypes.String, required: true },
  shortsUrl: SchemaTypes.String,
  playerBackgroundColor: { type: SchemaTypes.String, required: true },
  lyricsBackgroundColor: { type: SchemaTypes.String, required: true },
  primaryGenreId: { type: Schema.Types.ObjectId, required: true },
  secondaryGenreId: { type: Schema.Types.ObjectId, required: true },
})
