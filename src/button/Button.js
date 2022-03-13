import React from 'react';
import './button.css';

export const Button = (props) => {
  function handleClick() {
    props.changeText(props.letter);
  }

  return (
    <div className='button' onClick={handleClick}>
      {props.letter}
    </div>
  );
};
