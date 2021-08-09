import React from 'react';
import { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart'
import happyImg from '../../images/giphy.gif';

const Review = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const HandlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder(); 
    }
    const [cart, setCart] = useState([]);
    // removeProduct btn:
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        // getting keys:
        const productKeys = Object.keys(savedCart);
        const cardProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cardProducts);
    }, [])
    // show thumb up:
    let thankYou;
     if(orderPlaced){
        thankYou = <img src={happyImg} alt="" /> 
     }
    return (
        <div className="shopContainer">
            <div className="productContainer">
                <h1>Card Item: {cart.length}</h1>
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>)
                }
                
                {thankYou};

            </div>
            <div className="cartContainer">
                <Cart cart={cart}>
                    <button onClick={HandlePlaceOrder} className="mainButton">Place Order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;