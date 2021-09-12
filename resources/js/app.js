import axios from 'axios'
import Noty from 'noty'
import {initAdmin} from './admin'
import moment from 'moment'

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

const alertMsg = document.querySelector('#success-alert')
if(alertMsg){
    setTimeout(()=>{
        alertMsg.remove()
    },2000)
}

initAdmin()

// console.log("appjs connected")

// Change order status
let statuses = document.querySelectorAll('.status_line')
let hiddenInput = document.querySelector('#hiddenInput')
let order = hiddenInput ? hiddenInput.value : null
order = JSON.parse(order)
let time = document.createElement('small')

function updateStatus(order) {
    statuses.forEach((status) => {
        status.classList.remove('step-completed')
        status.classList.remove('current')
    })
    let stepCompleted = true;
    statuses.forEach((status) => {
       let dataProp = status.dataset.status
       if(stepCompleted) {
            status.classList.add('step-completed')
       }
       if(dataProp === order.status) {
            stepCompleted = false
            time.innerText = moment(order.updatedAt).format('hh:mm A')
            status.appendChild(time)
           if(status.nextElementSibling) {
            status.nextElementSibling.classList.add('current')
           }
       }
    })

}

updateStatus(order);

//socket 

let socket = io()
// initAdmin(socket)
// Join
if(order) {
    socket.emit('join', `order_${order._id}`)
}
let adminAreaPath = window.location.pathname
if(adminAreaPath.includes('admin')) {
    initAdmin(socket)
    socket.emit('join', 'adminRoom')
}


socket.on('orderUpdated', (data) => {
    const updatedOrder = { ...order }
    updatedOrder.updatedAt = moment().format()
    updatedOrder.status = data.status
    // console.log(data)
    updateStatus(updatedOrder)
    new Noty({
        type: 'success',
        timeout: 1000,
        text: 'Order updated',
        progressBar: false,
    }).show();
})