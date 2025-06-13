import React from 'react'
import PlanDetails from '../components/workouts/planDetails'
import NavBar from '../components/homepage/NavBar'
import MainImage from '../components/homepage/MainImage'
import { useLocation } from "react-router-dom";

export default function PlanExcercise() {
    const location = useLocation();
    const { email } = location.state || {};
    return (
        <div>
           <NavBar email={email} />
           <MainImage />
           <PlanDetails email={email} />
        </div>
    )
}