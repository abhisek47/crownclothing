import React from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => {
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
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link active_page">
                            Shop
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>   
                    </ul>
                </div>  
                </nav>
            </header>
        </div>
    )
}

export default Header;
