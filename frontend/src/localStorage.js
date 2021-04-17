export const getCartItems = () =>{
    const getCartItems= localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems')):
    [];
    return getCartItems;
}
export const setCartItems= (getCartItems)=>{
    localStorage.setItem('cartItems', JSON.stringify(getCartItems))
}