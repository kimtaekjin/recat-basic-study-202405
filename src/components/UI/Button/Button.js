import React from 'react';
import './Button.css';

const Button = ({ type, onclick, children }) => {
  return (
    <button type={type} onClick={onclick} className="button">
      {children}
    </button>
  );
};

export default Button;
W;
