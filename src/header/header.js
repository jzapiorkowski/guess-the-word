import React, { useState } from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import './header.css';
import { GoThreeBars } from 'react-icons/go';

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className='header'>
      {sidebar ? <Sidebar></Sidebar> : null}
      <GoThreeBars onClick={toggleSidebar}></GoThreeBars>
      <div className='sidebar-icon' onClick={toggleSidebar}>
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
      </div>
      <div className='logo'>Guess the word!</div>
    </div>
  );
};
