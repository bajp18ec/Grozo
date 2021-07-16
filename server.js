
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
const bodyParser = require('body-parser')
const passport = require('passport')
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

//passport config
const passportinit = require('./app/config/passport')
passportinit(passport)
app.use(passport.initialize())
app.use(passport.session())


app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
// app.set('adminviews',path.join(__dirname,'/resources/adminviews'))
app.set('view engine','ejs')


//global middleware
app.use((req,res,next)=>{
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})

// erroer handling
app.use((error,req,res,next)=>{
    console.log('this is rejected field-> ',error.field)
})

//assets
app.use(express.static('public'))
app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({parameterLimit:1000000000,limit:'2gb',extended: false }))
app.use(bodyParser.json({limit:'2gb',extended:true}))
// app.use(bodyParser.text({limit:'200mb',extended:true}))

require('./routes/web')(app)
app.listen(port, (req, res) => {
    console.log(`listinig on port ${port}`)
})
