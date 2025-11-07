import React from 'react'
import GymWallpaper1 from '../muscleplan/GymWallpaper1.webp'

function MainImage() {

  const imageStyle = {
    textAlign: 'center',
    marginTop: 'clamp(10px, 8vw, 60px)',
    padding: '0 20px'
  };

  return (
    <div style={imageStyle}>
     <img src={GymWallpaper1} alt="GymWallpaper" style={{maxWidth: '100%', height: 'auto'}} /> 
    </div>
  )
}

export default MainImage