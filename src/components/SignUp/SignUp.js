import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError('Password must have 6 characters!');
      return;
    }

    if (password !== confirm) {
      setError("Your Password Didn't Match!");
      return;
    }
    setError(null);

    //createUser
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='form-container'>
      <h2 className='form-title'>Sign Up Now !</h2>
      <form className='' onSubmit={handleSubmit}>
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
          <label htmlFor='confirm'>Confirm Password</label>
          <input
            type='password'
            name='confirm'
            id='confirm'
            placeholder='confirm password'
            required
          />
        </div>
        <p>{error}</p>
        <div className='form-control btn-container'>
          <button type='submit' className='btn-submit'>
            Sign Up
          </button>{' '}
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
