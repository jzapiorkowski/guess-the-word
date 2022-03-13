import React from 'react';
import { Button } from '../button/Button.js';
import './keyboard.css';

export const Keyboard = (props) => {
  function handleChange(buttonLetter) {
    props.handleKeyboardChange(buttonLetter);
  }

  return (
    <div className='keyboard'>
      <div className='first-row'>
        <Button changeText={handleChange} letter='Q'></Button>
        <Button changeText={handleChange} letter='W'></Button>
        <Button changeText={handleChange} letter='E'></Button>
        <Button changeText={handleChange} letter='R'></Button>
        <Button changeText={handleChange} letter='T'></Button>
        <Button changeText={handleChange} letter='Y'></Button>
        <Button changeText={handleChange} letter='U'></Button>
        <Button changeText={handleChange} letter='I'></Button>
        <Button changeText={handleChange} letter='O'></Button>
        <Button changeText={handleChange} letter='P'></Button>
      </div>
      <div className='second-row'>
        <Button changeText={handleChange} letter='A'></Button>
        <Button changeText={handleChange} letter='S'></Button>
        <Button changeText={handleChange} letter='D'></Button>
        <Button changeText={handleChange} letter='F'></Button>
        <Button changeText={handleChange} letter='G'></Button>
        <Button changeText={handleChange} letter='H'></Button>
        <Button changeText={handleChange} letter='J'></Button>
        <Button changeText={handleChange} letter='K'></Button>
        <Button changeText={handleChange} letter='L'></Button>
      </div>
      <div className='third-row'>
        <Button changeText={handleChange} letter='Z'></Button>
        <Button changeText={handleChange} letter='X'></Button>
        <Button changeText={handleChange} letter='C'></Button>
        <Button changeText={handleChange} letter='V'></Button>
        <Button changeText={handleChange} letter='B'></Button>
        <Button changeText={handleChange} letter='N'></Button>
        <Button changeText={handleChange} letter='M'></Button>
      </div>
    </div>
  );
};
