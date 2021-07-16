// const Image = require('../../../models/image')
const Form = require('../../../models/form')
const fs = require('fs')
function productController() {
    return {
        async index (req,res) {
            // const imgItem = await Image.find()
            // console.log(imgItem)
            return res.render('admin/product')

            // Menu.find().then(function(product){
            //     console.log(product)
            //     res.render('home',{product:product})
            // })
        },
        postdata(req,res){
            const {name,desc,price,image} = req.body

            var obj = {
                name:req.body.name,
                price:req.body.price,
                desc:req.body.desc,
                img: {
                    data: fs.readFileSync( 'C:/Users/Basavaraj/Desktop/pizza_app/upload/' + req.file.filename),
                    contentType: 'image/png'
                }
            }
            console.log(obj)
            Form.create(obj,(err,item)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.redirect('/')
                }
            })
        }
    }
}
module.exports = productController