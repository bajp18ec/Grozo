const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const retailerSchema  = new Schema({
    RetailerName: {
        type: String,
        required:true
    },
    RetailShopName:{
        type:String,
        required:true
    },
    RetailMobile:{
        type:Number,
        required:true,
        maxLength:10,
    },
    RetailAdress:{
        type:String,
        required:true
    },
    ShopImage:{
        type:String,
        required:true
    }
})

const ShopDetails = mongoose.model('Shopdetail',retailerSchema)
module.exports = ShopDetails