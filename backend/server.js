import express from 'express'
import main from './database.js'
import {v2 as cloudinary} from 'cloudinary'
import fileUpload from 'express-fileupload'
import 'dotenv/config'
import router from './routes/projectRoute.js'
import cors from 'cors'


const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp/'
}))
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

app.use('/api', router)

main()
.then(() => {
    app.listen(PORT, () => {
        console.log("Server connected successfully")
    })
})
.catch((error) => {
    throw new Error(error)
})