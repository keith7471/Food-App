import React from 'react'
import { menu_list } from '../../assets/assets'
import './Explore-menu.css'

const Explore_menu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from the diverse menu</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) =>{
                return(
                    <div onClick={() =>{
                        setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)
                        console.log("the category is",category)
                    }} key={index} className="explore-menu-list-item">
                        <img className={`${category === item.menu_name ? "Active": ""} full-width`}src={item.menu_image} alt="" />  
                        <p className='mt-3 text-sm'>{item.menu_name}</p>      
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Explore_menu