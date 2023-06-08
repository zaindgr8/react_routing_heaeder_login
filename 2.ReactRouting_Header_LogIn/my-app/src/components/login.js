import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/header');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form className='bg-white shadow-md rounded-md px-4 py-6 mb-4'>
        <label className='block text-lg text-gray-700 mb-2 font-bold'>Email</label>
        <input
          className='border rounded-md px-2 py-1 shadow-md'
          placeholder='Enter Your Email Here'
          type='email'
        />
        <label className='block font-bold mb-2 text-lg text-gray-700'>Password</label>
        <input
          className='border py-1 px-2 rounded-md shadow-md'
          placeholder='Enter Password Here'
          type='password'
        />
      </form>
      <button
        className='border px-2 py-1 rounded-md text-green-500 border-green-500'
        onClick={handleClick}
      >
        Submit it Now
      </button>
    </div>
  );
};

export default Login;
