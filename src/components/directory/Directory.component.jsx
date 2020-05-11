import React from 'react';
import './Directory.style.scss';
import MenuItem from '../menu-item/MenuItem.component';

class Directory extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sections: [
                {title:'hats',imageUrl:'https://source.unsplash.com/collection/10043007/360x300',id:1},
                {title:'jackets',imageUrl:'https://source.unsplash.com/collection/8696333/360x300',id:2},
                {title:'sneakers',imageUrl:'https://source.unsplash.com/collection/348160/360x300',id:3},
                {title:'mens',imageUrl:'https://source.unsplash.com/collection/1109504/500x300',id:5},
                {title:'womens',imageUrl:'https://source.unsplash.com/collection/158521/500x300',id:6},
            ]
        }
    }
    

    render(){
        return(
            <div className="container">
                <div className="row">
                {
                    this.state.sections.map(({title,imageUrl,id}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Directory;