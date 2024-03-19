import React, { useReducer } from 'react';

const initState = { value: 0 };
const reducer = (prevState, action) => {
  console.log('prevState', prevState);
  console.log('action', action); //INCREMENT
  switch (action.type) {
    case 'INCREMENT':
      return { value: prevState.value + 1 };

    case 'DECREMENT':
      return { value: prevState.value - 1 };

    case 'RESET':
      return { value: 0 };
    default:
      break;
  }
};

export default function UseReducerEx() {
  // reducer: state를 업데이트하는 함수
  // dispatch: 액션을 발생시키는 함수 (액션: state가 어떻게 변경되어야 하는지에 대한 힌트)
  // state: 현재 상태
  // init State : 초깃값
  // useReducer는 [state, dispatch]를 리턴함
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });
  return (
    <div>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
