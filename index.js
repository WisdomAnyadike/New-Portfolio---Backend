const express = require('express')
const messageRouter = require('./Routes/messageRoutes')
const app = express()
const port = 5000
const cors = require('cors')
const env = require('dotenv').config()

app.use(express.json())
app.use(cors({origin : "*"}))
app.use( '/api/user' , messageRouter)


app.listen(port , ()=> {
    console.log(`we are listening on http://localhost:${port}`);
})