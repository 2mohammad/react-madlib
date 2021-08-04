import logo from './logo.svg';
import './App.css';
import MadlibForm from './MadlibForm'
import MadlibDisplay from './MadlibDisplay';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MadlibDisplay />
      </header>
    </div>
  );
}

export default App;
