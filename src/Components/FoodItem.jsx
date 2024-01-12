import React from 'react';
import FoodCard from './FoodCard';
import FoodData from '../data/FoodData.js';


const FoodItem = () => {
    return (
         
        //flex flex-wrap gap-10 justify-center
        <div className=' grid gap-4 grid-cols-5 justify-center lg:justify-start mx-6 my-6'>
           {FoodData.map((food)=>{
                return ( <FoodCard
                 key={food.id}
                 id={food.id}
                 name={food.name}
                 price={food.price}
                 desc={food.desc}
                 rating={food.rating}
                img={food.img}
                category={food.category}
                />
                );  
            })
           }



           
        </div>
    );
};

export default FoodItem;