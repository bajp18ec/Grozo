
require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoStore = require('connect-mongo')
const port = process.env.PORT || 3300


// database connection
// const url = 'mongodb://localhost:27017/grozo';
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true })

const connection =  mongoose.connection

connection.once('open',()=>{
    console.log('Database connected....');
}).catch(err => {
    console.log('connection failed...');
})

//session config

// let mongoStore = new MongoStore({
//     mongooseConnection: connection,
//     collection:'sessions'
// })

app.use(flash())
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_CONNECTION_URL
    }),
    // store:mongoStore,
    saveUninitialized:false,
    cookie:{maxAge:100*60*60*24} // 24 hours
}))

app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')
//global middleware
app.use((req,res,next)=>{
    res.locals.session = req.session
    next()
})

//assets
app.use(express.static('public'))
app.use(express.json())

require('./routes/web')(app)
app.listen(port, (req, res) => {
    console.log(`listinig on port ${port}`)
})
