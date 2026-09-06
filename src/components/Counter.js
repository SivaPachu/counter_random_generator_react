import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="card">
      <h2>Counter</h2>
      <div className="display">{count}</div>

      {count === 0 && <p className="warning">Minimum limit reached</p>}

      <div className="button-group">
        <button className="counter-btn" onClick={increment}>
          Increment
        </button>
        <button
          className="counter-btn"
          onClick={decrement}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}