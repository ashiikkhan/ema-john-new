import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  const { user } = useContext(AuthContext);

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
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink className='user'>@{user?.displayName}</NavLink>
      </div>
    </nav>
  );
};

export default Header;
