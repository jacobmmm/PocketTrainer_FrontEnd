import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../../css/NavBar.css'



function NavBar(props) {


  console.log("email navbar",props.email)  

  const [isOpen, setIsOpen] = useState(false);  // State to control the visibility of the dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  let navigate = useNavigate();

  function handleLoginClick(){
    console.log("Login clicked")
    navigate('/login'); 
  }

  function handleTitleClick(){
    console.log("Login clicked")
    navigate('/',{ state: { email: props.email } }); 

  }

  function viewPlans(){
    
    navigate('/myplans',{ state: { email: props.email } }); 
  }

  function handlePlans(){
    console.log("Available Plans clicked")
    navigate('/muscleplan',{ state: { email: props.email } }); 
  }

  function toggleDropdown(){
    console.log("isOpen is, ",isOpen)
    setIsOpen(!isOpen); 
  }

  function toggleMobileMenu(){
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function handleLogout(){
    navigate('/');
  }

  if(!props.email){
     return(
      <div className="navbar">
        <div onClick={handleTitleClick} className="navbar-title">POCKET TRAINER</div>
        
        {/* Desktop menu */}
        <div className="nav-links">
          <div onClick={handleLoginClick} className="nav-link">Login</div>
        </div>

        {/* Mobile hamburger menu */}
        <div className="mobile-hamburger" onClick={toggleMobileMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div onClick={handleLoginClick} className="mobile-nav-link">Login</div>
        </div>
      </div>
     )
  }

  return (
    <div className="navbar">
      <div onClick={handleTitleClick} className="navbar-title">POCKET TRAINER</div>
     
      {/* Desktop navigation */}
      <div className="nav-links">
        <div onClick={handlePlans} className="nav-link">Available Plans</div>
        <div onClick={viewPlans} className="nav-link">My Plans</div>
        <div className="nav-link">Workout Logs</div>
        <div onClick={toggleDropdown} className="nav-link">{props.email}</div>
      </div>

      {/* Mobile hamburger menu */}
      <div className="mobile-hamburger" onClick={toggleMobileMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div onClick={handlePlans} className="mobile-nav-link">Available Plans</div>
        <div onClick={viewPlans} className="mobile-nav-link">My Plans</div>
        <div className="mobile-nav-link">Workout Logs</div>
        <div onClick={toggleDropdown} className="mobile-nav-link">{props.email}</div>
      </div>

      {isOpen && (
        <div className="logout-dropdown">
          <a onClick={handleLogout} className="logout-text">Logout</a>
        </div>
      )}
    </div> 
  )
}

export default NavBar;
