import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    handleLogin(username, password);
    setUsername(''); 
    setPassword(''); 
  };

  return (
    <div className='flex justify-center items-center h-screen bg-slate-950 text-white'>
      <div className='border-2 border-gray-300 p-8 rounded-md flex flex-col'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            required
            placeholder='Username'
            className='block w-full p-2 border-2 border-gray-300 mb-4 rounded-md'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            required
            placeholder='Password'
            className='block w-full p-2 border-2 border-gray-300 mb-4 rounded-md mt-5'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded-md'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
