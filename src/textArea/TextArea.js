import React, { useState } from 'react';
import { WordInput } from '../wordInput/WordInput';
import { Keyboard } from '../keyboard/Keyboard';
import './textArea.css';

export const TextArea = () => {
  const [word, setWord] = useState('');

  function handleKeyboardChanges(button) {
    setWord(word + button);
  }

  return (
    <div className='text-area'>
      <WordInput word={word}></WordInput>
      <Keyboard handleKeyboardChange={handleKeyboardChanges}></Keyboard>
    </div>
  );
};
