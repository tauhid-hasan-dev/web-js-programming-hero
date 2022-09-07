// get input value by ID
const getInputValueByID = id =>{
    const inputElem = document.getElementById(id);
    const inputValue = inputElem.value;
    return inputValue;
}

const addProduct = () =>{
    const product = getInputValueByID('product-name-field');
    const quantity = getInputValueByID('product-quantity-field');
    disPlayProducts(product, quantity);
    //simple way to add local storage
    saveItemToLocalStorage(product, quantity)
}

const disPlayProducts = (product, quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `
    ${product} : ${quantity}`
    productContainer.appendChild(li);
}

//get shoppingCart
const getShoppingCartFromLocalStorage = () =>{
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

//save items to local storage as a object
const saveItemToLocalStorage = (product, quantity) =>{
    const cart = getShoppingCartFromLocalStorage();
    //add property to the product object
    cart[product] = quantity;
    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifiedCart);
}

//display saved local storage products to UI
const disPlayStoredProducts = () =>{
    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart){
     const quantity = cart[product];
     disPlayProducts(product, quantity);
    }
} 

disPlayStoredProducts()

