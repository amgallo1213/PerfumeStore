import express from 'express'
import { perfumeDB } from './config/db'


const app = express()
const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {
    perfumeDB()
    console.log("Server started at http://localhost:" + PORT)
})