const Image = require('../../../models/image')

function admincatimgController() {
    return {
        async adminupload (req,res) {
            // const imgItem = await Image.find()
            // console.log(imgItem)
            return res.render('admin/imagepage')

            // Menu.find().then(function(product){
            //     console.log(product)
            //     res.render('home',{product:product})
            // })
        }
    }
}
module.exports = admincatimgController