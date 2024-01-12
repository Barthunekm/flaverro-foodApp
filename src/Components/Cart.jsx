import React, { useState } from 'react';
import {IoMdClose} from 'react-icons/io'
import ItemCart from '../Components/ItemCart'
import {useSelector} from "react-redux"
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
   const [activeCart , setActiveCart] =useState(true);

   const cartItems =useSelector((state)=> state.cart.cart);
    console.log(cartItems);

    return (
        <>
        <div  className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`} 
        >
          <div className='flex justify-between items-center my-3  '>
            <span className='text-xl font-bold text-gray-800'>My Orders</span>
            <IoMdClose
             onClick={() => setActiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer '/>
          </div>
           
           {
            cartItems.map((food)=>{
              return <ItemCart
               key={food.id} 
               id={food.id}
               name={food.name}
               price={food.price}
               img={food.img}
               qty={food.qty}
              />
            })
           }
          
           


          <div className='absolute bottom-0' >
            <h3 className='font-semibold text-gray-800'>Items : </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount :</h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2' />
           <button className=' bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw]  lg:w-[18vw] mb-5'>Checkout</button>
        </div>
        </div>
        <FaShoppingCart onClick={()=>setActiveCart(!activeCart)}
         className={`rounded-full bg-green-500 shadow-md text-5xl p-3 fixed bottom-0 right-10  `} />
        </> 
    );
};

export default Cart;