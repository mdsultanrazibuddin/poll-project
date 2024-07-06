const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) =>{
    res.json({
        message:'i am ajaira'
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/test');