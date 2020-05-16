import React from 'react'
import './CartDropdown.style.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem.component';

const CartDropdown = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            } 
            </div>
            <button className="btn btn-dark text-uppercase">Go To Checkout</button>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });

export default connect(
    mapStateToProps
)(CartDropdown);