import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Button, Alert } from 'react-bootstrap';
import { auth } from '../firebase/firebaseConfig';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './signup.module.css'; // Import your CSS file

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User has successfully signed up:', userCredential.user);
      // You can redirect user to another page upon successful signup if needed
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles['signup-container']}>
      <div className={styles['signup-form']}>
      <h2 className={styles['signup-form-title']}>SignUp</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSignUp}>
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

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button className={styles['signup-form-button']} variant="primary" type="submit">
            Sign Up
          </Button>

          <div className="mt-3">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
