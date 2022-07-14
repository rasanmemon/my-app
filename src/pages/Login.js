import React, { useState, useEffect }  from "react";
import ReactDOM  from "react-dom/client";
import MainPage from "./MainPage";
import axios from "axios";
import "./login.css";
import Home from "./Home";
import { BrowserRouter ,Route, Routes, useNavigate ,Navigate ,Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import Routering from "../config/routing";
  
function LoginSys() {  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data,setData] = useState([]);
  
  const getData = () => {
    axios
    .get('http://localhost:8080/users')
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect( () => {
    if(data && data.length === 0){
      getData();
    }
  },[]);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = data.find((user) => user.Username === uname.value);

    // Compare user info
    if (userData) {
      console.log('userData',userData)
      if (userData.Password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
        // Invalid password
      } else {        
        setIsSubmitted(true);
        localStorage.setItem('userAuthenticated',true)
        // <Navigate  from="/" to="/home" />
    //     <Routes>
    //   <Route path="/Home">
    //     <Home />
    //   </Route>
    //   <Navigate  from="/" to="/Home" />
    // </Routes>
        
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  
  );
  

  return (    
    <div>
      <div >
        <div className="title">Sign In</div>
        {isSubmitted ? <Navigate replace to="/home"></Navigate> : renderForm}
      </div>
    </div>

    

  );
}

export default LoginSys;