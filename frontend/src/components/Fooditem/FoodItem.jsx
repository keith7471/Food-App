import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    // const [itemCount, setItemCount] = useState(0)

    const {cartItems,addCartItem,removeCartItem } = useContext(StoreContext)

    return (
        <div className="food-item rounded-lg shadow-lg p-4 bg-white">
            <div className="food-item-img-container relative">
                <img className='rounded-lg w-full' src={image} alt="" />
               
                {
                    !cartItems[id]  ? <img src={assets.add_icon_white} alt="" className="add absolute cursor-pointer w-9 right-1" style={{ bottom: '10px' }} onClick={() => addCartItem(id)} />
                        : <div className="food-item-counter absolute right-1 flex gap-2 p-1 bg-white rounded" style={{ bottom: '15px', background: 'white' }}>
                            <img onClick={() => { removeCartItem(id) }} src={assets.remove_icon_red} alt="" className="remove-foodItem w-6 h-6" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => { addCartItem(id) }} src={assets.add_icon_green} alt="" className="add-foodItem w-6 h-6" />
                        </div>}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating flex justify-between items-center mt-2">
                    <p className='font-semibold text-md'>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description text-sm mt-2">{description}</p>
                <p className="food-item-price font-bold text-md mt-1" style={{ color: 'tomato' }}>${price}</p>
            </div>
        </div>

    )
}

export default FoodItem