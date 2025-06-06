import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <div className="counter-title">INTERACTIVE COUNTER</div>
      <div className="counter-value">Counter: {count}</div>
      <div className="button-group">
        <button className="counter-btn" onClick={decrement} aria-label="decrement">-</button>
        <button className="counter-btn" onClick={reset} aria-label="reset">⟳</button>
        <button className="counter-btn" onClick={increment} aria-label="increment">+</button>
      </div>
    </div>
  );
};

export default Counter; 