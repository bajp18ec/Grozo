const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    customerID :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true

    },
    items:{
        type : Object,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    paymentType : {
        type:String,default:'COD'
    },
    status:{
        type:String,default:'order placed'
    }
},{timestamps:true})

module.exports = mongoose.model('Order',orderSchema)