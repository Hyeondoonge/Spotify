import { Model } from 'mongoose'
import genres from 'schemas/genres'

export default new Model('spotify', genres)
