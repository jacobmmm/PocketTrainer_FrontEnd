import NavBar from "../components/homepage/NavBar"
import MainImage from "../components/homepage/MainImage"
import MusclePlanOpt from "../components/muscleplan/musclePlanOpt"
import TitleIcon from "../components/title/titleIcon"
import { useLocation } from 'react-router-dom';

export default function MusclePlan(){
    const location = useLocation();
    const { email, navigation } = location.state || {};
    console.log("Email in MusclePlan: ",email)
    console.log("Navigation in MusclePlan: ",navigation)
    return(
        <div className="hero-container">
            <TitleIcon email={email} navigation={navigation} />
           {/* <NavBar email={email} />
           <MainImage /> */}
           <MusclePlanOpt email={email} /> 
        </div>

    )
}