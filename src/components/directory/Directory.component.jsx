import React from 'react';
import './Directory.style.scss';
import MenuItem from '../menu-item/MenuItem.component';

class Directory extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sections: [
                {title:'hats',imageUrl:'https://i.ibb.co/HHLTdSh/joshua-coleman-y-VRLC75-Ma8-unsplash.jpg',id:1, linkUrl:'hats'},
                {title:'jackets',imageUrl:'https://i.ibb.co/dJDRHtq/ethan-kent-w-W9lz-em-Jw-unsplash.jpg',id:2, linkUrl:''},
                {title:'sneakers',imageUrl:'https://i.ibb.co/dG3Wt2p/paul-volkmer-upd-W-QUcc-FE-unsplash.jpg',id:3, linkUrl:''},
                {title:'mens',imageUrl:'https://i.ibb.co/TL91s99/mubariz-mehdizadeh-t3zr-Em88ehc-unsplash.jpg',id:5, linkUrl:''},
                {title:'womens',imageUrl:'https://i.ibb.co/hHsN6pn/max-ilienerwise-FVa-LDrh-Go-o-unsplash.jpg',id:6, linkUrl:''},
            ]
        }
    }
    

    render(){
        return(
            <div className="container">
                <div className="row">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} { ...otherSectionProps } />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Directory;