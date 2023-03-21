const products = [
    {
        name: 'Nature 1',
        img: 'nature1',
        price: 103,
        inCart: 0,
        total: 0
    },
    {
        name: 'Nature 2',
        img: 'nature2',
        price: 105,
        inCart: 0,
        total: 0
    },
    {
        name: 'Nature 3',
        img: 'nature3',
        price: 101,
        inCart: 0,
        total: 0
    },
    {
        name: 'Nature 4',
        img: 'nature4',
        price: 99,
        inCart: 0,
        total: 0
    },
    {
        name: 'Nature 5',
        img: 'nature5',
        price: 97,
        inCart: 0,
        total: 0
    },
    {
        name: 'Nature 6',
        img: 'nature6',
        price: 95,
        inCart: 0,
        total: 0
    },
    {
        name: 'Nature 7',
        img: 'nature7',
        price: 100,
        inCart: 0,
        total: 0
    },
    {
        name: 'Nature 8',
        img: 'nature8',
        price: 110,
        inCart: 0,
        total: 0
    }
]

document.getElementsByTagName('main')[0].getElementsByTagName('div')[0].getElementsByTagName('h5')[0].innerHTML = `BDT ${products[0].price}`
document.getElementsByTagName('main')[0].getElementsByTagName('div')[1].getElementsByTagName('h5')[0].innerHTML = `BDT ${products[1].price}`
document.getElementsByTagName('main')[0].getElementsByTagName('div')[2].getElementsByTagName('h5')[0].innerHTML = `BDT ${products[2].price}`
document.getElementsByTagName('main')[0].getElementsByTagName('div')[3].getElementsByTagName('h5')[0].innerHTML = `BDT ${products[3].price}`
document.getElementsByTagName('main')[0].getElementsByTagName('div')[4].getElementsByTagName('h5')[0].innerHTML = `BDT ${products[4].price}`
document.getElementsByTagName('main')[0].getElementsByTagName('div')[5].getElementsByTagName('h5')[0].innerHTML = `BDT ${products[5].price}`
document.getElementsByTagName('main')[0].getElementsByTagName('div')[6].getElementsByTagName('h5')[0].innerHTML = `BDT ${products[6].price}`
document.getElementsByTagName('main')[0].getElementsByTagName('div')[7].getElementsByTagName('h5')[0].innerHTML = `BDT ${products[7].price}`

let cart = 0
const cartNumber = document.getElementsByTagName('li')[0].getElementsByTagName('span')[0]

const cartProduct = []

let carts = document.querySelectorAll('.add-cart')
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        if (!(cartProduct.includes(products[i]))) {
            cartProduct.push(products[i])
            products[i].inCart++
            addToCart(products[i])
            cart++
        } else {
            console.log(products[i].inCart);
            alert('Product has been Already added to the cart!')
        }
        cartNumber.innerHTML = `(${cart})`
    })
}


const addToCart = product => {
    const productsCart = document.getElementById('products')
    const basket = document.getElementById('basket').getElementsByTagName('h4')[1]
    productsCart.innerHTML +=
        `<div id='products'>
            <div class='products'>
                <span class='remove'>X</span>
                <span><img src='images/${product.img}.jpg'></span>
                <span>${product.name}</span>
            </div>
            <span class='price'>${product.price}</span>
            <div class='quantity'>
                <span class='decrease'> << </span>
                <span class='cart'>${product.inCart}</span>
                <span class='increase'> >> </span>
            </div>
            <span class='total'>${product.price * product.inCart}</span>
        </div>
        `

    // const table = document.getElementById('products').querySelectorAll('#products')
    const productList = document.querySelectorAll('.remove')
    const decreaseProduct = document.querySelectorAll('.decrease')
    const increaseProduct = document.querySelectorAll('.increase')

    let basketTotal = 0

    for (let i = 0; i < productList.length; i++) {
        basketTotal += cartProduct[i].inCart * cartProduct[i].price
        basket.innerHTML = basketTotal
        productList[i].addEventListener('click', event => {
            event.target.parentElement.parentElement.remove()
            cart -= cartProduct[i].inCart
            basketTotal -= cartProduct[i].total
            basket.innerHTML = basketTotal
            cartNumber.innerHTML = `(${cart})`
        })
        decreaseProduct[i].addEventListener('click', event => {
            if (cartProduct[i].inCart === 1) {
                alert('Product quanity is minimum!')
            } else {
                cart--
                cartProduct[i].inCart--
                cartProduct[i].total = cartProduct[i].inCart * cartProduct[i].price
                basketTotal -= cartProduct[i].price
                basket.innerHTML = basketTotal
                cartNumber.innerHTML = `(${cart})`
                event.target.nextElementSibling.innerHTML = cartProduct[i].inCart
                event.target.parentElement.nextElementSibling.innerHTML = cartProduct[i].inCart * cartProduct[i].price
            }
        })
        increaseProduct[i].addEventListener('click', event => {
            cart++
            cartProduct[i].inCart++
            cartProduct[i].total = cartProduct[i].inCart * cartProduct[i].price
            basketTotal += cartProduct[i].price
            basket.innerHTML = basketTotal
            cartNumber.innerHTML = `(${cart})`
            event.target.previousElementSibling.innerHTML = cartProduct[i].inCart
            event.target.parentElement.nextElementSibling.innerHTML = cartProduct[i].inCart * cartProduct[i].price
        })
        // if (i % 2 == 1) {table[i].style.background = 'lightcyan'}
    }
}