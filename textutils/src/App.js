import './App.css';
import React, { useState } from 'react'
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "primary");
      // document.title = 'TextUtils - Home';
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - dfgdfg Mode';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path ="/">
              <TextForm heading = "Enter a text to analyze" mode = {mode} showAlert = {showAlert}/>
            </Route>
          </Switch> */}
        </div>
        <TextForm heading = "Enter a text to analyze" mode = {mode} showAlert = {showAlert}/>
      {/* </Router> */}
      
    </>
  );
}

export default App;
