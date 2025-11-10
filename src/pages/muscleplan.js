import NavBar from "../components/homepage/NavBar"
import MainImage from "../components/homepage/MainImage"
import MusclePlanOpt from "../components/muscleplan/musclePlanOpt"
import TitleIcon from "../components/title/titleIcon"
import { useLocation } from 'react-router-dom';

export default function MusclePlan(){
    const location = useLocation();
    const { email } = location.state || {};
    console.log("Email in MusclePlan: ",email)
    return(
        <div className="hero-container">
            <TitleIcon email={email} />
           {/* <NavBar email={email} />
           <MainImage /> */}
           <MusclePlanOpt email={email} /> 
        </div>

    )
}