import { useState } from "react";
import * as classes from './App.module.scss';


function App() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  

  return (
    <div>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button}onClick={increment}><span>
                inc
            </span></button>
    </div>
  );
}

export default App;
