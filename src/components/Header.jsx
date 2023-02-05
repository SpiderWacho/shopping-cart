import logo from '../img/logo-white.png'
import cart from '../img/cart.png'
import './header.css'
import { Link } from 'react-router-dom'

const Header = ({activateCart}) => {
return (

    <div className="header">
    <span className='bar-img-container'>
    <Link to='/'><img src={logo} className='logo'></img></Link>
    <img src={cart} className='cart' onClick={activateCart}></img>
    </span>
    </div>
)
}

export default Header;