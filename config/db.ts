import mongoose from 'mongoose'

export default function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log('found connection')
    return mongoose.connections[0]
  }

  return mongoose
    .connect(`${process.env.DB_URL}`, {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
    })
    .then((instance) => {
      console.log('successfully connect with 🧑🏻‍🎤spotify db ')
      return instance
    })
}
