import React, { useEffect, useState, useRef } from 'react';
import { WordOutput } from '../wordOutput/WordOutput';
import { Keyboard } from '../keyboard/Keyboard';
import './app.css';
import photos from '../images/index';
import { EndOfGame } from '../endOfGame/EndOfGame';
import { Header } from '../header/header';
import { LetterTiles } from '../letterTiles/LetterTiles';

export const GameDifficultyContext = React.createContext();
export const ChangeGameDifficultyContext = React.createContext();

export const App = () => {
  const images = Object.keys(photos);
  const [word, setWord] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [win, setWin] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState('easy');

  useEffect(() => {
    if (images[currentImageIndex].toUpperCase() === word.toUpperCase()) {
      if (currentImageIndex === images.length - 1) {
        setWin(!win);
        setCurrentImageIndex(0);
      } else {
        setTimeout(() => {
          changeImage();
        }, 500);
      }
      setTimeout(() => {
        setWord('');
      }, 500);
    }
  }, [word]);

  function handleKeyboardChanges(button) {
    if (gameDifficulty === 'hard') {
      setWord(word + button);
    } else if (word.length < images[currentImageIndex].length) {
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
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const switchWordOutput = (difficulty) => {
    if (difficulty === 'easy' || difficulty === 'medium') {
      return (
        <GameDifficultyContext.Provider value={gameDifficulty}>
          <LetterTiles
            images={images}
            currentImageIndex={currentImageIndex}
            word={word}
          ></LetterTiles>
        </GameDifficultyContext.Provider>
      );
    } else {
      return <WordOutput word={word}></WordOutput>;
    }
  };

  const handleKeyboardLetterPress = (event) => {
    if (event.key === 'Backspace') {
      handleBackspace();
    } else if (event.key.toUpperCase().match(/^[A-Z]{1}$/)) {
      handleKeyboardChanges(event.key.toUpperCase());
    }
  };

  return !win ? (
    <div className='app' onKeyDown={handleKeyboardLetterPress} tabIndex='0'>
      <GameDifficultyContext.Provider value={gameDifficulty}>
        <ChangeGameDifficultyContext.Provider value={changeGameDifficulty}>
          <Header></Header>
        </ChangeGameDifficultyContext.Provider>
      </GameDifficultyContext.Provider>
      <img src={photos[images[currentImageIndex]]} alt='image to guess'></img>
      {switchWordOutput(gameDifficulty)}
      <Keyboard
        handleKeyboardChange={handleKeyboardChanges}
        handleBackspace={handleBackspace}
      ></Keyboard>
    </div>
  ) : (
    <div className='app'>
      <Header endGame={win}></Header>
      <EndOfGame></EndOfGame>
    </div>
  );
};
