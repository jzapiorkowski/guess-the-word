import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <div className='header'>
      <div className='sidebar-icon'>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
      </div>
      <div className='logo'>Guess the word!</div>
    </div>
  );
};
