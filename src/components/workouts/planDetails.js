import "../../css/MusclePlans.css"
import "../../css/userPlans.css"
import { useLocation } from "react-router-dom";

export default function PlanDetails() {
    const location = useLocation();
    // Try to get plan from location.state
    const plan = location.state?.plan || "No Plan Selected";
    const planLower = String(plan).toLowerCase();

    console.log("Plan Lower in PlanDetails: ", planLower);
    console.log(planLower.includes('isolation'));
    console.log(planLower.includes('4 day'));

    const isolation5_splits = [
        { day:'1',name: 'Legs' },
        { day:'2',name: 'Chest' },
        { day:'3',name: 'Shoulders' },
        { day:'4',name: 'Back' },
        {day:'5',name: 'Arms'}
    ];

    const isolation4_splits = [
        { day:'1',name: 'Legs' },
        { day:'2',name: 'Shoulders' },
        { day:'3',name: 'Chest+Triceps' },
        { day:'4',name: 'Back+Biceps' }]

    const push_pull_legs = [
        { day:'1',name: 'Push' },
        { day:'2',name: 'Pull' },
        { day:'3',name: 'Legs' },
        { day:'4',name: 'Rest' },
        { day:'5',name: 'Push' },
        { day:'6',name: 'Pull' },
        { day:'7',name: 'Legs' }
    ];

    const full_body = [
        { day:'1',name: 'Full Body' },
        { day:'2',name: 'Rest' },
        { day:'3',name: 'Full Body' },
        { day:'4',name: 'Rest' },
        { day:'5',name: 'Full Body' },
        { day:'6',name: 'Rest' },
        { day:'7',name: 'Rest' }
    ];

    const upper_lower = [
        { day:'1',name: 'Upper Body' },
        { day:'2',name: 'Lower Body' },
        { day:'3',name: 'Rest' },
        { day:'4',name: 'Upper Body' },
        { day:'5',name: 'Lower Body' },
        { day:'6',name: 'Rest' },
        { day:'7',name: 'Rest' }
    ];

    // Function to render workout plan
    const renderWorkoutPlan = (workoutArray) => {
        return workoutArray.map((workout, index) => (
            // <div key={index} className="plan-item-style">
            <div key={index} className="plan-card">
                <span>
                    
                    Day {workout.day}: {workout.name}
                </span>
                <br/>
            </div>
        ));
    };

    // Conditional rendering based on plan value
    let planContent;
    if (planLower.includes('isolation') && (planLower.includes('5 split') || planLower.includes('5-split') || planLower.includes('5 day'))) {
        planContent = (
            <div> 
                {/* <h3>5-Day Isolation Split</h3> */}
                <p>This plan focuses on one muscle group per day for maximum isolation and recovery.</p>
                {renderWorkoutPlan(isolation5_splits)}
            </div>
        );
    } 
    
    else if (planLower.includes('isolation') && (planLower.includes('4 split')  || planLower.includes('4-split') || planLower.includes('4 day'))) {
        planContent = (
            <div>
                {/* <h3>4-Day Isolation Split</h3> */}
                <p>This plan focuses on two muscle groups towards the last two days, allowing for more volume and recovery.</p>
                {renderWorkoutPlan(isolation4_splits)}
            </div>
        );
    }
    
    
    
    else if (planLower.includes('push pull') || planLower.includes('push-pull') || planLower.includes('ppl')) {
        planContent = (
            <div>
                {/* <h3>Push Pull Legs (PPL)</h3> */}
                <p>This plan groups exercises by movement patterns for efficient training.</p>
                {renderWorkoutPlan(push_pull_legs)}
            </div>
        );
    } else if (planLower.includes('full body') || planLower.includes('fullbody')) {
        planContent = (
            <div>
                {/* <h3>Full Body Workout</h3> */}
                <p>This plan works all major muscle groups in each session, perfect for beginners.</p>
                {renderWorkoutPlan(full_body)}
            </div>
        );
    } else if (planLower.includes('upper lower') || planLower.includes('upper-lower')) {
        planContent = (
            <div>
                {/* <h3>Upper Lower Split</h3> */}
                <p>This plan alternates between upper and lower body workouts.</p>
                {renderWorkoutPlan(upper_lower)}
            </div>
        );
    } else {
        // Default case - show the original isolation plan
        planContent = (
            <div>
                {/* <h3>Default Workout Plan</h3> */}
                <p>Here's your personalized workout schedule:</p>
                {renderWorkoutPlan(isolation5_splits)}
            </div>
        );
    }

    return(
        <div className="container-style">
            <h2 className="title-style">{plan}</h2>
            {planContent}
        </div>
    )
}