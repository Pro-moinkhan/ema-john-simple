import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const removePd = props.removeProduct;
    const { name, img, quantity, key, price } = props.product;
    return (
        <div className="ReviewItmDiv">
            <div className="RevItmDiv">
                <div className="reviewImg">
                    <img src={img} alt="imgError-_-" />
                </div>
                <div className="reviewDetail">
                    <h3 className='productName'>{name}</h3>
                    <p>Quantity: {quantity}</p>
                    <p><small>${price}</small></p>
                    <button onClick={() => removePd(key)} className='mainButton'>Remove</button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;