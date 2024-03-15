import { Component, useState } from 'react';
export default function HandleEx3() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      {/* true->false, false->true */}
      <button onClick={() => setDisplay(!display)}>
        {display ? '사라져라' : '보여라'}
      </button>
      {/* display가 true일 때만 화면에 나오게 */}
      {display && <h4>안녕하세요</h4>}
    </>
  );
}
