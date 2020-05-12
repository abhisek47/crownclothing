import React from 'react';
import './CollectionItem.style.scss';

const CollectionItem = ({name, imageUrl, price}) => {
    return(
        <div className="item">
            <div className="photo" style={{backgroundImage:`url(${imageUrl})`}}>
                <a href="#" className="btn btn-primary btn-block mx-auto">Add to cart</a>
            </div>
            <div className="content m-2">
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default CollectionItem;