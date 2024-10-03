import React from 'react'
import ExcList from '../components/workouts/excerciseList'
import NavBar from '../components/homepage/NavBar'
import MainImage from '../components/homepage/MainImage'
export default function PlanExcercise() {
    return (
        <div>
           <NavBar />
           <MainImage />
           <ExcList />
        </div>
    )
}