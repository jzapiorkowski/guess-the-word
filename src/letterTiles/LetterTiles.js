import React, { useState, useEffect, useContext } from 'react';
import './letterTiles.css';
import { GameDifficultyContext } from '../app/App';

export const LetterTiles = (props) => {
  const gameDifficulty = useContext(GameDifficultyContext);
  const [letterTiles, setLetterTiles] = useState(() => {
    const letters = [];
    for (let i = 0; i < props.images[props.currentImageIndex].length; i++) {
      letters.push(<div key={i} className='letter-tile' style={size()}></div>);
    }
    return letters;
  });

  function size() {
    if (window.innerWidth < 800) {
      return {
        height: `calc((100vw - 10px) / 9 )`,
        width: `calc((100vw - 10px) / 9 )`,
      };
    } else if (window.innerWidth < 1200) {
      return {
        height: `calc((100vw - 10px) / 9 )`,
        width: `calc((100vw - 10px) / 9 )`,
      };
    } else {
      return {
        height: '100px',
        width: '100px',
      };
    }
  }

  const tileColor = (index) => {
    if (props.word[index] !== undefined) {
      return props.images[props.currentImageIndex][index].toUpperCase() ===
        props.word[index].toUpperCase()
        ? { backgroundColor: '#59C9A5' }
        : { backgroundColor: '#C95D63' };
    }
  };

  const letters = props.images[props.currentImageIndex]
    .split('')
    .map((letter, index) => {
      return (
        <div
          key={index}
          className='letter-tile'
          style={
            gameDifficulty === 'easy'
              ? Object.assign(size(), tileColor(index))
              : size()
          }
        >
          {props.word[index] ? props.word[index] : null}
        </div>
      );
    });

  useEffect(() => {
    setLetterTiles(letters);
  }, [props.word]);

  return <div className='letter-tiles'>{letterTiles}</div>;
};
