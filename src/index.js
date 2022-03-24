import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { TextArea } from './textArea/TextArea.js';
import { Header } from './header/header';

ReactDOM.render(<Header></Header>, document.getElementById('header'));
ReactDOM.render(<TextArea />, document.getElementById('text-area'));
