import NavBar from "../components/homepage/NavBar"
import MainImage from "../components/homepage/MainImage"
import RegisteredPlans from "../components/registeredplans/registeredPlans";
import { useLocation } from 'react-router-dom';


export default function UserPlans(){

    const location = useLocation();
    const { email } = location.state || {};
    console.log("Email in UserPlan: ",email)
    return(
        <div>
           <NavBar email={email} />
           <MainImage />
           <RegisteredPlans email={email} /> 
        </div>

    )


}