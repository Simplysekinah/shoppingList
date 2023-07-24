let arr = []
let item = document.getElementById("item")
let price = document.getElementById("price")
let quantity = document.getElementById("quantity")
let output = document.getElementById("min")
let totalResult = document.getElementById("total")

function list() {
    let myObj = {
        item: item.value,
        price: price.value,
        quantity: quantity.value,
    }
    arr.push(myObj);
    output.innerHTML = ""
    for(let i = 0; i < arr.length; i++) {
        output.innerHTML +=
        `
        <p>
            item: ${arr[i].item}
            price: ${arr[i].price}
            quantity: ${arr[i].quantity}
            subtotal: ${arr[i].price * arr[i].quantity}
            <button onclick = "edit(${i})">EDIT</button>
            <button onclick = "go(${i})">DELETE</button>
        </p>
        `
    }
    let totalanswer = arr.reduce((i, total) => (total.price * total.quantity),0)
    totalResult.innerHTML = "Total:" + totalanswer
    item.value = ''
    price.value = ''
    quantity.value = ''
}

function edit(i){
    let newitem = prompt("Enter new item")
    let newprice = prompt("Enter new price")
    let newQuantity = prompt("Enter new quantity")
    let myObj = {
        item: newitem,
        price: newprice,
        quantity: newQuantity,
    }
    arr.splice(i, 1, myObj)
    output.innerHTML = ""

    for(let i = 0; i < arr.length; i++) {
        output.innerHTML +=
        `
        <p>
            item: ${arr[i].item}
            price: ${arr[i].price}
            quantity: ${arr[i].quantity}
            subtotal: ${arr[i].price * arr[i].quantity}
            <button onclick = "edit(${i})">EDIT</button>
            <button onclick = "go(${i})">DELETE</button>
        </p>
        `
    }
    
}
function go(i){
    arr.splice(i, 1)
    output.innerHTML = ""

    for(let i = 0; i < arr.length; i++) {
        output.innerHTML +=
        `
        <p>
            item: ${arr[i].item}
            price: ${arr[i].price}
            quantity: ${arr[i].quantity}
            subtotal: ${arr[i].price * arr[i].quantity}
            <button onclick = "edit(${i})">EDIT</button>
            <button onclick = "go(${i})">DELETE</button>
        </p>
        `
    }

    let totalanswer = arr.reduce((i, total) => (total.price * total.quantity),0)
    totalResult.innerHTML = "Total:" + totalanswer
}