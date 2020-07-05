import React from 'react'
import CustomButton, {} from '../custom-button/custon-button.component'
import './cart.styles.scss'
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item'
import { withRouter } from 'react-router-dom'
import { tooggleCartHidden } from '../../redux/cart/cart.actions'

const Cart = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>
                    )) :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() =>{
                history.push('/checkout');
                dispatch(tooggleCartHidden());
            }
            }>
                Go to checkout
            </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(Cart));