// import {searchEmployees} from './util/API';
function EmployeeList(props){
    
    return(
        <div className="employee">
            <ul className='employee-list'>
                {props.results.map((employee)=>(
                    <li className="employee-item"  key={employee.login.uuid}>
                    <div key={employee.login.uuid}>
                        <img src={employee.picture.large} alt={employee.name.first.toLowerCase()}/>
                        <p>Name:{employee.name.first.toLowerCase()} {employee.name.last}</p>
                <p>Employee ID:{ employee.id.value}</p>
                <p>email:{employee.email}</p>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList;