
const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/coustomers/cartController')
const categoController = require('../app/http/controllers/categoController')
const riceController = require('../app/http/controllers/riceController')


function initRoutes(app) {

    app.get('/',homeController().index)
    
    app.get('/cart',cartController().index)

    app.post('/update-cart',cartController().update)
    
    app.get('/login',authController().login)

    app.get('/register',authController().register)  

    app.get('/categories',categoController().index)

    app.get('/categories/ricecategories',riceController().index)
}

module.exports = initRoutes