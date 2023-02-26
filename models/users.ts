import { model, models } from 'mongoose'
import users from 'schemas/users'

export default models['users'] || model('users', users)
