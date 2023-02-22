import { Model } from 'mongoose'
import playlist_bundles from 'schemas/playlistBundles'

export default new Model('spotify', playlist_bundles)
