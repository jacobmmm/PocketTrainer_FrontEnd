import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Registration from './pages/registration';

function App() {
  return (

    <div>
      <Router>
      <Routes>
      <Route index element={<Home />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Registration />} />
      
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
