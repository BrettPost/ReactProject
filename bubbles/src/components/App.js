
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">   
        <Navbar />
        
      </div>
    </Router>
    
  );
}

export default App;
