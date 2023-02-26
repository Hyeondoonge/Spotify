import { model, models } from 'mongoose'
import albums from 'schemas/albums'

export default models['albums'] || model('albums', albums)
