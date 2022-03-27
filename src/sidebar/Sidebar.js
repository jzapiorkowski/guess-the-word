import React, { useState } from 'react';
import './sidebar.css';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

export const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleDifficulty = () => {
    setIsHidden(!isHidden);
  };

  return (
    <nav className='sidebar'>
      <div className='difficulty-change'>
        <div className='choose-difficulty' onClick={toggleDifficulty}>
          <p>Choose difficulty</p>
          {isHidden ? <VscTriangleDown /> : <VscTriangleUp />}
        </div>
        {!isHidden ? (
          <ul>
            <li>Easy</li>
            <li>Hard</li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};
