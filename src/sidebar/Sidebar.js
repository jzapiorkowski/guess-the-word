import React, { useState, useContext } from 'react';
import './sidebar.css';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { ChangeGameDifficultyContext, GameDifficultyContext } from '../app/App';
import { FiCheck } from 'react-icons/fi';

export const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const changeGameDifficulty = useContext(ChangeGameDifficultyContext);
  const gameDifficulty = useContext(GameDifficultyContext);

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
              <p>Easy</p>
              {gameDifficulty === 'easy' ? <FiCheck></FiCheck> : null}
            </li>
            <li
              difficulty='medium'
              onClick={() => changeGameDifficulty('medium')}
            >
              <p>Medium</p>
              {gameDifficulty === 'medium' ? <FiCheck></FiCheck> : null}
            </li>
            <li difficulty='hard' onClick={() => changeGameDifficulty('hard')}>
              <p>Hard</p>
              {gameDifficulty === 'hard' ? <FiCheck></FiCheck> : null}
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};
