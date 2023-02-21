import logo from '../img/logo-white.png'
import cartImg from '../img/cart.png'
import './header.css'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext'


const Header = () => {
    const {cart, setCart} = useContext(CartContext);
      const {products} = useContext(ProductsContext);

return (
    <div className='header-container'>
        <div className="header">
        <span className='logo-container'>
            <Link to='/'><img src={logo} className='logo'></img></Link>
        </span>
        <span className='cart-container'>
            <img src={cartImg} className='cart' onClick={() => setCart(true)}></img>
            {products.length > 0 ? <div className='pop-up'>{products.length}</div> : null}
        </span>
        </div>
        {cart ? <Cart products={products}/> : null} 
    </div>

)
}

export default Header;