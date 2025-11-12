import NavBar from "../components/homepage/NavBar"
import MainImage from "../components/homepage/MainImage"
import RegisteredPlans from "../components/registeredplans/registeredPlans";
import TitleIcon from "../components/title/titleIcon"
import { useLocation } from 'react-router-dom';


export default function UserPlans(){

    const location = useLocation();
    const { email,navigation } = location.state || {};
    console.log("Email in UserPlan: ",email)
    console.log("Navigation in UserPlan: ",navigation)
    return(
        <div className="hero-container">
            <TitleIcon email={email} navigation={navigation} />
           {/* <NavBar email={email} />
           <MainImage /> */}
           <RegisteredPlans email={email} /> 
        </div>

    )


}