// MuscleGroupModal.js
import React, { useState, useEffect } from 'react'
import '../../css/MuscleModal.css'


const MuscleGroupModal = ({ isOpen, onClose, userEmail, planName }) => {

  const [muscles, setMuscles] = useState([]);
  const [selectedMuscles, setSelectedMuscles] = useState({})

  console.log("Username in MuscleModal: ",userEmail)
  console.log("Plan You have selected: ",planName)


  const handleCheckboxChange = (muscleName,subMuscle) => {

    setSelectedMuscles((prevState) =>{

      const group = prevState[muscleName] || []

      if(group.includes(subMuscle)){

        console.log(subMuscle,"Already present unchecking")

        return{
          ...prevState,
          [muscleName]:group.filter((muscle) => muscle!==subMuscle)
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

  const handleDoneClick = async() => {
    console.log("Selected Muscles: ",selectedMuscles) // Pass data to parent or handle logic here
    let username = userEmail;
    let muscle_plan_name = planName;
    let submuscles = selectedMuscles

    if(submuscles)
    {
    try {
      const response = await fetch('https://w47btzd5u9.execute-api.us-east-1.amazonaws.com/linkUserPlanSubmuscle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          muscle_plan_name,
          submuscles,
        })
      });

      //console.log("Response from API: ",response)
  
      if (response.ok) {
        
        console.log('Success:', response);
        // Handle actions after successful registration like redirecting to a login page or showing a success message
      } else {
        throw new Error('Failed to register');
      }
    } catch (error) {
      console.error('Error:', error);
    }  
    }
    console.log("resetting selected muscles and submuscles")
    setSelectedMuscles([])
    onClose(); // Close the modal
  };

  useEffect(() => {
    // Function to fetch plans
    const fetchMuscles = async () => {
      try {
        const response = await fetch('https://w47btzd5u9.execute-api.us-east-1.amazonaws.com/getMuscles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("API Data: ", data)
        console.log("API muscle Details: ", data.muscleDet);
        let muscleData = data.muscleDet
        console.log("Muscle Data: ",muscleData)
        setMuscles(muscleData)
        console.log("Muscles: ",muscles)
        
        
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchMuscles();
  },{}); // Run only once on component mount

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Choose Your Muscle Groups</h2>
        <div className="groups-container">
          {
          muscles.map((muscleGroup,index) => {
            console.log("muscleGroup: ",muscleGroup)
            console.log("index: ",index)
            const[muscleName, subMuscles] = Object.entries(muscleGroup)[0];
            
            console.log("subMuscles of muscleGroup: ",subMuscles)
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
