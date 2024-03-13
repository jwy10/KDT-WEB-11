import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import PropsEx from './PropsEx';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <hr />
      <SayFunction></SayFunction>
      <PropsEx></PropsEx>
    </div>
  );
}

export default App;
