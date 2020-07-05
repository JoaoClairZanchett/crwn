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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const shouldClearItem = cartItemToRemove.quantity === 1;

    if(!shouldClearItem) {
        return cartItems.map(cartItem => {
            return cartItem.id === cartItemToRemove.id ? 
                { ...cartItem, quantity: cartItem.quantity - 1} 
                : cartItem
        })
    }

    return clearItemFromCart(cartItems, cartItemToRemove);
}

export const clearItemFromCart = (cartItems, cartItemToAdd) => {
    const cartItemsToReturn = cartItems.filter(item => item.id !== cartItemToAdd.id);
    return [...cartItemsToReturn]
}