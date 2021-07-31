import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {img, name, seller, stock, price} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="imgError-_-" />
            </div>
            <div>
                <h3 className="productName">{name}</h3>
                <br />
                <p><small>Seller: {seller}</small></p>
                <p><small>Only{stock} left, Order Soon!</small></p>
                <p>Price: ${price}</p>
                <button className="mainButton" onClick={ () => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;