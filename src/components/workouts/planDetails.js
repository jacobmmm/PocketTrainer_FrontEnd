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
        { day:'1',src:'NA',name: 'Legs' },
        { day:'2',src:'NA',name: 'Chest' },
        { day:'3',src:'NA',name: 'Shoulders' },
        { day:'4',src:'NA',name: 'Back' },
        {day:'5',src:'NA',name: 'Arms'}
    ];

    const isolation4_splits = [
        { day:'1',src:'NA',name: 'Legs' },
        { day:'2',src:'NA',name: 'Shoulders' },
        { day:'3',src:'NA',name: 'Chest+Triceps' },
        { day:'4',src:'NA',name: 'Back+Biceps' }]

    const push_pull_legs = [
        { day:'1',src:'NA',name: 'Push (Chest, Shoulders, Triceps)' },
        { day:'2',src:'NA',name: 'Pull (Back, Biceps)' },
        { day:'3',src:'NA',name: 'Legs' },
        { day:'4',src:'NA',name: 'Rest' },
        { day:'5',src:'NA',name: 'Push (Chest, Shoulders, Triceps)' },
        { day:'6',src:'NA',name: 'Pull (Back, Biceps)' },
        { day:'7',src:'NA',name: 'Legs' }
    ];

    const full_body = [
        { day:'1',src:'NA',name: 'Full Body Workout A' },
        { day:'2',src:'NA',name: 'Rest' },
        { day:'3',src:'NA',name: 'Full Body Workout B' },
        { day:'4',src:'NA',name: 'Rest' },
        { day:'5',src:'NA',name: 'Full Body Workout C' },
        { day:'6',src:'NA',name: 'Rest' },
        { day:'7',src:'NA',name: 'Rest' }
    ];

    const upper_lower = [
        { day:'1',src:'NA',name: 'Upper Body' },
        { day:'2',src:'NA',name: 'Lower Body' },
        { day:'3',src:'NA',name: 'Rest' },
        { day:'4',src:'NA',name: 'Upper Body' },
        { day:'5',src:'NA',name: 'Lower Body' },
        { day:'6',src:'NA',name: 'Rest' },
        { day:'7',src:'NA',name: 'Rest' }
    ];

    // Function to render workout plan
    const renderWorkoutPlan = (workoutArray) => {
        return workoutArray.map((workout, index) => (
            // <div key={index} className="plan-item-style">
            <div key={index} className="plan-card">
                <span>
                    <img src={workout.src}  />
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