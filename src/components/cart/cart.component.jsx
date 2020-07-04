import React from 'react'
import CustomButton, {} from '../custom-button/custon-button.component'
import './cart.styles.scss'
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item'

const Cart = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>
                    ))
                }
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(Cart);