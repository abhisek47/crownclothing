import React from 'react'
import './MenuItem.style.scss';

const MenuItem = ({title,imageUrl}) => {
    return (
        <div className="card mx-auto my-4">
            <img src={imageUrl} className="card-img-top"/>
            <div className="info">
                <h4 className='text-uppercase'>{title}</h4>
            </div>
        </div>
    )
}

export default MenuItem;