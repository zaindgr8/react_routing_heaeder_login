import React from 'react';
import {useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate=useNavigate("")
  function handleClick(){
    navigate("/")
  }

  return(
    <header className='bg-gray-900 text-white'>
      <nav className=''>
        <ul className='flex gap-x-[33.5%] items-center px-4 py-2'>
          <div className='font-bold text-2xl hover:text-red-300'>
            Logo
          </div>
          <div className='flex gap-20'>
          <li className='hover:text-teal-500'>
            <a href="/Home">Home</a>
          </li>
          <li className='hover:text-teal-500'>
          <a href="/About">About</a>
          </li>
          <li className='hover:text-teal-500'>
          <a href="/Contact">Contact</a>
          </li>
          </div>
          <div>
            <button 
            onClick={handleClick} className='border border-red-500 text-red-500 rounded-md px-2 py-1'>Log Out</button>
          </div>
        </ul>
      </nav>
    </header>
  )
 
      
  
}

export default Header;
