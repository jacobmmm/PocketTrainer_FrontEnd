
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [confPwd, setConfPwd] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [errors, setErrors] = useState({});
    let navigate = useNavigate();
    const handleLogin = async (event) => {
      event.preventDefault();
      // Add your login logic here
      setErrors({});

      

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(email)) {
        setErrors(errors => ({ ...errors, email: "Please enter a valid email address." }));
        return; // Stop the form submission if email is invalid
    }

    // Checking if passwords match
    if (password !== confPwd) {
        setErrors(errors => ({ ...errors, password: "Passwords do not match." }));
        return; // Stop the form submission if passwords do not match
    }

    console.log("Form submitted:", { firstName, lastName, dateOfBirth, email, password, height, weight });


      try {
        const response = await fetch('https://p5l1fe42jf.execute-api.us-east-1.amazonaws.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName,
            lastName,
            dateOfBirth,
            email,
            password,
            height,
            weight
          })
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log('Success:', result);
          // Handle actions after successful registration like redirecting to a login page or showing a success message
        } else {
          throw new Error('Failed to register');
        }
      } catch (error) {
        console.error('Error:', error);
      }  

      navigate('/login')

      
    };
  
    return (
      <div className="login-container">
        
        <form onSubmit={handleLogin}>

        <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>  

          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="dateOfBirth">DOB</label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>

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
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confPassword"
              value={confPwd}
              onChange={(e) => setConfPwd(e.target.value)}
              required
            />

            {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}

          </div> 

          <div className="input-group">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>  

          <div className="input-group">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>  

          <button type="submit">Sign Up</button>
        </form>
        
      </div>
    );
  }
  
  export default RegistrationForm;