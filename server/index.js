import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connection.js';
import cors from 'cors';

const app = express();

//for configuration file 
dotenv.config();

//Database connection
connectDB();

// frontend error handler
app.use(cors());
app.use(express.json());


const port = process.env.PORT;


app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});