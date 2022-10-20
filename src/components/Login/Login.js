import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='form-container'>
      <h2 className='form-title'>Log In Now !</h2>
      <form className=''>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='email'
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='password'
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
