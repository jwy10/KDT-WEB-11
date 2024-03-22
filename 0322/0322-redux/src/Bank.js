import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { input, output } from './store/inAndOutReducer';

export default function Bank() {
  //store에 있는 상태 가져오기
  // const number = useSelector((state) => state.counter.number);
  // console.log((state) => state.counter.number);
  const money = useSelector((state) => state.inAndOut.money);
  const [inputValue, setInputValue] = useState();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <div>
      <h1>코딩온 은행</h1>
      <h2>{money}원</h2>
      <input type="number" value={inputValue} onChange={handleChange} />
      <button onClick={() => dispatch(input(Number(inputValue)))}>입금</button>
      <button onClick={() => dispatch(output(Number(inputValue)))}>출금</button>
    </div>
  );
}
