import React, { useEffect, useState } from 'react';
import { WordOutput } from '../wordOutput/WordOutput';
import { Keyboard } from '../keyboard/Keyboard';
import './textArea.css';
import photos from '../images/index';
import { EndOfGame } from '../endOfGame/EndOfGame';

export const TextArea = () => {
  const images = Object.keys(photos);
  const [word, setWord] = useState('');
  const [currentImage, setCurrentImage] = useState(0);
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (images[currentImage].toUpperCase() === word.toUpperCase()) {
      if (currentImage === images.length - 1) {
        setWin(!win);
        setCurrentImage(0);
      } else {
        changeImage();
      }
      setWord('');
      console.log(currentImage);
    }
  }, [word]);

  function handleKeyboardChanges(button) {
    setWord(word + button);
  }

  const handleBackspace = () => {
    setWord(word.slice(0, -1));
  };

  const changeImage = () => {
    setCurrentImage(currentImage + 1);
  };

  return !win ? (
    <div className='text-area'>
      <img src={photos[images[currentImage]]} alt='image to guess'></img>
      <WordOutput word={word}></WordOutput>
      <Keyboard
        handleKeyboardChange={handleKeyboardChanges}
        handleBackspace={handleBackspace}
      ></Keyboard>
    </div>
  ) : (
    <EndOfGame></EndOfGame>
  );
};
