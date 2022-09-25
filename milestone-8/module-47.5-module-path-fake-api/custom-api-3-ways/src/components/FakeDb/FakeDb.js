//use local storage to manage cart data

const addToDb = id =>{
    let shoppingCart;
    //getting local storage and 
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart){
       shoppingCart = JSON.parse(storedCart)
    }else{
        shoppingCart = {}
    }

    //set and update quantity if needed
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        //localStorage.setItem(id , newQuantity)
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}


const removeItem = (id) =>{
    console.log('first')
    const storedCart = localStorage.getItem('shopping-cart');
    //console.log(storedCart);
    if(storedCart){
        let shoppingCart = JSON.parse(storedCart)
        //console.log(shoppingCart)
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        }
    }
}

export {addToDb, removeItem}