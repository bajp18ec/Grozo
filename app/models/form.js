const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formSchema = new Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    desc:{type:String,required:true},
    img:{
        data:Buffer,
        contentType:String
    }
})
const Form = mongoose.model('Form',formSchema)
module.exports = Form