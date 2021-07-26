const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

//routes


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to DB!')
})

app.listen(8080, () => console.log("servidor rodando"))