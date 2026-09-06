import React, { useState } from 'react';

export default function Random() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  const resetNumber = () => setNumber(null);

  return (
    <div className="card">
      <h2>Random Number Generator</h2>

      <div className="display">{number !== null ? number : 0}</div>

      {number === null && <p className="warning">No number generated yet</p>}

      <div className="button-group">
        <button className="primary-btn" onClick={generateNumber}>
          Generate
        </button>
        <button className="reset-btn" onClick={resetNumber}>
          Reset
        </button>
      </div>
    </div>
  );
}