  // src/components/Login.js
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { useNavigate } from 'react-router-dom';
  import { login } from '../actions/authActions';

  function Login() {
    const [memberID, setMemberID] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (memberID === 'andy' && password === 'password') {
        dispatch(login({ memberID }));
        setStatusMessage('Login successful. Welcome back!');
        navigate('/home')
      } else {
        setStatusMessage('Invalid credentials. Please try again.');
      }
    };

    return (
      <div id="loginForm" className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="memberID">Member ID</label>
            <input
              type="text"
              id="memberID"
              value={memberID}
              onChange={(e) => setMemberID(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Access Your Account</button>
        </form>
        <div className="status-message">{statusMessage}</div>
      </div>
    );
  }

  export default Login;