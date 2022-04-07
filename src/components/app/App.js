import React, { useEffect, useState, useReducer } from 'react';
import { WordOutput } from '../wordOutput/WordOutput';
import { Keyboard } from '../keyboard/Keyboard';
import './app.css';
import photos from '../../images/index';
import { EndOfGame } from '../endOfGame/EndOfGame';
import { Header } from '../header/header';
import { LetterTiles } from '../letterTiles/LetterTiles';
const images = Object.keys(photos);

export const GameDifficultyContext = React.createContext();
export const ChangeGameDifficultyContext = React.createContext();

export const App = () => {
  const [word, setWord] = useState('');
  const [win, setWin] = useReducer((win) => !win, false);
  const [gameDifficulty, setGameDifficulty] = useState('easy');
  const [availableImages, setavailableImages] = useState([...images]);
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * availableImages.length)
  );

  useEffect(() => {
    if (
      availableImages[currentImageIndex].toUpperCase() === word.toUpperCase()
    ) {
      if (availableImages.length === 1) {
        setTimeout(() => {
          setWin();
          return null;
        }, 500);
      } else {
        changeImage().then(() => {
          updateAvailableImages();
          setWord('');
        });
      }
    }
  }, [word]);

  function updateAvailableImages() {
    setavailableImages(() => {
      const tmp = [...availableImages];
      tmp.splice(currentImageIndex, 1);
      return tmp;
    });
  }

  function handleKeyboardChanges(button) {
    if (gameDifficulty === 'hard') {
      setWord(word + button);
    } else if (word.length < availableImages[currentImageIndex].length) {
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
    return new Promise((resolve) => {
      setTimeout(() => {
        setCurrentImageIndex(
          Math.floor(Math.random() * (availableImages.length - 1))
        );
        resolve();
      }, 500);
    });
  };

  const switchWordOutput = (difficulty) => {
    if (difficulty === 'easy' || difficulty === 'medium') {
      return (
        <GameDifficultyContext.Provider value={gameDifficulty}>
          <LetterTiles
            availableImages={availableImages}
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
      <img
        src={photos[availableImages[currentImageIndex]]}
        alt='image to guess'
      ></img>
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
