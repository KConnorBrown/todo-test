import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const axios = require('axios')

let BASE_URL = 'http://localhost:8000/api'
let TOKEN = 'dvOYEE2i06Vn2IjyxYnurVZMLcAVzGmZgfRaaJeOusQf74pBONNoQSdPDGMX8zbR'
/*TODO: curl -X POST -u user1:P@ssw0rd1 http://localhost:8080/api/auth/login
and store the token as part of the build ??*/
function getLists() {
  axios.get(BASE_URL+'/lists', {
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  }).then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

getLists();




// const db = require('./DB');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// db.init();
// // db.init().then(() => {

// // });


/*
to get the lists
curl -H "Authorization: Bearer tinUV6T0mcShygSsZwosJKtNdt8qAUZVRf8CwumOXJBjHFv-Xza-ymjHhavSDdT5" http://localhost:8080/api/lists
*/
