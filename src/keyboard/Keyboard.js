import React from 'react';
import { Backspace, Button } from '../button/Button.js';
import './keyboard.css';

export const Keyboard = (props) => {
  function handleChange(buttonLetter) {
    props.handleKeyboardChange(buttonLetter);
  }

  const handleBackspace = () => {
    props.handleBackspace();
  };

  const letters = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  const buttons = letters.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((letter, buttonIndex) => {
          return (
            <Button
              key={buttonIndex}
              changetext={handleChange}
              letter={letter}
            ></Button>
          );
        })}
      </div>
    );
  });

  return (
    <div className='keyboard'>
      {buttons}
      <Backspace handleBackspace={handleBackspace}></Backspace>
    </div>
  );
};
