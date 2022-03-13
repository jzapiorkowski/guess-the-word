import React, { useState } from 'react';
import { WordOutput } from '../wordOutput/WordOutput';
import { Keyboard } from '../keyboard/Keyboard';
import './textArea.css';

export const TextArea = () => {
  const [word, setWord] = useState('');

  function handleKeyboardChanges(button) {
    setWord(word + button);
  }

  return (
    <div className='text-area'>
      <WordOutput word={word}></WordOutput>
      <Keyboard handleKeyboardChange={handleKeyboardChanges}></Keyboard>
    </div>
  );
};
