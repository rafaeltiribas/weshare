// src/pages/CartPage.tsx
import React from 'react';
import deleteIcon from "../assets/skin/multiply.png";
import { useCart } from '../components/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity >= 0) {
      updateQuantity(id, quantity);
    }
  };

  const dealRemove = (id: number) => {
    if (id){
      removeFromCart(id);
    }
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="d-flex justify-content-center align-items-center vh-10">
    <div className='container m-3'>
      <table className="table table-responsive table-sm table-hover table-bordered">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <thead>
              <tr>
                <th className="align-middle text-center">Image</th>
                <th className="align-middle text-center">Id</th>
                <th className="align-middle text-center">Name</th>
                <th className="align-middle text-center">Quantity</th>
                <th className="align-middle text-center">Total</th>
                <th className="align-middle text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td width="12%" className="align-middle text-center">
                    <img src={item.image} width={250} alt="Product" />
                  </td>
                  <td width="8%" className="align-middle text-center">
                    {item.id}
                  </td>
                  <td width="8%" className="align-middle text-center">
                    {item.name}
                  </td>
                  <td className='d-flex justify-content-center align-items-center vh-10'>
                    <br></br>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      style={{ width: '60px', marginRight: '10px' }}
                    />
                  </td>
                  <td>
                    <span className="badge bg-primary rounded-pill">R$ {item.price * item.quantity}</span>
                  </td>
                  <td width="12%" className="align-middle text-center">
                    <button onClick={() => dealRemove(item.id)}>
                      <img src={deleteIcon} alt="Delete Icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6} className="text-center"> {}
                  <div className="mt-3">
                    <h6>Total: R$ {total.toFixed(2)}</h6>
                  </div>
                </td>
              </tr>
            </tfoot>
          </>
        )}
      </table>
    </div>
    </div>
  );
};

export default CartPage;
