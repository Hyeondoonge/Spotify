import { model, models } from 'mongoose'
import musics from 'schemas/musics'

export default models['musics'] || model('musics', musics)
