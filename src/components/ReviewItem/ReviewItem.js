import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({ product, handleDeleteItem }) => {
  const { name, price, quantity, img, shipping, id } = product;

  return (
    <div className='review-item'>
      <div>
        <img src={img} alt='product' />
      </div>
      <div className='item-details'>
        <div className='details'>
          <p className='title'>{name}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <p>Shipping: ${shipping}</p>
        </div>
        <div className='delete'>
          <button onClick={() => handleDeleteItem(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
