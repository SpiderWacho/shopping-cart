import { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { ProductsContext } from '../context/ProductsContext'
import {Button} from './Button'
import leftArrow from '../img/leftArrow.png'
import './cart.css'



const Cart = ({className}) => {
    const {products} = useContext(ProductsContext) 
    const {setCart} = useContext(CartContext);
 
    //Get products from context and add quantity to display in cart
    let uniqueElements = [...new Set(products)];
    const elementCounts = uniqueElements.map(value => [value, products.filter(str => str === value).length]);
    const elementToDisply = elementCounts.map((element) => {
        element[0].quantity = element[1]
        return element[0];
    });

    return (
        <div className={`bar ${className}`}>
            <div className="title">
                <span className='img-container'>
                    <img className='arrow' src={leftArrow} onClick={() => setCart(false)} ></img>
                </span>
                <span className='text-container'>
                    <p>Your Products</p>
                </span>
            </div>
            <div className="product-container">
                <div className='columns'>
                    <p>Quantity</p>
                    <p>Shoe</p>
                    <p>Price</p>
                </div>
                {elementToDisply && elementToDisply.map(product => 
                <div className='product' key={product.id}>
                    <div className='quantity-container'>
                    {product.quantity}
                    </div>
                    <div className='img-container'>
                        <img className='product-img' src={product.img}/>
                    </div>
                    <div className='product-name'>
                        {product.name}
                    </div>
                    <div className='product-price'>
                        {product.price}$
                    </div>
                </div>)}
                </div>
            <div className="description">
                <p className='aclaration'>This is a project store, not real pucharses will be made.</p>
            </div>
            <div className="total">
                <p>Order total: {products.reduce((accumulator, currentVal ) => accumulator + (currentVal.price * currentVal.quantity), 0)}$</p>
            </div>
            <div className="button-container">
                <Button color={'secondary'}>Proceed to payment</Button>
            </div>

        </div>
    )
}

export default Cart;