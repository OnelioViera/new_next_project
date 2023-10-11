const mongoose = require('mongoose') // import mongoose

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI) // connect to the database

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline) // print the host of the database
  } catch (error) {
    console.log('error') 
    process.exit(1)
  }
}

module.exports = connectDB // export the function