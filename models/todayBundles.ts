import { Model } from 'mongoose'
import today_bundles from 'schemas/todayBundles'

export default new Model('spotify', today_bundles)
