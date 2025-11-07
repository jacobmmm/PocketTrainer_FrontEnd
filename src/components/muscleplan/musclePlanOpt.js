import "../../css/MusclePlans.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GymWallpaper1 from './GymWallpaper1.webp'
import MuscleGroupModal from "../modal/musclesModal";
import {useNavigate} from 'react-router-dom'

export default  function MusclePlanOpt(props) {

    console.log("Email in Plans page: ",props.email)

    let navigate = useNavigate();

    const userEmail = props.email

    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setModalOpen] = useState(false);

     const imageStyle = {
    textAlign: 'center', // Center the image horizontally
    marginTop: '20px', 
    };

    
    
    useEffect(() => {
      // Function to fetch plans
      const fetchPlans = async () => {
        try {
          const response = await fetch('https://4k4zv69rzi.execute-api.ap-southeast-2.amazonaws.com/workoutPlans');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log("API muscle plans: ", data.plans);
          const plansAlt = data.plans.map(planName => ({ name: planName }));
          setPlans(plansAlt); // Update state with the fetched plans
          setLoading(false); // Update loading status
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          setLoading(false); // Update loading status in case of error
        }
      };
  
      fetchPlans();
    }, []); // Run only once on component mount

    useEffect(() => {
      console.log("selected Plan inside Hook: ", selectedPlan);
      
    }, [selectedPlan]);
  
    // Render loading text while data is loading
    if (loading) {
      return <div>Loading...</div>;
    }

    const handleSelectPlan = (planName) => {
      console.log("Inside HANDLE SELECT PLAN")
      console.log("Selected Plan, ",planName)
      setSelectedPlan(planName);
      setModalOpen(true);
      
    }

    const handleCloseModal = () => {

      setModalOpen(false);
      console.log("Upon closing modal: ",isModalOpen)
      navigate('/myplans',{ state: { email: props.email } });
      
    }

    return(

      <div className="container-style">
          
      <h1 className="title-style">MUSCLE BUILDING PLANS</h1>
      
      <div>
      <p> {plans.map((plan, index) => (
        <div key={index} className="plan-item-style">
          <div className="plan-name-container">
            <div className="arrow-style"></div>
            <span>{plan.name}</span>
          </div>
          <span><button onClick={() => handleSelectPlan(plan.name)}>Select Plan</button></span>
          
        </div>
      ))} </p>
      <MuscleGroupModal isOpen={isModalOpen} onClose={handleCloseModal} userEmail={userEmail} planName={selectedPlan} />
      </div>
      </div>
    


    )

}