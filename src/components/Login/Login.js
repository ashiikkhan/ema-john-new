import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //sign in function call
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        //navigate to login page
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='form-container'>
      <h2 className='form-title'>Log In Now !</h2>
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
