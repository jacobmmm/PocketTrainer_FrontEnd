import React from 'react'
import workoutPlan from '../images/workout_plan.jpeg'
import logWorkout from '../images/log_workout.jpg'
import viewWorkout from '../images/view_workout.jpg'
import '../../css/HomeFeatures.css'


function HomeFeatures() {

  return (
    
    <div className="features-container">



      <div className="features-grid">
        <div className="feature-box">
          <img src={workoutPlan} alt="Set your workout plan" />
          <p className="feature-text">Plan Your Workouts</p>
        </div>
        <div className="feature-box">
          <img src={logWorkout} alt="Log Your Workout" />
          <p className="feature-text">Time to Work Out</p>
        </div>
        <div className="feature-box">
          <img src={viewWorkout} alt="View Your Workouts" />
          <p className="feature-text">Track Your Progress</p>
        </div>
      </div>
    </div>
  )
}

export default HomeFeatures
