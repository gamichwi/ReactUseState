import React, { useState } from "react";

import './Counter.css'

const Counter = props => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('');

  const resetCounter = (event) => {
    setCount(+event.target.value);

  }
  return (
    <React.Fragment>
    <div className="card">
      <h2>{status}</h2>
      <p>{count}</p>
      <label>Override: </label>
      <input onChange={resetCounter}/>
      <br></br>
      <br></br>

      <button className="button" onClick={() => {
        setCount(count + 1)
        setStatus('Number is incrementing...')
      }}> Increment</button>

      <button className="button" onClick={() => {
        setStatus('Number is decrementing...')
        setCount(count - 1)
      }}> Decrement</button>
      <button className="button" onClick={() => {
        setStatus('Number has been reset')
        setCount(0)}}> Reset</button>
    </div>


    </React.Fragment>
  );
};

export default Counter;