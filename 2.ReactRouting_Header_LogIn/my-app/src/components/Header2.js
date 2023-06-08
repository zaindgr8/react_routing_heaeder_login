import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate('');

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <header className='bg-gray-900 text-white'>
        <nav className='ml-2 mr-8 p-2'>
       
          
            <ul className='flex gap-x-[38%]'>
              <div>
                LOGO
              </div>
              <div className='flex gap-x-12'>
              <li><a href="/Home">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Contact">Contact</a></li>
              </div>
              <div className=''>
        <button
          className='border px-2  rounded-md shadow-md text-red-500 border-red-500  mr-48 w-20'
          onClick={handleClick}
        >
          Log Out
        </button>
      </div>
                
            </ul>
          
        </nav>
      </header>
      
    </>
  );
};

export default Header;
