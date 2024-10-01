
import React, { useState } from 'react';


function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [confPwd, setConfPwd] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleLogin = (event) => {
      event.preventDefault();
      // Add your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
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
              onChange={(e) => setConfPwd(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="password"
              value={confPwd}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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