// import logo from './logo.svg';
import './App.css';
import grass from './grass.png';

function App() {
  // const name = 'Codee';
  // const styles = {
  //   color: 'blue',
  //   fontSize: '48px',
  //   backgroundColor: 'yellow',
  // };
  // const name = '무무';
  // const animal = '강아지';
  // const a = 13;
  // const b = 5;
  return (
    <>
      <div className="App">
        {
          /* <div className="Eye1"></div>
        <div className="Eye2"></div>
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
        <div className="Circle4"></div>
        <div className="Circle5"></div>*/
          <img src={grass} className="grass" alt="잔디" />
        }
        {/* public img 접근 */}
        <img src="/logo192.png" alt="로고" />
        {/* 두가지 차이점 */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1></h1>
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* {JSX문법} */}
        {/* 1. 하나로 감싸인 요소 */}
        {/* 2. Javascript 표현식 사용
        - {}로 감싸면 js 표현식 사용 가능
        - {}에서 삼항 연산자 사용 가능(if문 안됨)
      */}
        {/* <div>{name} 안녕?</div>
        <div>반갑다</div>
        <div>{name === 'Codee' ? 'KDT 11기에요!' : '누구세요?'}</div> */}
        {/* 3. style속성
          -리엑트에서 dom 요소에 스타일 적용시 문자열x -> 객체 사용
          - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성해야함 
        */}
        {/* <div style={styles}>하이~</div> */}
        {/* 첫번째 {} : jsx 두번째 {} : 객체 */}
        {/* <div
          style={{
            color: 'blue',
            fontSize: '48px',
            backgroundColor: 'pink',
          }}
        >
          하이하이~
        </div> */}
        {/* 4. className 사용
          - class 속성이 아닌 className 속성 사용 <div className="App">

          5. 종료 태그가 없는 태그의 사용
           - 기존의 종료태그가 없는 태그 사용하더라도 종료 태그를 작성해야함 or self-closing
           - ex. <br> -> <br /> or <br></br>

          6. 주석
           - // jsx 외부 주석
           - {/**'/'} : jsx 내부 주석
        */}
        {/* 실습1 */}
        {/* <h2>
          제 반려동물의 이름은 {name}입니다.
          <br />
          {name}는 {animal}입니다.
        </h2> */}
        {/* 실습2 */}
        {/* <div>{3 + 5 === 8 ? '정답입니다' : '오답입니다'}</div> */}
        {/* 실습3 */}
        {/* <div>{a > b && 'a가 b보다 큽니다'}</div> */}
        {/* 실습 4 */}
        {/* <div className="title">React는 처음이지?</div>
        <div>
          아이디 : <input type="text" />
        </div>
        <div>
          비밀번호 : <input type="text" />
      </div> */}
      </div>
      {/* <div>부모가없다</div> */}
    </>
  );
}

export default App;
