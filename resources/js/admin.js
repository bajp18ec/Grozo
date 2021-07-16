    let btn =  document.querySelector('#btn')
    let sidebar =  document.querySelector(".sidebar");
    
    btn.onclick = function () {
        sidebar.classList.toggle("active")
        console.log("clicked")
    }

    let pname = document.getElementById('name').value
    let email_address = document.getElementById('email_address').value
    let password = document.getElementById('password').value

    // let pname = document.getElementById('name').value
    // let desc = document.getElementById('desc').value
    
    console.log(pname)
    console.log(email_address)
    console.log(password)
    