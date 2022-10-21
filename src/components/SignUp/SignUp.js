import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='form-container'>
      <h2 className='form-title'>Sign Up Now !</h2>
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
        <div className='form-control'>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            type='password'
            name='confirm-password'
            id='confirm-password'
            placeholder='confirm password'
            required
          />
        </div>
        <div className='form-control btn-container'>
          <button className='btn-submit'>Sign Up</button>{' '}
        </div>
      </form>
      <div>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
