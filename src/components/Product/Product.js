import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props.product.key)
    const {img, name, seller, stock, price, key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="imgError-_-" />
            </div>
            <div>
                <h3 className="productName"><Link to={"/product/"+key}>{name}</Link></h3>
                <br />
                <p><small>Seller: {seller}</small></p>
                <p><small>Only{stock} left, Order Soon!</small></p>
                <p>Price: ${price}</p>
                { props.showAddToCart &&  <button className="mainButton" onClick={ () => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;