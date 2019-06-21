import React from 'react';
import './styles.css';

const Text = props => {
  return <h2 className={props.item}>{props.children}</h2>;
};

export default Text;
