import React, { useContext }  from 'react';
import {
    Link,
  } from "react-router-dom"; 
import { ProductsContext } from '../context/ProductsContext';
import {Button} from './Button'

import './product.css'


const Product = ({shoe}) => {
    const {setProducts} = useContext(ProductsContext)

    const addToCart = (shoe) => {
        setProducts(prevstate => [...prevstate, shoe])
    }
    return (
    <div className='Product-product-container'>
                <div className='img-container'>
                    <img src={shoe.img} className="img-product"  />
                </div>
                <div className='button-container'>
                    <Link to="details" state={shoe}><Button color="primary">See details</Button></Link>
                    <Button color="primary" onClick={() => addToCart(shoe)}>Add to cart</Button>
                </div>
        <div className="product-text">
            <p>
                {shoe.name}
            </p>
        </div>
    </div>
)
}

export default Product;