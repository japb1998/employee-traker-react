
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Search';
import Dashboard from './Dashboad';
import EmployeeSearch from './EmployeeSearch';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
<Route exact path='/' component={Home}></Route>
<Route path='/dashboard' component={Dashboard}></Route>
<Route path='/employee' component={EmployeeSearch}></Route>  
    </div>
    </Router>
  );
}

export default App;
