import React from 'react'
import GymWallpaper1 from './GymWallpaper1.webp'

function MainImage() {

  const imageStyle = {
    textAlign: 'center', // Center the image horizontally
    marginTop: '20px', 
  };
  return (
    <div style={imageStyle}>
    <img src={GymWallpaper1} alt="GymWallpaper" />
    </div>
  )
}

export default MainImage