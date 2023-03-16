require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const cors = require('cors')

//express app
const app = express();

//middleware
app.use(express.json())

//cors policy
app.use(
    cors({
        origin: "*",
        credentials:true
    })
)

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.connectionString).then(
    ()=>{
        console.log(`db connected`)
        app.listen(process.env.PORT,()=>console.log(`server started at ${process.env.PORT}`))
    },
    (e)=>{console.log('Could not connect to db', e)}
)