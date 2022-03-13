import React, { useEffect, useState } from 'react';
import { WordOutput } from '../wordOutput/WordOutput';
import { Keyboard } from '../keyboard/Keyboard';
import './textArea.css';
import photos from '../images/index';

export const TextArea = () => {
  const images = Object.keys(photos);
  const [word, setWord] = useState('');
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images[currentImage].toUpperCase() === word.toUpperCase()) {
      changeImage();
      setWord('');
    }
  }, [word]);

  function handleKeyboardChanges(button) {
    setWord(word + button);
  }

  const changeImage = () => {
    setCurrentImage(currentImage + 1);
  };

  return (
    <div className='text-area'>
      <img src={photos[images[currentImage]]} alt='nie dziala'></img>
      <WordOutput word={word}></WordOutput>
      <Keyboard handleKeyboardChange={handleKeyboardChanges}></Keyboard>
    </div>
  );
};
