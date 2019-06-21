import React from 'react';
import './styles.css';

const Images = props => {
  return <img className={props.imagem}>{props.children}</img>;
};

export default Images;
