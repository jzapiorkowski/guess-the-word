import React, { useState, useEffect } from 'react';

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
    });
  }, [props.word]);

  return <div>{letterTiles}</div>;
};
