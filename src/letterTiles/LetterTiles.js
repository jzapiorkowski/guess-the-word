import React, { useState, useEffect } from 'react';
import './letterTiles.css';

export const LetterTiles = (props) => {
  const [letterTiles, setLetterTiles] = useState(() => {
    const letters = [];
    for (let i = 0; i < props.images[props.currentImage].length; i++) {
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
    return props.images[props.currentImage][index].toUpperCase() ===
      props.word[index].toUpperCase()
      ? { backgroundColor: '#59C9A5' }
      : { backgroundColor: '#C95D63' };
  };

  useEffect(() => {
    setLetterTiles(() => {
      const letters = [];
      if (props.difficulty === 'medium') {
        for (let i = 0; i < props.images[props.currentImage].length; i++) {
          letters.push(
            props.word[i] !== undefined ? (
              <div key={i} className='letter-tile' style={size()}>
                {props.word[i]}
              </div>
            ) : (
              <div key={i} className='letter-tile' style={size()}></div>
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
                  size() ? Object.assign(size(), tileColor(i)) : tileColor(i)
                }
              >
                {props.word[i]}
              </div>
            ) : (
              <div key={i} className='letter-tile' style={size()}></div>
            )
          );
        }
        return letters;
      }
    });
  }, [props.word]);

  return <div className='letter-tiles'>{letterTiles}</div>;
};
