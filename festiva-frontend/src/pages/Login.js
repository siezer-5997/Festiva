import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/login.css';
import { userLogin } from '../utils/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await userLogin({ username, password });
    if (response && response.access_token) {
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('username', response.user.username); // Save username
      localStorage.setItem('email', response.user.email); // Save email
      localStorage.setItem('joined_date', response.user.joined_date); // Save joined date
      navigate('/'); // Redirect to homepage
    } else {
      alert('Invalid Credentials');
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          {/* First Box: Image Section */}
          <div className="box1">
          </div>

          {/* Second Box: Login Form */}
          <div className="box2">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
              <button type="button" onClick={() => navigate('/signup')}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
