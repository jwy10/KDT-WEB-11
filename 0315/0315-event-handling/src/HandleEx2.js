import { useState } from 'react';

export default function HandleEx2() {
  const [message, setMessage] = useState('검정색 글씨');
  const [color, setColor] = useState({ color: 'black' });
  return (
    <div>
      <h1 style={color}>{message}</h1>
      <button
        onClick={() => {
          setColor({ color: 'red' });
          setMessage('빨간색 글씨');
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setColor({ color: 'blue' });
          setMessage('파란색 글씨');
        }}
      >
        파란색
      </button>
    </div>
  );
}

//
