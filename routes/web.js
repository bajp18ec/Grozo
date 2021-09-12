
const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/coustomers/cartController')
const categoController = require('../app/http/controllers/categoController')
const riceController = require('../app/http/controllers/riceController')
const admincatimgController = require('../app/http/controllers/admin/admincatimgController')
const adminHomeController = require('../app/http/controllers/admin/adminHomeController')
const formController = require('../app/http/controllers/fromContoller')
const productController = require('../app/http/controllers/admin/productController')
const orderController = require('../app/http/controllers/coustomers/orderController')
const AdminOrderController = require('../app/http/controllers/admin/AdminOrderController')
const statusContoller = require('../app/http/controllers/admin/statusController')

const upload = require('../app/http/middleware/multer')
const store = require('../app/http/middleware/multer2')
const shope = require('../app/http/middleware/multer3')

const guest = require('../app/http/middleware/guest')
const auth  = require('../app/http/middleware/auth')
const admin  = require('../app/http/middleware/admin')
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

    // coustemrs
    app.post('/orders',auth,orderController().store)

    app.get('/customer/orders',auth,orderController().index)

    app.get('/customer/orders/:id',auth,orderController().Show)

    //order admin routs

    app.get('/admin/orders',admin,AdminOrderController().index)

    app.post('/admin/order/status',admin,statusContoller().update)


}

module.exports = initRoutes