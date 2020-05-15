import React from 'react';
import './CollectionItem.style.scss';

const CollectionItem = ({name, imageUrl, price}) => {
    return(
        <div className="item">
            <div className="photo" style={{backgroundImage:`url(${imageUrl})`}}>
                <button className="btn btn-primary btn-block mx-auto">Add to cart</button>
            </div>
            <div className="content m-2">
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default CollectionItem;