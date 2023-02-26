import { model, models } from 'mongoose'
import playlist_bundles from 'schemas/playlistBundles'

export default models['playlist_bundles'] || model('playlist_bundles', playlist_bundles)
