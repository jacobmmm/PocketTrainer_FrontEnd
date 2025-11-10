import NavBar from "../components/homepage/NavBar"
import MainImage from "../components/homepage/MainImage"
import RegisteredPlans from "../components/registeredplans/registeredPlans";
import TitleIcon from "../components/title/titleIcon"
import { useLocation } from 'react-router-dom';


export default function UserPlans(){

    const location = useLocation();
    const { email } = location.state || {};
    console.log("Email in UserPlan: ",email)
    return(
        <div className="hero-container">
            <TitleIcon email={email} />
           {/* <NavBar email={email} />
           <MainImage /> */}
           <RegisteredPlans email={email} /> 
        </div>

    )


}