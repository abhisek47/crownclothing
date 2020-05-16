import React from 'react';
import './CollectionItem.style.scss';
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({ item , addItem}) => {
    const { name, imageUrl, price } = item;
    return(
        <div className="item">
            <div className="photo" style={{backgroundImage:`url(${imageUrl})`}}>
                <button onClick={() => addItem(item)} className="btn btn-block mx-auto">Add to cart</button>
            </div>
            <div className="content m-2">
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
    )}



const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);