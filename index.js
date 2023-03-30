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


const getLocalCartData = () => {
    if (localStorage.getItem('shop-cart') === null) {
        return []
    } else {
        return JSON.parse(localStorage.getItem('shop-cart'))
    }
}

const getCart = () => {
    if (localStorage.getItem('cart') === null) {
        return 0
    } else {
        return JSON.parse(localStorage.getItem('cart'))
    }
}

let cart = getCart()
let cartProduct = getLocalCartData()
const cartNumber = document.getElementsByTagName('li')[0].getElementsByTagName('span')[0]
cartNumber.innerHTML = `(${cart})`

let carts = document.querySelectorAll('.add-cart')
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        if (!(cartProduct.includes(products[i]))) {
            cartProduct.push(products[i])
            cart++
            products[i].inCart++
            products[i].total = products[i].inCart * products[i].price
            localStorage.setItem('shop-cart', JSON.stringify(cartProduct))
            localStorage.setItem('cart', JSON.stringify(cart))
            displayCart()
        } else {
            alert('Product has been Already added to the cart!')
        }
    })
}


const displayCart = () => {
    const productsCart = document.getElementById('products')
    cartNumber.innerHTML = `(${cart})`
    if (cartProduct && productsCart) {
        productsCart.innerHTML = ''
        Object.values(cartProduct).map(product => {
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
        })
    }

    const basket = document.getElementById('basket').getElementsByTagName('h4')[1]
    const productList = document.querySelectorAll('.remove')
    const decreaseProduct = document.querySelectorAll('.decrease')
    const increaseProduct = document.querySelectorAll('.increase')

    let basketTotal = 0
    for (let i = 0; i < productList.length; i++) {
        basketTotal += cartProduct[i].inCart * cartProduct[i].price
        basket.innerHTML = basketTotal
        productList[i].addEventListener('click', event => {
            event.target.parentElement.parentElement.remove()
            cartProduct.forEach((element, index) => {
                if (productList[i].nextElementSibling.nextElementSibling.innerHTML === element.name) {
                    cart -= element.inCart
                    element.inCart = 0
                    basketTotal -= element.total
                    cartProduct.splice(index, 1)
                }
            });
            basket.innerHTML = basketTotal
            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('shop-cart', JSON.stringify(cartProduct))
            cartNumber.innerHTML = `(${cart})`
        })
        decreaseProduct[i].addEventListener('click', event => {
            cartProduct.forEach(element => {
                if (productList[i].nextElementSibling.nextElementSibling.innerHTML === element.name) {
                    if (element.inCart === 1) {
                        alert('Product quanity is minimum!')
                    } else {
                        cart--
                        element.inCart--
                        element.total = element.inCart * element.price
                        basketTotal -= element.price
                        event.target.nextElementSibling.innerHTML = element.inCart
                        event.target.parentElement.nextElementSibling.innerHTML = element.inCart * element.price
                    }
                }
            })
            basket.innerHTML = basketTotal
            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('shop-cart', JSON.stringify(cartProduct))
            cartNumber.innerHTML = `(${cart})`
        })
        increaseProduct[i].addEventListener('click', event => {
            cartProduct.forEach(element => {
                if (productList[i].nextElementSibling.nextElementSibling.innerHTML === element.name) {
                    cart++
                    element.inCart++
                    element.total = element.inCart * element.price
                    basketTotal += element.price
                    event.target.previousElementSibling.innerHTML = element.inCart
                    event.target.parentElement.nextElementSibling.innerHTML = element.inCart * element.price
                }
            });
            basket.innerHTML = basketTotal
            localStorage.setItem('cart', JSON.stringify(cart))
            localStorage.setItem('shop-cart', JSON.stringify(cartProduct))
            cartNumber.innerHTML = `(${cart})`
        })
    }
}

displayCart()