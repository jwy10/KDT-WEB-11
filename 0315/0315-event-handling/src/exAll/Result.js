import React from 'react';

export default function Result(props) {
  const { fruit, background, color, content } = props.data;
  return (
    <div>
      <img src={`${fruit}.png`} width={100} height={100} alt={fruit} />
      <div
        style={{
          backgroundColor: background,
          color: color,
        }}
      >
        {content}
      </div>
    </div>
  );
}
