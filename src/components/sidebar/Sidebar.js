import React, { useReducer, useContext } from 'react';
import './sidebar.css';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import { ChangeGameDifficultyContext, GameDifficultyContext } from '../app/App';
import { FiCheck } from 'react-icons/fi';

export const Sidebar = () => {
  const [isHidden, setIsHidden] = useReducer((isHidden) => !isHidden, true);
  const changeGameDifficulty = useContext(ChangeGameDifficultyContext);
  const gameDifficulty = useContext(GameDifficultyContext);

  const difficultyList = ['easy', 'medium', 'hard'].map((difficulty, key) => {
    return (
      <li key={key} onClick={() => changeGameDifficulty(difficulty)}>
        <p>{difficulty[0].toUpperCase() + difficulty.slice(1)}</p>
        {gameDifficulty === difficulty ? <FiCheck></FiCheck> : null}
      </li>
    );
  });

  return (
    <nav className='sidebar'>
      <div className='difficulty-change'>
        <div className='choose-difficulty' onClick={setIsHidden}>
          <p>Choose difficulty</p>
          {isHidden ? <VscTriangleDown /> : <VscTriangleUp />}
        </div>
        {!isHidden ? <ul>{difficultyList}</ul> : null}
      </div>
    </nav>
  );
};
