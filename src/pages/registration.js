import NavBar from "../components/homepage/NavBar"
import RegistrationForm from "../components/registration/registrationForm"
import TitleIcon from "../components/title/titleIcon"
import "../css/HomePage.css"

export default function Registration(){
    return(
        <div className="hero-container">
           {/* <NavBar /> */}
           <TitleIcon props />
           <RegistrationForm/> 
        </div>

    )
}