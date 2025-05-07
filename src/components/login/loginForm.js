import '../../App.css';
import '../../css/LoginForm.css'
import {useNavigate, Link } from 'react-router-dom'

import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    
    setErrors({});

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      let username = email
      const response = await fetch('https://w47btzd5u9.execute-api.us-east-1.amazonaws.com/userLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          
          username,
          password,
          
        })
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        console.log("Navigating with email:", email);
        navigate('/',{ state: { email: email } })
        // Handle actions after successful registration like redirecting to a login page or showing a success message
      } else {
        setErrors(errors => ({ ...errors, message: "Invalid Credentials" }));
        throw new Error('Login Failed');
      }
    } catch (error) {
      setErrors(errors => ({ ...errors, message: "Invalid Credentials" }));
      console.error('Error:', error);
    }  


  };

  

  function navSignup(){
    console.log("Signup clicked")
    navigate('/signup'); 
  }

  return (
    <div className="login-container">
      
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errors.message && <div style={{ color: "red" }}>{errors.message}</div>}

        </div>
        <button type="submit">Login</button>
      </form>
      <div className="footer">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

export default LoginForm;
