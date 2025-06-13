import "../../css/userPlans.css"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


export default function RegisteredPlans(props) {

  let navigate = useNavigate();

  console.log("Email in Registered Plans: ",props.email)
  const userEmail = props.email
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("Inside Registered Plans component");

  const viewPlan = (plan) => {
    console.log("Viewing plan: ", plan);
    navigate('/viewplan',{ state: { plan: plan, email:props.email} });
    // Here you can add logic to navigate to the plan details page or perform any other action
  }

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`https://w47btzd5u9.execute-api.us-east-1.amazonaws.com/userplans/${userEmail}`);
        if (response.ok) {
          const data = await response.json();
          console.log("Plans data fetched: ", data);
          setPlans(data.plans);
        } else {
          console.error('Failed to fetch plans');
        }
      } catch (error) {
        console.error('Error fetching plans:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchPlans();
    }
  },[]);

  useEffect(() => { 
    console.log("Plans fetched: ", plans);
    console.log("Plans length: ", plans.length);
  }, [plans]);


  return(
    // 
      <div className="container-style">
      <h1 className="title-style">MY PLANS</h1>
      
      {loading ? (
        <p>Loading your plans...</p>
      ) : plans.length > 0 ? (
        <div className="plans-container">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <h3>{plan}</h3>
              
              <button className="view-plan-btn" onClick={() => viewPlan(plan) }>View Plan</button>
              
              
            </div>
           
            
          ))}
          
        </div>
      ) : (
        <p className="no-plans-message">
          You don't seem to have selected a plan yet. We highly suggest that you choose atleast <Link to="/muscleplan">one</Link>.
        </p>
      )}
    </div>
  )
}