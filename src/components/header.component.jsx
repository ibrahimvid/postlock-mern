import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <div className='ui container'>
      <div className='ui menu'>
        <img src={logo} className='ui tiny image item' alt='logo' />
        <div className='header item'>PostLock</div>
        <a className='item' href='/'>
          Blogs
        </a>
        <a className='item' href='/edit/:id'>
          Edit
        </a>
        <a className='item' href='/new'>
          New
        </a>
        <div className='right menu'>
          <div className='item'>
            <button className='ui primary button'>Sign up</button>
          </div>
          <div className='item'>
            <button className='ui button'>Log-in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
