import "../css/MusclePlans.css"
import NavBar from "../components/homepage/NavBar"
import MainImage from "../components/homepage/MainImage"
import MusclePlanOpt from "../components/muscleplan/musclePlanOpt"
import { useLocation } from 'react-router-dom';

export default function MusclePlan(){
    const location = useLocation();
    const { email } = location.state || {};
    console.log("Email in MusclePlan: ",email)
    return(
        <div className="muscle-plan-layout">
           <NavBar email={email} />
           <MainImage /> 
           <MusclePlanOpt email={email} /> 
        </div>

    )
}