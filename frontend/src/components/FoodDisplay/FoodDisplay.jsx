import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './FoodDisplay.css';
import FoodItem from '../Fooditem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list grid lg:grid-cols-4 gap-5 b">
            {
                food_list.map((item,index) =>{
                    if(category === "All" || category === item.category)
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                })
            }
        </div>
    </div>

  )
}

export default FoodDisplay