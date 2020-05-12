import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
           collections: SHOP_DATA  
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="container my-5">
            {
                collections.map(({id, ...otherSectionProps }) => (
                    <CollectionPreview key={id} {...otherSectionProps} />
                ))
            }
            </div>
        )
    }
    
}

export default ShopPage;