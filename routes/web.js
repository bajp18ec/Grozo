
const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/coustomers/cartController')
const categoController = require('../app/http/controllers/categoController')
const riceController = require('../app/http/controllers/riceController')
const admincatimgController = require('../app/http/controllers/admin/admincatimgController')
const adminHomeController = require('../app/http/controllers/admin/adminHomeController')
const formController = require('../app/http/controllers/fromContoller')
const productController = require('../app/http/controllers/admin/productController')

const upload = require('../app/http/middleware/multer')
const store = require('../app/http/middleware/multer2')
const shope = require('../app/http/middleware/multer3')

const guest = require('../app/http/middleware/guest')
// const pupload = require('../app/http/middleware/pmulter')


function initRoutes(app) {
    // coustemers routers 

    app.get('/',homeController().index)
    
    // app.post('/product/data',homeController().addproduct)
    
    app.get('/cart',cartController().index)

    app.post('/update-cart',cartController().update)
    
    app.get('/login',guest, authController().login)

    app.post('/login',authController().postLogin)

    app.post('/logout',authController().logout)

    app.get('/register',guest,authController().register)  

    app.post('/register',authController().postRegister)

    app.get('/categories',categoController().index)

    app.post('/categories/image',upload.single('image'),categoController().uploadimg)
    
    app.get('/admin/catimage',admincatimgController().adminupload)

    app.get('/categories/ricecategories',riceController().index)

    // admin routers start

    app.get('/admin/home',adminHomeController().adminhome)

    app.post('/shopdata',shope.single('ShopImage'),adminHomeController().shopdetail)

    app.get('/form',formController().index)

    app.post('/form/data',store.single('image'),formController().postdata)

    app.get('/admin/product',productController().index)

    app.post('/product/data',store.single('image'),productController().postdata)

    

}

module.exports = initRoutes