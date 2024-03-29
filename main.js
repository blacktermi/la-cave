let carts = document.querySelectorAll('.ajouter-cart');

let products =[
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
    {
        name : 'jack daniel',
        tag: 'whiskyblack',
        price: 8000,
        inCart: 0
    },
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=> {
        cartNumbers(products[i]);
        totalcost(products[1])
    })
}

function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }   
    localStorage.setItem("productsIncart", JSON.stringify (cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost +
        product.price);
    } else{
        localStorage.setItem("totalCost", product.price);
    }

    
}
function displayCart () {
    let cartItems = localStorage.getItem("productIncart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-container");
    
    
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class ="product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="img/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            `
        })
    }
}

onloadCartNumbers();