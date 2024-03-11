import React, { useState } from 'react';
import './style.css';
import Hello from './Components/Component';

import Input from './Components/Input';

export default function App() {
  const handleChangeHelloEvent = () => {
    console.log('Evente progagated with data: ');
  };

  const [entrada, setEntrada] = useState('holña');
  //entrada es el valor
  //setEntrada la función que modifica el estado
  return (
    <div>
      <Hello onChange={handleChangeHelloEvent} />
      <p>Start editing to see some magic happen :)</p>

      <Input input={entrada} setInput={setEntrada} />
    </div>
  );
}
