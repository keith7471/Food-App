import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explore_menu from '../../components/ExploreMenu/Explore-menu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Explore_menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home