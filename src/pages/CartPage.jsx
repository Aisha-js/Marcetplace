import React, { useContext, useEffect } from 'react';
import { ClientContext } from '../context/ClientProvider';

const CartPage = () => {
    const {getCart, cart } = useContext(ClientContext);
useEffect(() =>{
    getCart();
}, []);

if (!cart) {
    return <h2>Loading...</h2>;
  }
  if (cart.products.length === 0) {
    return <h2>Ваша корзина пуста</h2>;
  }
    return (
        <div>
        <h2>Cart Page</h2>
        </div>
    );
};

export default CartPage;