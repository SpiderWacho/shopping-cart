import './cart.css'

const Cart = () => {

    return (
        <div className="bar">
            <div className="title">
                <p>Your Products</p>
            </div>
            <div className="product-container">

            </div>
            <div className="description">
                <p>Description</p>
            </div>
            <div className="total">

            </div>
            <div className="button-container">
                <button type='button'>Proceed to payment</button>
            </div>

        </div>
    )
}

export default Cart;