import React from 'react'
import './CartDropdown.style.scss';

const CartDropdown = () => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <button className="btn btn-dark text-uppercase">Go To Checkout</button>
        </div>
    )
}

export default CartDropdown;