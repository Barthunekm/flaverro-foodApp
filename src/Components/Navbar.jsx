import React from 'react';
import { useDispatch } from 'react-redux';
import {setSearch} from '../redux/slices/SearchSlice';

const Navbar = () => {

   const dispatch =useDispatch();

    return (
        <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div>
           <h3 className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
              {new Date().toUTCString().slice(0,16)}
           </h3> 
           <h1 className='text-2xl font-bold '>Flaverro Foods</h1>
        </div>
        <div>
           <input className=' p-3 border border-black-500  focus:border-black px-4 py-2 text-sm rounded-lg outline-none  w-full lg:w-[25vw]' 
            type="text" name='search' id='searchBar'
            placeholder='Search here' 
           autoComplete='off'
           onChange={(e) =>dispatch(setSearch(e.target.value))}
           />
        </div>
      </nav>    
    );
};

export default Navbar;