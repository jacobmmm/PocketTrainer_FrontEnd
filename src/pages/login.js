import NavBar from "../components/homepage/NavBar"
import LoginForm from "../components/login/loginForm"
import TitleIcon from "../components/title/titleIcon"
import "../css/HomePage.css"


export default function Login(props){
    return(
        <div className="hero-container">
            <TitleIcon props />
           
           <LoginForm /> 
        </div>

    )
}