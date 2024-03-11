import React from 'react';

const Hello = ({ onChange }) => {
  return <button onClick={onChange}> Click me</button>;
};

export default Hello;
