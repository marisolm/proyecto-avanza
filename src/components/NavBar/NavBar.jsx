import CartWidget from "../CartWidget/CartWidget";
import logo from '../../img/logo.png';
import { Link , NavLink } from 'react-router';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav">

            <Link className="nav-brand" to="/">
                <img id="logo" src={logo} alt="Logo" />
            </Link>

            <ul className="nav-list">
                <NavLink className="nav-item" to="/category/computadoras">Computadoras</NavLink>
                <NavLink className="nav-item" to="/category/smartphones">Smartphones</NavLink> 
                <NavLink className="nav-item" to="/category/otros">Otros</NavLink>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar;  
