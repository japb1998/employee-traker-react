import EmployeeList from './EmployeeList';
import {
    Component
} from 'react';
import API from './util/API'
import Search from './Search';
class EmployeeContainer extends Component {
    state = {
        search: '',
        results: [],
        filtered: [],
        loading: true,
        notFound: false
    }

    componentDidMount() {
        this.searchEmployee('50');
    };

    //Calls the search method from the API folder
    searchEmployee = employee => {
        API.searchEmployees(employee)
            .then(res => {
                this.setState({
                    results: [...res.data.results],
                    filtered: [...res.data.results],
                    loading: false
                });
                console.log(this.state)
            })
            .catch(err => console.log(err));
    }


    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
        console.log([name], value)
    }
    searchEmployeeByName = (name) => {
        console.log({
            name
        });
        const newSearch = this.state.results.filter(employee => {
            console.log({
                employee
            });
            console.log(employee.name.first)
            const sortNames = employee.name.first.toLowerCase().includes(name.toLowerCase());
            console.log(sortNames);
            return sortNames
        })
        console.log(newSearch)
        if (newSearch) {
            this.setState({
                results: newSearch
            });
            // console.log(this.state.results)
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

          if (this.state.search === ''){
              return this.setState({
                  filtered: [...this.state.results],
              });
          }
        this.searchEmployeeByName(this.state.search);
    }
    render() {
            return ( <div className = "employee-container">
                    <Search search = { this.state.search } handleSubmit = {this.handleSubmit} handleInput = {this.handleInput }/> 
                    {this.state.loading && < div className = "loading" > Loading... </div> }
                     { this.state.notFound && <div className = "alert"> Not Employee Found </div> } 
                     {!this.filtered.length && <EmployeeList results = {this.state.filtered}/>} </div>)}
}
export default EmployeeContainer;