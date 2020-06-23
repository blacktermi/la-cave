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
    {
        name : 'fireball',
        tag: 'whisky',
        price: 5000,
        inCart: 0
    },
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=> {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
}