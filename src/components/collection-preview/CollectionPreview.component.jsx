import React from 'react';
import './CollectionPreview.style.scss';
import CollectionItem from '../collection-item/CollectionItem.component';

const CollectionPreview = ({ title, items }) =>  (
        <div className="">
            <h3 className="title">{title}</h3>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4 ).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )

export default CollectionPreview;