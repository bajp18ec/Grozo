import axios from 'axios'
import Noty from 'noty'

let addTocart = document.querySelectorAll('.add-to-cart')
// let cartCounter = document.querySelectorAll('#cartCounter')
function cartNum(res) 
{
    // console.log(res)
    let cartQuan = document.getElementById('cartCounter')
    cartQuan.innerText = res.data.totqty
}
function UpdateCart(grozo) {
    console.log(grozo)
    axios.post('/update-cart',grozo)
    .then(res =>{
        cartNum(res)
        new Noty({
            type: "success",
            timeout:1000,
            text: "item added to the cart",
            progressBar:false,
            layout: "topLeft",
        }).show();
    }).catch(err=>{
        new Noty({
            type: "error",
            timeout:1000,
            text: "Somthing went Wrong",
            progressBar:false,
            layout: "topLeft",
        }).show();
    })
}

addTocart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        // console.log(e)
        let grozo = JSON.parse(btn.dataset.grozo)
        console.log(grozo)
        UpdateCart(grozo)
    })
})

