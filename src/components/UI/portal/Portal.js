import React from 'react';
import ReactDOM from 'react-dom';

const portal = ({ children: renderComponent, destId }) => {
  return ReactDOM.createPortal(
    renderComponent,
    document.getElementById(destId),
  );
};

export default portal;
