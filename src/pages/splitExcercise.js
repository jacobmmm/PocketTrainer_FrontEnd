import React from "react";
import TitleIcon from "../components/title/titleIcon"

import SplitDetails from "../components/workouts/splitDetails"

export default function SplitDetails() {


    return(
        <div className="hero-container">
           {/* <NavBar email={email} /> */}
           <TitleIcon email={email} navigation={navigation} />
         
           <SplitDetails email={email} plan={plan} />
        </div>
    )


}