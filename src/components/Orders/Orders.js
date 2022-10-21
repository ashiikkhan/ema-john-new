import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  //clear cart
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const handleDeleteItem = (id) => {
    const remainingInCart = cart.filter((product) => product.id !== id);
    setCart(remainingInCart);
    removeFromDb(id);
  };

  return (
    <div className='shop-container'>
      <div className='orders-container'>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleDeleteItem={handleDeleteItem}></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2 style={{ margin: '2rem' }}>
            No items for review. Please <Link to='/shop'>shop now!!</Link>
          </h2>
        )}
      </div>
      <div className='cart-container'>
        <Cart cart={cart} clearCart={clearCart}>
          <Link to='/shipping'>
            <button>Proceed Shipping</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
