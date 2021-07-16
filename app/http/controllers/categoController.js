// const Menu = require('../../models/menu')
const Image = require('../../models/image')
const path = require('path')
const fs = require('fs')

function categoController() {
    return {
        async index (req,res,items) {
            const item = await Image.find()
            console.log(item)
            res.render('categories',{items:item})
            
            // Menu.find().then(function(product){
            //     console.log(product)
            //     res.render('home',{product:product})
            // })
        },
        uploadimg(req,res){
            var obj = {
                name: req.body.name,
                desc: req.body.desc,
                img: {
                    data: fs.readFileSync( 'C:/Users/Basavaraj/Desktop/pizza_app/uploads/' + req.file.filename),
                    contentType: 'image/png'
                }
            
            }
            Image.create(obj, (err, item) => {
                if (err) {
                    console.log(err);
                   
                }
                else {
                    // item.save();
                    res.redirect('/');
                    console.log(obj);
                }
            });

        }
    }
}
module.exports = categoController
