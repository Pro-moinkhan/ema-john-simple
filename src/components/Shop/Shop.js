import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10);  /**processOrder */
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(exPdKey => {
            const product = fakeData.find(pd => pd.key === exPdKey);
            product.quantity = savedCart[exPdKey];
            return product;
        });
        setCart(previousCart);
    }, [])
    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
        //  // local storage area:
        // const sameProducts = newCart.filter(pd => pd.key === product.key);
        // const count = sameProducts.length;
        // addToDatabaseCart(product.key, count);

    }
    return (
        <div className="shopContainer">
            <div className="productContainer">
                {
                    products.map(pd => <Product key={pd.key} showAddToCart={true} handleAddProduct={handleAddProduct} product={pd}></Product>)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="mainButton"> Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;