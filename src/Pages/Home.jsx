import React from 'react';
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu';
import FoodItem from '../Components/FoodItem';


const Home = () => {
    return (
        <div>
           <Navbar/> 
           <CategoryMenu/>
           <FoodItem/>
        </div>
    );
};

export default Home;