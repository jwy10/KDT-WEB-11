import './App.css';
import Faq from './components/Faq';
import Form from './components/Form';
import HookFormEx from './components/HookFormEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <UseCallbackEx postId={9} />
      <hr />
      <UseReducerEx />
      {/* 커스텀 훅 */}
      <hr />
      <Faq />
      <br />
      <Form />
      <br />
      <HookFormEx />
    </div>
  );
}

export default App;
