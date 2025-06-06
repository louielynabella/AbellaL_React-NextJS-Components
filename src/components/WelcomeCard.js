import React, { useState } from 'react';

const WelcomeCard = ({ initialName = 'Wayen', message = "Have fun exploring Abella's application!" }) => {
  const [name, setName] = useState(initialName);
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(name);

  const handleEdit = () => setEditing(true);
  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
    setEditing(false);
  };

  return (
    <div className="welcome-card">
      <h2>WELCOME, {name.toUpperCase()}!</h2>
      <p>{message}</p>
      {editing ? (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            className="form-group input"
            style={{ marginBottom: '1rem', width: '100%' }}
            autoFocus
          />
          <button className="edit-btn" type="submit">Save</button>
        </form>
      ) : (
        <button className="edit-btn" onClick={handleEdit}>Edit Name</button>
      )}
    </div>
  );
};

export default WelcomeCard; 