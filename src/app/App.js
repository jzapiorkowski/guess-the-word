import React, { useEffect, useState, useRef } from 'react';
// import { WordOutput } from '../wordOutput/WordOutput';
import { Keyboard } from '../keyboard/Keyboard';
import './app.css';
import photos from '../images/index';
import { EndOfGame } from '../endOfGame/EndOfGame';
import { Header } from '../header/header';

export const GameDifficultyContext = React.createContext();
export const ChangeGameDifficultyContext = React.createContext();

export const App = () => {
  const images = Object.keys(photos);
  const isMounted = useRef(false);
  const [word, setWord] = useState('');
  const [currentImage, setCurrentImage] = useState(0);
  const [win, setWin] = useState(false);
  const [letterTiles, setLetterTiles] = useState(() => {
    const letters = [];
    for (let i = 0; i < images[currentImage].length; i++) {
      letters.push(<div key={i} className='letter-tile'></div>);
    }
    return letters;
  });
  const [gameDifficulty, setGameDifficulty] = useState('easy');

  useEffect(() => {
    if (isMounted.current) {
      setLetterTiles(() => {
        const letters = [];
        for (let i = 0; i < images[currentImage].length; i++) {
          letters.push(
            word[i] !== undefined ? (
              <div key={i} className='letter-tile'>
                {word[i]}
              </div>
            ) : (
              <div key={i} className='letter-tile'></div>
            )
          );
        }
        return letters;
      });
    }
  }, [word]);

  useEffect(() => {
    if (isMounted.current) {
    } else {
      isMounted.current = true;
    }
  });

  useEffect(() => {
    if (images[currentImage].toUpperCase() === word.toUpperCase()) {
      if (currentImage === images.length - 1) {
        setWin(!win);
        setCurrentImage(0);
      } else {
        changeImage();
      }
      setWord('');
    }
  }, [word]);

  function handleKeyboardChanges(button) {
    if (word.length >= images[currentImage].length) {
    } else {
      setWord(word + button);
    }
  }

  const changeGameDifficulty = (difficulty) => {
    setGameDifficulty(difficulty);
  };

  const handleBackspace = () => {
    setWord(word.slice(0, -1));
  };

  const changeImage = () => {
    setCurrentImage(currentImage + 1);
  };

  return !win ? (
    <div className='app'>
      <GameDifficultyContext.Provider value={gameDifficulty}>
        <ChangeGameDifficultyContext.Provider value={changeGameDifficulty}>
          <Header></Header>
        </ChangeGameDifficultyContext.Provider>
      </GameDifficultyContext.Provider>
      <img src={photos[images[currentImage]]} alt='image to guess'></img>
      {/* <WordOutput word={word}></WordOutput> */}
      <div className='letters-container'>{letterTiles}</div>
      <Keyboard
        handleKeyboardChange={handleKeyboardChanges}
        handleBackspace={handleBackspace}
      ></Keyboard>
    </div>
  ) : (
    <EndOfGame></EndOfGame>
  );
};
