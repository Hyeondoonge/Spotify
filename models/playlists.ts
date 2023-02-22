import { Model } from 'mongoose'
import playlists from 'schemas/playlists'

export default new Model('spotify', playlists)
