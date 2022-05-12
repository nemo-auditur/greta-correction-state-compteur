import "./App.css";
import { useState } from "react";

function App() {

  const [counter, setCounter]= useState(0)

  return (
    <>
      <div className="App-header">
        <button
          onClick={()=>{
            setCounter(counter - 1)
          }}>-</button>
        <div>{counter}</div>
        <button
          onClick={()=>{
            setCounter(counter + 1)
          }}
        >+</button>
        <button
          onClick={()=>{
            setCounter(0)
          }}
        >reset</button>
        {}
      </div>
    </>
  );
}

export default App;
