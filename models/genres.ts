import { model, models } from 'mongoose'
import genres from 'schemas/genres'

export default models['genres'] || model('genres', genres)
