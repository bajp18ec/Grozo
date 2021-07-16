function cartController() {
    return {
        index (req,res) {
            res.render('coustomers/cart')
        },

        update(req,res){
            // for the first tie creating cart and adding basic object structure
            if (!req.session.cart){

                req.session.cart = {
                    items:{
                        
                    },
                    totalQuality : 0,
                    totalPrice : 0
                }
            }

            let cart = req.session.cart
            // console.log(cart)
            console.log(req.body)
            // check if dosnot exist in cart
            if(!cart.items[req.body._id]) {
                console.log(req.body)
                cart.items[req.body._id] = {
                    item : req.body,
                    qty:1
                }
                cart.totalQuality = cart.totalQuality+1;
                cart.totalPrice = cart.totalPrice + req.body.price
                console.log(cart.totalPrice) 
            }
            else {
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
                cart.totalQuality = cart.totalQuality + 1
                cart.totalPrice = cart.totalPrice + req.body.price
                console.log(cart.totalPrice)
            }
            return res.json({totqty:req.session.cart.totalQuality})
        }
    }
}
module.exports = cartController