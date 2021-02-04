import axios from 'axios';
// const axios = require('axios');

const URL = 'https://randomuser.me/api/?results=';

//  function getEmployees() {
//     axios.get(URL).then((res)=>{
//         console.log(res.data.results);

//     });
//         };
//         // getEmployees();
export default {
    searchEmployees: function (arg) {
    let newUrl = URL+arg
return axios.get(newUrl);

    }
}