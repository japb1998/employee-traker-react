import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=10';

 function getEmployees() {
    axios.get(URL).then((res)=>{
        console.log(res.data)
    });
        };
        getEmployees();
export default {
    searchEmployees: function () {
axios.get(URL);
    }
}