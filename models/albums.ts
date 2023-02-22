import { Model } from 'mongoose'
import albums from 'schemas/albums'

export default new Model('spotify', albums)
