const Retailerinfo  = require('../../../models/Retailerinfo')

function adminHomeController() {
    return {
        async adminhome (req,res) {
            // const imgItem = await Image.find()
            // console.log(imgItem)
            return res.render('admin/adminhome')

        },
        async shopdetail (req,res){
            var shopobj = {
                RetailerName:req.body.RetailerName,
                RetailShopName:req.body.RetailShopName,
                RetailMobile:req.body.RetailMobile,
                RetailAdress:req.body.RetailAdress,
                ShopImage:req.file.filename
            }
            Retailerinfo.create(shopobj,(err,item)=>{
                if (err) {
                    console.log(err);
                }
                else {
                    // item.save();
                    res.redirect('/admin/home');
                    console.log(shopobj)
                }
            })
        }
    }
}
module.exports = adminHomeController