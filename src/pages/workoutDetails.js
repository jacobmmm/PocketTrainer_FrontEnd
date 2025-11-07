import NavBar from "../components/homepage/NavBar";
import MainImage from "../components/homepage/MainImage";
import { useLocation } from 'react-router-dom';
import "../css/userPlans.css";

export default function WorkoutDetails() {
    const location = useLocation();
    
    // Get data from navigation state
    const workoutName = location.state?.workoutName || "No Workout Selected";
    const planName = location.state?.planName || "No Plan";
    const email = location.state?.email || null;

    console.log("Workout Details - Workout:", workoutName);
    console.log("Workout Details - Plan:", planName);
    console.log("Workout Details - Email:", email);

    return (
        <div className="user-plans-layout">
            <NavBar email={email} />
            <MainImage />
            <div className="container-style">
                <h1 className="title-style">{workoutName}</h1>
                <p>From Plan: <strong>{planName}</strong></p>
                
                {/* Placeholder for workout exercises - you can expand this */}
                <div style={{ marginTop: '2rem' }}>
                    <h3>Workout Exercises</h3>
                    <p>This is where you can add the specific exercises for "{workoutName}"</p>
                    <p>You can fetch exercise data from your API or add static exercise content here.</p>
                </div>
            </div>
        </div>
    );
} 