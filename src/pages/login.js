import NavBar from "../components/homepage/NavBar"
import LoginForm from "../components/login/loginForm"
import TitleIcon from "../components/title/titleIcon"
import "../css/HomePage.css"


export default function Login(props){
    console.log("in Login page: ")
    return(
        <div className="hero-container">
            <TitleIcon  />
           
           <LoginForm /> 
        </div>

    )
}