const Menu = require('../../models/menu')

function riceController() {
    return {
        async index (req,res) {
            
            const product = await Menu.find()
            // console.log(product)
            return res.render('riceCategories',{product:product})
            
            // })
        }
    }
}
module.exports = riceController