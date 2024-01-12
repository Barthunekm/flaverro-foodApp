import React from 'react';
import FoodCard from './FoodCard';
import FoodData from '../data/FoodData.js';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItem = () => {

  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  // console.log(search);
   const handleToast = (name) =>{
     toast.success(`Added ${name}`)};


    return (
      <>  
         <Toaster position="top-center" reverseOrder={false} />
        {/* flex flex-wrap gap-10 justify-center */}
        <div className=' grid gap-4 grid-cols-5 justify-center lg:justify-start mx-6 my-6'>
          
        {FoodData.filter((food) => {
          if (category === "All") {
            return food;
          } else {
               return category === food.category;
            }
          }).map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          ))}
        </div>
      </>     
    );
};

export default FoodItem;