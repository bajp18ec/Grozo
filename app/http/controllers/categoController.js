const Menu = require('../../models/menu')

function categoController() {
    return {
        async index (req,res) {
            // const product = await Menu.find()
            // console.log(product)
            // return res.render('home',{product:product})
            res.render('categories')
            // Menu.find().then(function(product){
            //     console.log(product)
            //     res.render('home',{product:product})
            // })
        }
    }
}
module.exports = categoController
