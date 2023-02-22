import { Model } from 'mongoose'
import musics from 'schemas/musics'

export default new Model('spotify', musics)
