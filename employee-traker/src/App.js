
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Employee from './Employee';
import Dashboard from './Dashboad';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
<Route path='/' component={Home}></Route>
<Route path='/dashboard' component={Dashboard}></Route>
<Route path='/employee' component={Employee}></Route>  
    </div>
    </Router>
  );
}

export default App;
