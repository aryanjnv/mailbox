import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form, Button, Alert } from 'react-bootstrap';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User has successfully logged in');
      localStorage.setItem('token', user.accessToken);
      navigate('/welcome');
      // You can store the user token in local storage or state here if needed

    } catch (error) {
      // Check error code to display specific error message for incorrect password
      
        setError('The password is Wrong');
    }
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-form']}>
        <h2 className={styles['login-form-title']}>Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {error && <p className={styles['error-message']}>{error}</p>}
          <Button className={styles['login-form-button']} variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <div className={styles['signup-link']}>
          <p>Don't have an account? <Link to="/">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
