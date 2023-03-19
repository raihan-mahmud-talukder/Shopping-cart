const products = [
    {
        name: 'Nature 1',
        img: 'nature1',
        price: 100,
        inCart: 0
    },
    {
        name: 'Nature 2',
        img: 'nature2',
        price: 100,
        inCart: 0
    },
    {
        name: 'Nature 3',
        img: 'nature3',
        price: 100,
        inCart: 0
    },
    {
        name: 'Nature 4',
        img: 'nature4',
        price: 100,
        inCart: 0
    },
    {
        name: 'Nature 5',
        img: 'nature5',
        price: 100,
        inCart: 0
    },
    {
        name: 'Nature 6',
        img: 'nature6',
        price: 100,
        inCart: 0
    },
    {
        name: 'Nature 7',
        img: 'nature7',
        price: 100,
        inCart: 0
    },
    {
        name: 'Nature 8',
        img: 'nature8',
        price: 100,
        inCart: 0
    }
]

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
            // products[i].inCart++
            console.log(products[i].inCart);
            alert('Product has been Already added to the cart!')
        }
        // console.log(products[i], cart)
        cartNumber.innerHTML = `(${cart})`
    })
}

const productsCart = document.getElementById('products')
const basketTotal = document.getElementById('basket')

const addToCart = product => {
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
    basketTotal.innerHTML +=
    `
    <div class='basket'>
    <h4>Basket Total</h4>
    <h4>Total Cost ${product.price}</h4>
    </div>
    `

    const productList = document.querySelectorAll('.remove')
    const decreaseProduct = document.querySelectorAll('.decrease')
    const increaseProduct = document.querySelectorAll('.increase')

    for (let i = 0; i < productList.length; i++) {
        productList[i].addEventListener('click', event => {
            event.target.parentElement.parentElement.remove()
            cart -= cartProduct[i].inCart
            cartNumber.innerHTML = `(${cart})`
        })
        decreaseProduct[i].addEventListener('click', event => {
            if (cartProduct[i].inCart === 1) {
                alert('Product quanity is minimum!')
            } else {
                cart--
                cartProduct[i].inCart--
                cartNumber.innerHTML = `(${cart})`
                event.target.nextElementSibling.innerHTML = cartProduct[i].inCart
                event.target.parentElement.nextElementSibling.innerHTML = cartProduct[i].inCart * cartProduct[i].price
                console.log(cartProduct[i]);
            }
        })
        increaseProduct[i].addEventListener('click', event => {
            cart++
            cartProduct[i].inCart++
            cartNumber.innerHTML = `(${cart})`
            event.target.previousElementSibling.innerHTML = cartProduct[i].inCart
            event.target.parentElement.nextElementSibling.innerHTML = cartProduct[i].inCart * cartProduct[i].price
            console.log(cartProduct[i]);
        })
    }
}