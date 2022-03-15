import React from 'react';
import './endOfGame.css';

export const EndOfGame = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className='end-of-game'>
      <h1>Congratulations, you won!</h1>
      <div onClick={refreshPage}>click here to play again</div>
    </div>
  );
};
