import "../../css/MusclePlans.css"
import React from 'react';
import { Link } from 'react-router-dom';

export default function MusclePlanOpt() {

    const plans = [
        { name: 'ISOLATION(5 days)' },
        { name: 'ISOLATION(4 days)' },
        { name: 'PUSH/PULL' },
        { name: 'FULL BODY' },
      ];

    return(

        <div className="container-style">
      <h1 className="title-style">MUSCLE BUILDING PLANS</h1>
      
      <div>
      <p> {plans.map((plan, index) => (
        <div key={index} className="plan-item-style">
          <div className="arrow-style"></div>
          <span>{plan.name}</span>
        </div>
      ))} </p>
      </div>
      </div>
    


    )

}