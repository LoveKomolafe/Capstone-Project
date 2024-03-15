import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

import '../assets/Styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthError = (error) => {
    if (error.code === 'auth/user-not-found') {
      setError("Invalid Account, Create your account by signing up");
    } else if (error.code === 'auth/wrong-password') {
      setError('Invalid Password');
    } else if (error.code === 'auth/invalid-email') {
      setError('Invalid Email');
    } else {
      setError('An error occurred while logging in. Please try again');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/dashboard");
      // User logged in successfully
      console.log('User logged in successfully');
    } catch (error) {
      handleAuthError(error);
    }
  }; 

  return (
    <div className="login-card">
      <h2>Login</h2>

      
      <p>To access your Dashboard, Login into your Carefinder Account</p>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button onClick={handleLogin}>Login</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Login;
