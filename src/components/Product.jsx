import React, { useState } from 'react';
import {Button} from './Button'
import './product.css'

const Product = ({shoe}) => {

    return (
    <div className='product-container'>
                <div className='img-container'>
                    <img src={shoe.img} className="img-product">
                </img>
                </div>
                <div className='button-container'>
                    <Button color="primary">See details</Button>
                    <Button color="primary">Add to cart</Button>
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