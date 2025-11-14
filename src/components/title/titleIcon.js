import {React, useState, useEffect, useRef} from 'react';
import logo from "../images/pocket_trainer_logo_2.0.png";
import loginIcon from "../images/login-icon-2.0.png";
import profileIcon from "../images/profileIcon.png";
import { useNavigate, useLocation } from 'react-router-dom';

function TitleIcon  (props)  {
    console.log("Inside TitleIcon component");
    
    const navigate = useNavigate();
    const location = useLocation();
    const isInitialMount = useRef(true);
 
    const [navOpt,setNavOpts] = useState(() => {
        const savedNav = localStorage.getItem('myComponentData');
        return savedNav ? JSON.parse(savedNav) : 'HOME';
      });

    const [isOpen, setIsOpen] = useState(false);

    // Route mapping: maps navigation option to route path
    const routeMap = {
        'HOME': '/',
        'AVAILABLE PLANS': '/muscleplan',
        'MY PLANS': '/myplans',
        'WORKOUT LOGS': '/workout-logs' // Add your workout logs route here
    };

   

    console.log("TitleIcon props email:", props.email);

    // Dynamic navigation function
    const handleNavigation = async (navOption) => {
        setNavOpts(navOption)
        //route=routeMap[navOption] || '/'; // Default to home if not found
        

    }
    // const handleNavigation = async (navOption) => {
    //     const route = routeMap[navOption] || '/'; // Default to home if not found
    //     console.log(`Navigating to ${navOption}: ${route}`);
    //     localStorage.setItem('myComponentData', JSON.stringify(navOption));
    //     //;
    //     navigate(route, { state: { email: props.email, navigation: navOption } });
    // };

    const handleTitleClick = () => {
        console.log("Title clicked");
        handleNavigation('HOME');
    };

    const handleLogin = () => {
        console.log("Login button clicked");
        navigate('/login');
    };

    function viewPlans(){
        console.log("My Plans clicked");
        const navValue = document.getElementById("my-plans")?.getAttribute("data-value") || "MY PLANS";
        handleNavigation(navValue);
    }

    function handlePlans(){
        console.log("Available Plans clicked");
        const navValue = document.getElementById("available-plans")?.getAttribute("data-value") || "AVAILABLE PLANS";
        handleNavigation(navValue);
    }

      function toggleDropdown(){
        console.log("isOpen is, ",isOpen)
        setIsOpen(!isOpen); 
      }

      function handleLogout(){
        //console.log("isOpen is, ",isOpen)
        
        navigate('/');
      }

      useEffect(() => {
        console.log("navigationOption changed to, ",navOpt);
        localStorage.setItem('myComponentData', JSON.stringify(navOpt));
        
        // Don't navigate on initial mount or if we're on login/signup pages
        const currentPath = location.pathname;
        const protectedRoutes = ['/login', '/signup'];
        
        if (isInitialMount.current) {
            isInitialMount.current = false;
            // On initial mount, only navigate if we're not on a protected route
            if (!protectedRoutes.includes(currentPath)) {
                let route = routeMap[navOpt] || '/';
                console.log(`Initial mount - Navigating to ${navOpt}: ${route}`);
                navigate(route, { state: { email: props.email, navigation: navOpt } });
            }
            return;
        }
        
        // On subsequent navOpt changes, navigate (but not from login/signup pages)
        if (!protectedRoutes.includes(currentPath)) {
            let route = routeMap[navOpt] || '/';
            console.log(`Navigating to ${navOpt}: ${route} in useEffect hook`);
            navigate(route, { state: { email: props.email, navigation: navOpt } });
        }
        
      }, [navOpt, location.pathname]);

    return (
        <>
            {props.email && (
                <nav className="navbar">
                    <div className="navbar-left">
                        <img src={logo} alt="Fitness Club Logo" className="logo" />
                        <span onClick={handleTitleClick} className="app-name">POCKET TRAINER</span>
                    </div>
                   
                    <ul className="navbar-menu">
                      {navOpt==="HOME" ? (<li id="home" className="active" onClick={handleTitleClick} data-value="HOME">HOME</li>):(<li id="home" onClick={handleTitleClick}  data-value="HOME">HOME</li>)}  
                      {navOpt==="AVAILABLE PLANS" ? (<li id="available-plans" className="active" onClick={handlePlans} data-value="AVAILABLE PLANS">AVAILABLE PLANS</li>):(<li id="available-plans" onClick={handlePlans} data-value="AVAILABLE PLANS">AVAILABLE PLANS</li>)}
                      {navOpt==="MY PLANS" ? (<li id="my-plans" className="active" onClick={viewPlans} data-value="MY PLANS">MY PLANS</li>):(<li id="my-plans" onClick={viewPlans} data-value="MY PLANS">MY PLANS</li>)}
                      
                      <li id="workout-logs" data-value="WORKOUT LOGS">WORKOUT LOGS</li>
                    
                    </ul>
                    <div className="navbar-icons">
                        {/* <span className="icon">🔍</span>
                        <span className="icon">🛒</span> */}
                        <button className="login-btn">
                            <img src={profileIcon} onClick={toggleDropdown} alt="Login" className="login-icon" />
                        </button>
                        {isOpen && (
        <div className="logout-style">
          <a className="logout-text" > {props.email}</a>  
          <a onClick={handleLogout} className="logout-text">Logout</a>
        </div>
      )}
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