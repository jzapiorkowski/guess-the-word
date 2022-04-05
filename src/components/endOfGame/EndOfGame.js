import React from 'react';
import './endOfGame.css';

export const EndOfGame = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className='end-of-game'>
      <p>Congratulations, you won!</p>
      <div onClick={refreshPage}>click here to play again</div>
    </div>
  );
};
