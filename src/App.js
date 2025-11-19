import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import PocketHomePage from './components/homepage/homepage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Registration from './pages/registration';
import MusclePlan from './pages/muscleplan';
import PlanExcercise from './pages/planExcercise';
import UserPlans from './pages/userPlans';
import SplitDetails from './components/workouts/splitDetails';


function App() {
  return (

    <div>
      <Router>
      <Routes>
      <Route index element={<PocketHomePage />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Registration />} />
      <Route path="/muscleplan" element={<MusclePlan/>} />
      <Route path="/muscleplan/excercises" element={<PlanExcercise />} />
      <Route path="/myplans" element={<UserPlans />} />
      <Route path="/viewplan" element={<PlanExcercise />} />
      <Route path="/viewSplit" element={<SplitDetails />} />
      
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
