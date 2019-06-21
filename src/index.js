import React from 'react';
import ReactDOM from 'react-dom'; //ReactDOM será o responsável por "linkar" nossa aplicação ao nosso arquivo html principal (index.html)
import Main from '../src/pages/Main';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
