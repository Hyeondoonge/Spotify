import { Model } from 'mongoose'
import users from 'schemas/users'

export default new Model('spotify', users)
