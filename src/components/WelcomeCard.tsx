import React from 'react';

interface WelcomeCardProps {
  name: string;
  message?: string;
}


  return (const WelcomeCard: React.FC<WelcomeCardProps> = ({ name, message = 'Have fun exploring Abella application' }) => {
    <div className="welcome-card">
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
      <style jsx>{`
        .welcome-card {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        h2 {
          color: #2c3e50;
          margin-bottom: 10px;
        }
        p {
          color: #666;
          font-size: 1.1em;
        }
      `}</style>
    </div>
  );
};

export default WelcomeCard; 