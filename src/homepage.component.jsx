import React from 'react';
import './homepage.style.scss';


const Homapage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card mx-auto my-4">
                    <img src="https://source.unsplash.com/collection/190727/360x300" className="card-img-top first"/>
                    <div className="info">
                        <h4>HATS</h4>
                    </div>
                </div>
                <div className="card mx-auto my-4">
                    <img src="https://source.unsplash.com/collection/455/360x300" className="card-img-top first"/>
                    <div className="info">
                        <h4>JACKETS</h4>
                    </div>
                </div>
                <div className="card mx-auto my-4">
                    <img src="https://source.unsplash.com/collection/6786/360x300" className="card-img-top first"/>
                    <div className="info">
                        <h4>SNEAKERS</h4>
                    </div>
                </div>
           </div>
           <div className="row">
                <div className="card mx-auto my-4">
                    <img src="https://source.unsplash.com/collection/1758353/500x300" className="card-img-top second"/>
                    <div className="info">
                        <h4>MENS</h4>
                    </div>
                </div> 
                <div className="card mx-auto my-4">
                    <img src="https://source.unsplash.com/collection/1020268/500x300" className="card-img-top second"/>
                    <div className="info">
                        <h4>WOMENS</h4>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Homapage;