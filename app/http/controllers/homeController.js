const Menu = require('../../models/menu')
const path = require('path')
const fs = require('fs')

function homeController() {
    return {
        async index (req,res) {
            const product = await Menu.find()
            // console.log(product)
            return res.render('home',{product:product})
            //,{product:product}
            // Menu.find().then(function(product){
            //     console.log(product)
            //     res.render('home',{product:product})
            // })
        },
        // addproduct(req,res) {
        //     var obj = {
        //         name : req.body.name,
        //         desc :req.body.desc,
        //         price: req.body.price,
        //         categoery:req.body.cat,
        //         image:req.file.filename
        //     }
        //     Menu.create(obj,(err,item)=>{
        //         if (err) {
        //             console.log(err);
        //         }
        //         else {
        //             // item.save();
        //             res.redirect('/product');
        //             console.log(obj)
        //         }
        //     })
        // }
    }
}
module.exports = homeController