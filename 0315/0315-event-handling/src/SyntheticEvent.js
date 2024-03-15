export default function SyntheticEvent() {
  function syntheticClick(e) {
    console.log(e);
    console.log('Synthetic Event Click!');
    //콘솔에 기록되는 e 객체는 SyntheticEvent (합성 이벤트)
    // : 리엑트가 DOM 이 아닌 VirtualDOM 을 사용하는 것처럼
    // 웹 브라우저의 nativeEvent 가 아닌 naviveEvent를 감싼 SyntheticEvent 사용

    // 즉 리엑트에서 onClick, onChange 등등 같은 이벤트들은 브라우저의 기본 이벤트가
    // 브라우저의 이벤트들을 포함하고 있는 리엑ㅇ트의 고유한 이벤트 객체
  }
  function printInputValue(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <button onClick={syntheticClick}>synthetic event 콘솔 찍기</button>
      <br />
      <input type="text" placeholder="입력하세요" onChange={printInputValue} />
    </div>
  );
}
