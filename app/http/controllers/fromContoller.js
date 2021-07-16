// const Image = require('../../../models/image')
// const Form = require('../../models/form')
const Menu = require('../../models/menu')
const fs = require('fs')
function formController() {
    return {
        async index (req,res) {
            // const imgItem = await Image.find()
            // console.log(imgItem)
            return res.render('admin/form')

            // Menu.find().then(function(product){
            //     console.log(product)
            //     res.render('home',{product:product})
            // })
        },
        postdata(req,res){
            const {name,desc,price,image} = req.body

            var obj = {
                name:req.body.name,
                desc:req.body.desc,
                price:req.body.price,
                categoery:req.body.cat,
                image:req.body.image
            }
            // console.log(obj)
            Menu.create(obj,(err,item)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.redirect('/form')
                }
            })
        }
    }
}
module.exports = formController