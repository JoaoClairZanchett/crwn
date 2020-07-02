import React from 'react'
import CustomButton, {} from '../custom-button/custon-button.component'
import './cart.styles.scss'

const Cart = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>

            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}

export default Cart;