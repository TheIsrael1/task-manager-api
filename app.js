const express = require('express')
const app = express()
require('dotenv').config();
const tasks = require('./routes/task')
const notFound = require('./middleware/not-found');
const errorHandlerMiddleWare = require('./middleware/error-handler');
const connectDB = require('./db/connect')

// middlewares
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

// other middleware
app.use(errorHandlerMiddleWare)
app.use(notFound)


const port = process.env.PORT ||  3000

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}`)
        })
    }catch(err){
        console.log(err)
    }
}

start()








