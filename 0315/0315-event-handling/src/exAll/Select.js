import React from 'react';

export default function Select({ setData }) {
  return (
    <div>
      과일 :
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, background: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="orange">오렌지</option>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, color: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="orange">오렌지</option>
        <option value="red">빨강</option>
        <option value="blue">파랑</option>
      </select>
    </div>
  );
}
