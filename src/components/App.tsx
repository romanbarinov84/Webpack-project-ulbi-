
import  { useState } from 'react';
import './App.scss';

export  function App() {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(prev => prev + 1);
  return (
    <div>
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>inc</button>
        </div>

    </div>
  )
}
