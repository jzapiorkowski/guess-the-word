import React, { useState, useEffect } from 'react';
import './letterTiles.css';

export const LetterTiles = (props) => {
  const [letterTiles, setLetterTiles] = useState(() => {
    const letters = [];
    for (let i = 0; i < props.images[props.currentImage].length; i++) {
      letters.push(<div key={i} className='letter-tile'></div>);
    }
    return letters;
  });

  useEffect(() => {
    setLetterTiles(() => {
      const letters = [];
      if (props.difficulty === 'medium') {
        for (let i = 0; i < props.images[props.currentImage].length; i++) {
          letters.push(
            props.word[i] !== undefined ? (
              <div key={i} className='letter-tile'>
                {props.word[i]}
              </div>
            ) : (
              <div key={i} className='letter-tile'></div>
            )
          );
        }
        return letters;
      } else {
        for (let i = 0; i < props.images[props.currentImage].length; i++) {
          letters.push(
            props.word[i] !== undefined ? (
              <div
                key={i}
                className='letter-tile'
                style={
                  props.images[props.currentImage][i].toUpperCase() ===
                  props.word[i].toUpperCase()
                    ? { backgroundColor: '#59C9A5' }
                    : { backgroundColor: '#C95D63' }
                }
              >
                {props.word[i]}
              </div>
            ) : (
              <div key={i} className='letter-tile'></div>
            )
          );
        }
        return letters;
      }
    });
  }, [props.word]);

  return <div className='letter-tiles'>{letterTiles}</div>;
};
