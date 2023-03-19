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

let carts = document.querySelectorAll('.add-cart')
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        // console.log(products[i])
        addToCart(products[i])
        cart++
        // console.log(cart);
        cartNumber.innerHTML = `(${cart})`
    })
}


let productsCart = document.getElementById('products')
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
                <span class='change'> << </span>
                <span>${product.inCart}</span>
                <span class='change'> >> </span>
            </div>
            <span class='total'>${product.price * product.inCart}</span>
        </div>
    `
    // productsCart.innerHTML +=
    // `
    // <div class='basket'>
    // <h4>Basket Total</h4>
    // <h4>Total Cost ${product.price}</h4>
    // </div>
    // `

    


    let productList = document.querySelectorAll('.remove')
    // console.log(productList.length)

    const removeProduct = event => {
        event.target.parentElement.parentElement.remove()
        cart--
        cartNumber.innerHTML = `(${cart})`
    }

    for (let i = 0; i < productList.length; i++) {
        productList[i].addEventListener('click', removeProduct)
    }
}