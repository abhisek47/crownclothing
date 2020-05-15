import React from 'react'
import './CartItem.style.scss';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js';

const CartItem = ({toggleCartHidden}) => {
    return(
        <div className="cart" onClick={toggleCartHidden}>
            <Cart/>
            <span className="badge badge-dark">4</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null,
    mapDispatchToProps
)(CartItem);