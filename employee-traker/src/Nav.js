import {Link,useLocation} from 'react-router-dom';
function Nav () {
    const location = useLocation();
    return (
    <div className="nav-bar">
        <ul>
        <li className="nav-item">
        <Link to="/" className={location.pathname === "/" }>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard" className={location.pathname === "/dashboard"}>
         Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/employee" className={location.pathname === "/employee"}>
          Employee
        </Link>
      </li>
           
        </ul>
    </div>
    );

}
export default Nav;