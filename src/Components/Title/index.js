import React from 'react';
import './styles.css';

const Title = props => {
  return (
    <h1 className={props.item}>
      <span className={props.borda}>{props.children}</span>
    </h1>
  );
};

export default Title;
