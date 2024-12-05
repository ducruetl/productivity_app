import logo from '../logo.svg';
import '../index.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="w-16" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Sidebar/>
    </div>
  );
}

export default App;
