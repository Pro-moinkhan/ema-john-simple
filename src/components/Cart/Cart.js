import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, pd) => total + pd.price, 0)
    // let total = 0;
    // for(let i = 0; i < cart.length; i++){
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    let shipping = 0;
    if(total > 40){
        shipping = 0;
    }else if(total> 15){
        shipping = 6.99
    }else if(total > 0){
        shipping = 12.99
    }

    let tax = total * .1;

    function ToFixNum(num){
        const result = num.toFixed(2);
        return Number(result)
    }

    return (
        <div>
            <h3>My Cart</h3>
            <h3>Item Orders:{cart.length}</h3>
            <h3>Shipping Price: ${ToFixNum(shipping)}</h3>
            <h3>Tax: ${ToFixNum(tax)}</h3>
            <h3>Price: ${ToFixNum(total+ tax + shipping)}</h3>
        </div>
    );
};

export default Cart;