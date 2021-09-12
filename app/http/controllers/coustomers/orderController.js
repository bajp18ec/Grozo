const Order = require('../../../models/order')
const moment = require('moment')

function orderController ()
{
    return {
        store(req,res){
            // console.log(req.body)
            // validate request

            const {phone,Address} = req.body
            if(!phone || ! Address){
                req.flash('error',' All fields are required')
                return res.redirect('/cart')
            }

            const order = new Order({
                customerID: req.user._id,
                items:req.session.cart.items,
                phone:phone,
                address:Address,
            })
            order.save().then(result =>{
                Order.populate(result,{path:'customerID'},(error,placedOrder)=>{

                req.flash('success','order placed successfully')
                delete req.session.cart
                // Emitt 
                const eventEmitter = req.app.get('eventEmitter')
                eventEmitter.emit('orderPlaced',placedOrder)
                return res.redirect('/customer/orders')
                })

            }).catch(err=>{
                req.flash("error.'Somting went wrong")
                return res.redirect('/cart')
            })
        },

        async index(req,res){
        const orders = await Order.find({customerID:req.user._id},null,{sort:{'createdAt':-1}})
            res.header('Cache-Contorl','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0')
            res.render('coustomers/orders',{orders: orders,moment:moment})
            // console.log(orders)
        },

        async Show(req,res){
           const order = await Order.findById(req.params.id)
           //Authorize user
           if(req.user._id.toString() === order.customerID.toString())
           {
                res.render('coustomers/singleOrder',{order: order})
           }
           else
           {
               res.redirect('/')
           }

        }
    }
}
module.exports = orderController