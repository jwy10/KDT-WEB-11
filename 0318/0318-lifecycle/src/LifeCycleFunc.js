import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);
  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </div>
  );
}
