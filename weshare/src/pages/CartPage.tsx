// src/pages/CartPage.tsx
import React from 'react';
import { useCart } from '../components/CartContext';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div>
      <h5>Your Cart</h5>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name}
              <span className="badge bg-primary rounded-pill">R$ {item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
