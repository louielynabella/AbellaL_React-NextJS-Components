import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import Counter from '../components/Counter';
import StudentInfo from '../components/StudentInfo';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>React Components Demo</h1>
      <WelcomeCard name="User" message="Welcome to our React components showcase!" />
      <Counter />
      <StudentInfo />
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
};

export default Home; 