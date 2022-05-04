import { useState } from 'react';
import './App.css';

function App() {

  // const number = 0
  const [number, setNumber] = useState(0)

  return (
    <div className="App">
    <p>{number}</p>
    <button className="button" onClick={() => setNumber(prevNumber => prevNumber - 1)}>Minus One</button>
    <button className="button" onClick={() => setNumber(prevNumber => prevNumber * 2)}>Double</button>
    <button className="button" onClick={() => setNumber(prevNumber => prevNumber / 2)}>Cut Half</button>
    <button className="button" onClick={() => setNumber(prevNumber => prevNumber + 1)}>Add One</button>
    </div>
  );
}

export default App;
