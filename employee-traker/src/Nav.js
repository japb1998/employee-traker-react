import {Link,useLocation} from 'react-router-dom';
function Nav () {
    const location = useLocation();
    return (
    <div className="nav-bar">
        <ul>
        <li className="nav-item">
        <Link to="/" >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard" >
         Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/employee" >
          Employee
        </Link>
      </li>
           
        </ul>
    </div>
    );

}
export default Nav;