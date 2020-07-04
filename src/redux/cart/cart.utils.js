export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exsistingCartItem = cartItems.some(item => item.id === cartItemToAdd.id);

    if(exsistingCartItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToAdd.id ? 
                { ...cartItem, quantity: cartItem.quantity + 1} 
                : cartItem
        })
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}