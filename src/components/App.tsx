import  { useState } from 'react'
import  './App.css';

function App() {
    const [count,setCount] = useState<number>(0)

    const increment = () => {
        setCount(count + 1)
    };


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Inc</button>
    </div>
  )
}

export default App