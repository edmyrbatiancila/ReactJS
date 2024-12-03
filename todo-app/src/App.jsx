import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react';
import Another from './Another';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const incDec = {
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonSpacing = {
    padding: '10px',
  };
  return (
    <div className="App">
      <header className="App-header">
        <Another name="Edmyr" />
        <div style={incDec}>
          <span>{count}</span>
          <div style={buttonSpacing}>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {true && <p style={someStyle}>This is my style</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
