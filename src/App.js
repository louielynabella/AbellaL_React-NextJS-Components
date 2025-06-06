import React from 'react';
import './App.css';
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Components Demo</h1>
        <WelcomeCard initialName="Wayen" message="Have fun exploring Abella's application!" />
        <Counter />
        <StudentInfo />
      </div>
    </div>
  );
}

export default App;
