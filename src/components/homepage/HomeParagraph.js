import React from 'react'

function HomeParagraph() {

  const paraStyle = {
    textAlign: 'center',
    marginTop: '20px', 
    marginLeft: 'clamp(15px, 5vw, 70px)',
    marginRight: 'clamp(15px, 5vw, 70px)',
    padding: '0 20px'
  };

  const headingStyle = {
    fontSize: 'clamp(24px, 4vw, 32px)',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    fontSize: 'clamp(14px, 2.5vw, 16px)',
    lineHeight: '1.6',
    marginBottom: '20px'
  };

  return (
    <div style={paraStyle}>
      <p style={paragraphStyle}>
        Pocket Trainer as the name suggests is meant to be like your personal 
        trainer that you can access out of your pocket. This website is aimed 
        at providing you workout excercises based on the speicific muscle group you
        want to target. You also get to select the type of workout split that you
        would like to follow. We hope that our customers develop some expertise in 
        terms of muscle building.
      </p>

      <h2 style={headingStyle}>FEATURES:</h2>
    </div>
  )
}

export default HomeParagraph