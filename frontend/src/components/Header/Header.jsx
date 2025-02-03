import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents py-12 px-6 md:px-16 text-white ">
            <h2>Order your food Online</h2>
            <p>Choose from an array of dishes crafted by the finest of chefs</p>
            <button className='viewMenu bg-yellow-500 text-black py-2 px-6 rounded-full text-sm md:text-base hover:bg-yellow-600 transition duration-300'>View Menu</button>
        </div>
      
    </div>
  )
}

export default Header
