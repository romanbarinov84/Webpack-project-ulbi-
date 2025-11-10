import { useState } from "react";
import * as classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import avatar from "@/assets/dsc_0746-600x400.jpg"
import Cart from "@/assets/cart.svg"

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <img width={300} height={150} src={avatar} alt="avatar" />
        
      </div>
      <div>
        <Cart/>
      </div>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <br />
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>inc</span>
      </button>
      <Outlet />
    </div>
  );
}

export default App;
