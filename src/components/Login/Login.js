import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className='form-control btn-container'>
          <button className='btn-submit'>Login</button>{' '}
        </div>
      </form>
      <div>
        <p>
          New to Ema John? <Link to='/signup'>Create a new account.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
