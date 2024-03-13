import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';
import Food from './Food';
import Book from './Book';

function App() {
  const name = '코딩온';
  return (
    <div className="App">
      <FunctionComponent name={name} time="14시" />
      <FunctionComponent time="14시" />
      <FunctionComponent name={13} time="14시">
        자식내용
      </FunctionComponent>
      <FunctionComponent name={[1, 2, 3]} time="14시" />

      {/* 함수형과 클려스형 컴포넌트 중복 사용 시 prop-types 하나만 뜨는 경우 발생 */}
      <hr />
      <ClassComponent name={name} />
      <ClassComponent />
      <hr />
      <Button link="https://www.google.com">
        <span>Google</span>
      </Button>
      <Food />
      <Book />
    </div>
  );
}

export default App;
