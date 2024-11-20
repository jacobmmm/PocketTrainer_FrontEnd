// MuscleGroupModal.js
import React, { useState, useEffect } from 'react'
import '../../css/MuscleModal.css'


const MuscleGroupModal = ({ isOpen, onClose }) => {

  const [muscles, setMuscles] = useState([]);
  const [selectedMuscles, setSelectedMuscles] = useState({})


  const handleCheckboxChange = (muscleName,subMuscle) => {

    setSelectedMuscles((prevState) =>{

      const group = prevState[muscleName] || []

      if(group.includes(subMuscle)){

        console.log(subMuscle,"Already present unchecking")

        return{
          ...prevState,
          [muscleName]:group.filter((muscle) => muscle!=subMuscle)
        }
      }

      else{

        console.log("Adding ",subMuscle)

        return{
          ...prevState,
          [muscleName]:[...group,subMuscle]
        }

      }
    }
    
    )

  }

  const handleDoneClick = () => {
    console.log("Selected Muscles: ",selectedMuscles) // Pass data to parent or handle logic here
    onClose(); // Close the modal
  };

  useEffect(() => {
    // Function to fetch plans
    const fetchMuscles = async () => {
      try {
        const response = await fetch('https://p5l1fe42jf.execute-api.us-east-1.amazonaws.com/getMuscles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("API muscle Details: ", data.muscles);
        const muscleData = data.muscles
        setMuscles(muscleData)
        
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchMuscles();
  }, []); // Run only once on component mount

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Choose Your Muscle Groups</h2>
        <div className="groups-container">
          {muscles.map((muscleGroup,index) => {

            const[muscleName, subMuscles] = Object.entries(muscleGroup)[0];
            return(<div className="group-column" key={index}>
                   <h4 className="group-heading">{muscleName}</h4>
                   {subMuscles.map((subMuscle,subIndex) =>(
                    <label key={subIndex}>
                      <input type="checkbox" onChange={() => handleCheckboxChange(muscleName,subMuscle)} />{subMuscle}</label>
                   ))}
                  </div>
              
              
              
              
              )

            } )}
        </div>
        <button className="done-button" onClick={handleDoneClick}>DONE</button>
      </div>
    </div>
  );
};

export default MuscleGroupModal;
