import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from './../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeCartItem, subtotal } = useContext(StoreContext);

  const navigate = useNavigate();

  console.log("sssss", subtotal);

  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <div className='cart mt-2'>
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-6 items-center gap-4 mt-10">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((items, index) => {
            if (cartItems[items._id] > 0) {
              return (
                <div className="cart-items-title cart-items-item grid grid-cols-6 items-center gap-5">
                  <img className='w-20 mt-5' src={items.image} alt="" />
                  <p>{items.name}</p>
                  <p>{items.price}</p>
                  <p>{cartItems[items._id]}</p>
                  <p>{items.price * cartItems[items._id]}</p>
                  <p onClick={() => { removeCartItem(items._id) }}>x</p>
                </div>
              )
            }
          })
        }


        <div className="cart-bottom mt-11 flex gap-4 justify-between items-center">
          {/* Cart Total Section */}
          <div className="cart-total flex flex-col gap-3 w-1/2">
            <h2 className="text-lg font-semibold">Cart Total</h2>
            <div className="total-cart-details">
              <div className="cart-total-details flex justify-between gap-20 text-gray-500">
                <p className="text-gray-500">Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details flex justify-between text-gray-500 mt-2">
                <p>Delivery Fee</p>
                <p>{subtotal === 0 ? 0 : deliveryFee}$</p>
              </div>
              <hr />
              <div className="cart-total-details flex justify-between mt-5">
                <b>Total</b>
                <b>${subtotal === 0 ? 0 : total}</b>
              </div>
            </div>
            <div className='flex justify-end'>
              <button className="bg-gray-400 text-white rounded-md hover:bg-gray-600 transition py-1 px-2 w-2/5" onClick={() => navigate('/order')}>
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="cart-promocode flex flex-col gap-2 w-[500px]">
            <p>If you have a promo code, enter it here:</p>
            <div className="cart-promocode-input flex items-center">
              <input
                className="rounded-sm border border-gray-300 py-1 px-2 w-full"
                type="text"
                placeholder="Promo code"
              />
              <button className="bg-orange-400 px-2 py-1 text-white rounded-md hover:bg-orange-600 transition ml-1 self-end">
                Submit
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Cart
