// import {searchEmployees} from './util/API';
function EmployeeList(props){
    
    return(
        <div className="employee">
            <ul className='employee-list'>
                {props.results.map((employee)=>(
                    <div className="employee" key={employee.login.uuid}>
                        <img src={employee.picture.large} alt={employee.name.first}/>
                        <p>Name:{employee.name.first} {employee.name.last}</p>
                <p>Employee ID:{ employee.id.value}</p>
                <p>email:{employee.email}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default EmployeeList;