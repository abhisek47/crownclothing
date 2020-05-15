import React from 'react'
import './MenuItem.style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, match, linkUrl }) => {
    return (
        <div 
        className="card mx-auto mt-4" 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <img src={imageUrl} alt="item" className="card-img-top"/>
            <div className="info">
                <h4 className='text-uppercase'>{title}</h4>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);