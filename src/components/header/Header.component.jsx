import React from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../firebase/firebase.utility';

const Header = ({currentUser}) => {
    return(
        <div>
            <header className="bg-light" id="scroll">
                <nav className="navbar navbar-expand-md navbar-light container py-3">
                    <Link to="/" className="navbar-brand font-weight-bold text-uppercase">
                        <Logo />
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
                    </ul>
                </div>  
                </nav>
            </header>
        </div>
    )
}

export default Header;
