const Menu = require('../../models/menu')

function homeController() {
    return {
        async index (req,res) {
            const product = await Menu.find()
            // console.log(product)
            return res.render('home',{product:product})

            // Menu.find().then(function(product){
            //     console.log(product)
            //     res.render('home',{product:product})
            // })
        }
    }
}
module.exports = homeController