import { model, models } from 'mongoose'
import today_bundles from 'schemas/todayBundles'

export default models['today_bundles'] || model('today_bundles', today_bundles)
