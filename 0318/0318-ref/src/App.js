import logo from './logo.svg';
import './App.css';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefEx from './RefEx';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';
import RefEx2 from './RefEx2';

function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 : ref 사용 1. 콜백함수 */}
      <RefSample1 />
      <hr />
      {/* 클래스형 컴포넌트 : ref 사용 2. createRef() */}
      <RefSample2 />
      <hr />
      <RefEx />
      <hr />
      {/*함수형 컴포넌트 : useRef()로 DOM요소에 접근 */}
      <RefSample3 />
      <hr />
      <RefSample4 />
      <hr />
      <RefEx2 />
    </div>
  );
}

export default App;
