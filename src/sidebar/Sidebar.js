import React, { useState, useContext } from 'react';
import './sidebar.css';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { ChangeGameDifficultyContext } from '../app/App';

export const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const changeGameDifficulty = useContext(ChangeGameDifficultyContext);

  const toggleDifficultyMenu = () => {
    setIsHidden(!isHidden);
  };

  return (
    <nav className='sidebar'>
      <div className='difficulty-change'>
        <div className='choose-difficulty' onClick={toggleDifficultyMenu}>
          <p>Choose difficulty</p>
          {isHidden ? <VscTriangleDown /> : <VscTriangleUp />}
        </div>
        {!isHidden ? (
          <ul>
            <li difficulty='easy' onClick={() => changeGameDifficulty('easy')}>
              Easy
            </li>
            <li
              difficulty='medium'
              onClick={() => changeGameDifficulty('medium')}
            >
              Medium
            </li>
            <li difficulty='hard' onClick={() => changeGameDifficulty('hard')}>
              Hard
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};
