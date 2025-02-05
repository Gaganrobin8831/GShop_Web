import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import cors from 'cors'

const app = express()

import connectDb from './DB/database.DB.js'; // or .mjs if using ES Modules
import connectCloudinary from './config/cloudinary.config.js';
const port = process.env.PORT


//midelware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

connectCloudinary()

//DB NAME 
connectDb()
        .then(() => {
                app.listen(port, () => {
                        console.log(`SERVER RUN ON https://localhost:${port}`)
                })
        })
        .catch(() => {
                console.log('SERVER NOT RUN')
        })

