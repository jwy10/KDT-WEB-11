import { useState } from 'react';

export default function HandleEx4() {
  return (
    <div>
      <span>
        과일 :{' '}
        <select name="fruit" id="fruit">
          <option value="apple">사과</option>
          <option value="grape">포도</option>
          <option value="banana">바나나</option>
          <option value="peach">복숭아</option>
        </select>
      </span>
      <span>
        배경색 :
        <select name="bgcolor" id="bgcolor">
          <option value="black">검정</option>
          <option value="red">빨강</option>
          <option value="white">하양</option>
          <option value="orange">오렌지</option>
        </select>
      </span>
      <span>
        글자색 :
        <select name="textcolor" id="textcolor">
          <option value="black">검정</option>
          <option value="red">빨강</option>
          <option value="white">하양</option>
          <option value="orange">오렌지</option>
        </select>
      </span>
      <br />
      <div>
        <span>
          {' '}
          내용을 입력하세요:
          <input type="text" placeholder="내용을 입력하세요" />
        </span>
        <br />
        <img src="" alt="" />
        <br />
        <div className="textArea">text</div>
      </div>
    </div>
  );
}
