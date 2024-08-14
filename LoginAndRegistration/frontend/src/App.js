import React, { useState } from 'react';
import './App.css';

// Function to handle form submission
const handleRegister = (event, username, email, password) => {
  event.preventDefault();
  // Implement the registration logic here
  console.log('Registering with:', { username, email, password });
};

function App() {
  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <form
          onSubmit={(e) => handleRegister(e, username, email, password)}
          className="Register-form"
        >
          <div className="Form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="Form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="Form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="Submit-button">Register</button>
        </form>
      </header>
    </div>
  );
}

export default App;
