import React from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utility';
import CartItem from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
import { connect } from 'react-redux';


const Header = ({currentUser, hidden}) => {
    
    return(
        <div>
            <header className="bg-light" id="scroll">
                <nav className="navbar navbar-expand-md navbar-light container py-3">
                    <Link to="/" className="navbar-brand font-weight-bold text-uppercase">
                        <img src="https://img.icons8.com/color/48/000000/crown.png" alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-2">
                        <Link to="/shop" className="nav-link active_page">
                            Shop
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>  
                    {
                        currentUser ?
                        <li className="nav-item mx-2">
                        <div onClick={() => auth.signOut()} className="nav-link">
                            Sign Out
                        </div>
                        </li> 
                        :
                        <li className="nav-item mx-2">
                        <Link to="/signin" className="nav-link">
                            Sign In
                        </Link>
                        </li>

                    } 
                    <li className="nav-item mx-2">
                        <CartItem/>
                    </li>  
                    </ul>
                </div>    
                    {
                        hidden ? 
                        null :
                        <CartDropdown /> 
                    }        
                    
                </nav>
            </header>
        </div>
    )
}

const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
})
export default connect(mapStateToProps)(Header);
