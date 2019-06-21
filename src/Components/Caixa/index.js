import React from 'react';
import './styles.css';

const Caixa = props => {
  return <div className={props.caixa}>{props.children}</div>;
};

export default Caixa;
