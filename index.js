import mongoose from "mongoose";
import router from "./Router.js";
import * as dotenv from 'dotenv'
import express from 'express'

const PORT = 5000
const app = express()

app.use(express.json())
app.use('/api', router)
dotenv.config()

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT + '...'))
    } catch (e) {
        console.log(e)
    }
}

startApp()
