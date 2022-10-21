import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        //signed out successfully
      })
      .catch((error) => {
        //error occured
      });
  };
  return (
    <nav className='header'>
      <Link to='/'>
        <img src={logo} alt='' />
      </Link>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to='/shop'>
          Shop
        </NavLink>
        <NavLink to='/orders'>Orders</NavLink>
        <NavLink to='/inventory'>Inventory</NavLink>
        <NavLink to='/about'>About</NavLink>
        {user?.email && <NavLink className='user'>{user?.email}</NavLink>}
        {user?.uid ? (
          <NavLink onClick={() => handleSignOut()}>Log Out</NavLink>
        ) : (
          <>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
