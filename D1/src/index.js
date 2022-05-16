import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// let currDate =  new Date().toDateString()
// let currTime =  new Date().toTimeString()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  /*
<>
<h1>Kapil Jadon</h1>
<h2> Today's date = {currDate} </h2>
<h2>Today's time = {currTime} </h2>
</>,
*/

  document.getElementById('root')
);

              //  How we create web by using JS
  // ---------------------------------------------------------------------------------------
/*let h1 = document.createElement("h1");
h1.innerText = "It is showing by the use of JavaScript"
document.getElementById('root').appendChild(h1)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
