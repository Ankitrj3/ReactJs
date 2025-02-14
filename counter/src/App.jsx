import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState('Keep Going');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count < 0) {
      setVal('Negative');
    } else if (count > 10) {
      setVal('More Than 10');
    } else {
      setVal('Keep Going');
    }
  }, [count]);

  return (
    <>
      <h1>Counter {count}</h1>
      <h3 style={{ color: count < 0 ? 'red' : 'green' }}>{val}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;