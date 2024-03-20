import CssModuleComponents from './CssModuleComponents';
import ReactStyleEx from './ReactStyleEx';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <CssModuleComponents />
      <hr />
      <SassComponent />
      <StyledComponent />
      {/* <ReactStyleEx /> */}
    </div>
  );
}

export default App;
