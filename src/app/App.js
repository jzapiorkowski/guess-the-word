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
  const [currentImage, setCurrentImage] = useState(0);
  const [win, setWin] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState('easy');

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

  const switchWordOutput = (difficulty) => {
    if (difficulty === 'easy' || difficulty === 'medium') {
      return (
        <GameDifficultyContext.Provider value={gameDifficulty}>
          <LetterTiles
            images={images}
            currentImage={currentImage}
            word={word}
          ></LetterTiles>
        </GameDifficultyContext.Provider>
      );
    } else {
      return <WordOutput word={word}></WordOutput>;
    }
  };

  return !win ? (
    <div className='app'>
      <GameDifficultyContext.Provider value={gameDifficulty}>
        <ChangeGameDifficultyContext.Provider value={changeGameDifficulty}>
          <Header></Header>
        </ChangeGameDifficultyContext.Provider>
      </GameDifficultyContext.Provider>
      <img src={photos[images[currentImage]]} alt='image to guess'></img>
      {switchWordOutput(gameDifficulty)}
      <Keyboard
        handleKeyboardChange={handleKeyboardChanges}
        handleBackspace={handleBackspace}
      ></Keyboard>
    </div>
  ) : (
    <div>
      <Header endGame={win}></Header>
      <EndOfGame></EndOfGame>
    </div>
  );
};
