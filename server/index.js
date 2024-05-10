import express from 'express'
import dotenv from 'dotenv'
import connectDB from './connection.js'
import cors from 'cors'
import authRoutes from './Routes/authRoutes.js'

const app = express()

// frontend error handler
app.use(cors())
app.use(express.json())

//for configuration file
dotenv.config()

//Database connection
connectDB()

const port = process.env.PORT
// routes
app.use("/api/v1/auth", authRoutes);


app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})
