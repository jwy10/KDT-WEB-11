import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandleEx from './HandleEx';
import HandleEx2 from './HandleEx2';
import HandleEx3 from './HandleEx3';
import HandleEx4 from './HandleEx4';
import ExAll from './exAll/ExAll';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <ClassBind />
      <Counter />
      <br />
      <HandleEx />
      <br />
      <HandleEx2 />
      <br />
      <HandleEx3 />
      <br />
      {/* <HandleEx4 /> */}
      <br />
      <ExAll />
    </div>
  );
}

export default App;
