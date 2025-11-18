import React from 'react'
import PlanDetails from '../components/workouts/planDetails'
import TitleIcon from '../components/title/titleIcon'
import NavBar from '../components/homepage/NavBar'
//import MainImage from '../components/homepage/MainImage'
import { useLocation } from "react-router-dom";

export default function PlanExcercise() {
    const location = useLocation();
    console.log("Full location.state in planExcercise: ", location.state);
    const { email, navigation, plan } = location.state || {};
    console.log("Plan in planExcercise: ", plan);
    console.log("Email in planExcercise: ", email);
    return (
        <div className="hero-container">
           {/* <NavBar email={email} /> */}
           <TitleIcon email={email} navigation={navigation} />
         
           <PlanDetails email={email} plan={plan} />
        </div>
    )
}