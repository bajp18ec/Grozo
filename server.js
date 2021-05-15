const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')

const port = process.env.PORT || 3300

app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
// app.set('layout','./Layouts/full-width')
app.set('view engine','ejs')

//assets
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
    // res.send('hello world')
})

app.get('/cart',(req,res)=>{
    res.render('coustomers/cart')
})

app.get('/about',(req,res)=>{
    res.render('index')
    // res.send('hello world')
})

app.get('/login',(req,res)=>{
    res.render('auth/login')
    // res.send('hello world')
})
app.get('/register',(req,res)=>{
    res.render('auth/register')
    // res.send('hello world')
})

app.listen(port,(req,res)=>{
    console.log(`listinig on port ${port}`)    
})
