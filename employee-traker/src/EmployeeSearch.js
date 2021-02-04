import EmployeeList from './EmployeeList';
import { Component } from 'react';
import API from './util/API'
import Search from './Search';
class EmployeeContainer extends Component {
state = {
    search:'',
    results:[],
    loading:true,
}

componentDidMount() {
    this.searchEmployee('50');
    this.state.loading = false; 
  };

  //Calls the search method from the API folder
  searchEmployee = employee => {
    API.searchEmployees(employee)
    .then(res =>{ this.setState({ results: res.data.results });
    this.state.loading = false; 
})
    .catch(err => console.log(err));
  }


  handleInput =(event)=>{
     const name = event.target.name;
     consrt value = event.target.value;

this.setState({
    [name] :value 
})
console.log([name],value)
  }
searchEmployeeByName = (name) =>{
    let newSearch = this.state.results.filter(employee=> employee.name.first === name);
    console.log(newSearch)
    if(newSearch){
        
this.setState({results: newSearch});
console.log(this.state.results)}
}
  handleSubmit =(e)=>{
      e.preventDefault();
      this.searchEmployeeByName(this.state.search);
  }
    render(){
        return (
            <div className="employee-container">
            <Search search={this.state.search} handleSubmit={this.handleSubmit} handleInput={this.handleInput}/>
            {this.state.loading && <div className="loading">Loading...</div> }
            {this.results !== [] && <EmployeeList results={this.state.results}/>}
            </div>
        )
    }
}
export default EmployeeContainer ;