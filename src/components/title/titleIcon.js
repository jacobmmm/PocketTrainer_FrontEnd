import React from 'react';
import logo from "../images/pocket_trainer_logo_2.0.png";
import loginIcon from "../images/login-icon-2.0.png";
import { useNavigate } from 'react-router-dom';

function TitleIcon  (props)  {
    const navigate = useNavigate();

    console.log("TitleIcon props email:", props.email);

    const handleTitleClick = () => {
        console.log("Title clicked");
        navigate('/', { state: { email: props.email } });
    };

    const handleLogin = () => {
        console.log("Login button clicked");
        navigate('/login');
    };

    function viewPlans(){
        
        navigate('/myplans',{ state: { email: props.email } }); 
      }

      function handlePlans(){
        console.log("Available Plans clicked")
        navigate('/muscleplan',{ state: { email: props.email } }); 
      }

      function toggleDropdown(){
        //console.log("isOpen is, ",isOpen)
        //setIsOpen(!isOpen); 
      }

      function handleLogout(){
        //console.log("isOpen is, ",isOpen)
        
        navigate('/');
      }

    return (
        <>
            {props.email && (
                <nav className="navbar">
                    <div className="navbar-left">
                        <img src={logo} alt="Fitness Club Logo" className="logo" />
                        <span onClick={handleTitleClick} className="app-name">POCKET TRAINER</span>
                    </div>
                   
                    <ul className="navbar-menu">
                      <li className="active">HOME</li>
                      <li>AVAILABLE PLANS</li>
                      <li>MY PLANS</li>
                      <li>WORKOUT LOGS</li>
                    
                    </ul>
                    <div className="navbar-icons">
                        {/* <span className="icon">🔍</span>
                        <span className="icon">🛒</span> */}
                        <button className="login-btn">
                            <img src={loginIcon} alt="Login" className="login-icon" />
                        </button>
                    </div>
                </nav>
            )}
            
            {!props.email && (
                <nav className="navbar">
                    <div className="navbar-left">
                        <img src={logo} alt="Fitness Club Logo" className="logo" />
                        <span onClick={handleTitleClick} className="app-name">POCKET TRAINER</span>
                    </div>
                    <div className="navbar-icons">
                        {/* <span className="icon">🔍</span>
                        <span className="icon">🛒</span> */}
                        <button className="login-btn">
                            <img src={loginIcon} alt="Login" onClick={handleLogin} className="login-icon" />
                        </button>
                    </div>
                </nav>
            )}
        </>
    );
}

export default TitleIcon;