import { model, models } from 'mongoose'
import playlists from 'schemas/playlists'

export default models['playlists'] || model('playlists', playlists)
