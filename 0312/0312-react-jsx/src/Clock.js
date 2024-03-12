function Clock() {
  return (
    <div>
      {/* {toLocalTimeString : 현재 사용자 문화권에 맞는 시간대 표시?} */}
      <h1>현재 시간은{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
