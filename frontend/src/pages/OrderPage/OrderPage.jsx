import React, { useContext } from 'react'
import './OrderPage.css'
import { StoreContext } from '../../context/StoreContext';

const OrderPage = () => {

  const { subtotal } = useContext(StoreContext);
  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <form className="place-order flex  mt-2 justify-between items-start">
      <div className="place-order-left]">
        <p className="title font-semibold text-xl">Delivery Information</p>
        <div className="multi-fields gap-2 grid grid-cols-2 mt-2">
          <input type="text" placeholder='First Name' className='w-[400px] border border-grey-300 rounded-sm px-1' />
          <input type="text" placeholder='Last Name' className='w-[400px] border border-grey-300 rounded-sm px-1' />
        </div>

        <input type='email' placeholder='Email Address' className='w-full mt-2 border border-gray-300 rounded-sm px-1' />
        <input type='text' placeholder='Street' className='w-full  border border-grey-300 mt-2 rounded-sm px-1' />

        <div className='grid gap-2 grid-cols-2 mt-2'>
          <input type='text' placeholder='City' className='w-[400px] border border-gray-300 rounded-sm px-1' />
          <input type='text' placeholder='State' className='w-[400px] border border-gray-300 rounded-sm px-1' />
        </div>

        <div className='grid gap-2 grid-cols-2 mt-2'>
          <input type="text" placeholder='Zip code' className='w-[400px] border border-grey-300 rounded-sm px-1' />
          <input type="text" placeholder='Country' className='w-[400px] border border-grey-300 rounded-sm px-1' />
        </div>

        <input type="text" placeholder='Phone' className='w-full rounded-sm px-1 mt-2 border border-grey-300' />


      </div>
      <div className="place-order-right w-[300px]">
        <div className="cart-total flex flex-col gap-6">
          <h2 className="text-lg font-semibold">Cart Total</h2>
          <div className="total-cart-details">
            <div className="cart-total-details flex justify-between gap-20 text-gray-500">
              <p className="text-gray-500">Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between text-gray-500 mt-2">
              <p>Delivery Fee</p>
              <p>${subtotal ===0?0:deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between mt-5">
              <b>Total</b>
              <b>${subtotal === 0?0:total}</b>
            </div>
          </div>
          <button className="bg-gray-400 text-white rounded-md hover:bg-gray-600 transition py-2 px-4">
            Proceed to Payment
          </button>
        </div>
      </div>
    </form >
  )
}

export default OrderPage
