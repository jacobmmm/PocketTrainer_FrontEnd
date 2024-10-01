import React from 'react'
import {useNavigate} from 'react-router-dom'



function NavBar() {

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '2px solid black',
        marginBottom: '20px',
        backgroundColor: 'black'
      };
    
      const titleStyle = {
        fontWeight: 'bold',
        fontSize: '24px',
        color: 'white',
        cursor: 'pointer'
      };
    
      const linkStyle = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '18px',
        cursor: 'pointer'
      };
      
      let navigate = useNavigate();

      function handleLoginClick(){
        console.log("Login clicked")
        navigate('/login'); 
      }

      function handleTitleClick(){
        console.log("Login clicked")
        navigate('/'); 
      }
    
  return (
    <div style={navStyle}>
      <div onClick={handleTitleClick} style={titleStyle}>POCKET TRAINER</div>
      <div onClick={handleLoginClick} style={linkStyle} >Login</div>
      
    </div>


  )
}

export default NavBar;
