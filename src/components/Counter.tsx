import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
      <style jsx>{`
        .counter {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        h2 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        .button-group {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          background-color: #3498db;
          color: white;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        button:hover {
          background-color: #2980b9;
        }
        button:nth-child(2) {
          background-color: #e74c3c;
        }
        button:nth-child(2):hover {
          background-color: #c0392b;
        }
      `}</style>
    </div>
  );
};

export default Counter; 