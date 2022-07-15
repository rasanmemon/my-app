import React, { useState, useEffect }  from "react";
import axios from "axios";
import "./login.css";
import {Navigate  } from "react-router-dom";

function LoginSys() {  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data,setData] = useState([]);
  
  const getData = (userName,passWord) => {
    axios
    .get('http://localhost:8080/users')
    .then((res) => {
      console.log(res);
      // setData(res.data);
      return res.data
      
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
  
    const userData = await getData(uname, pass);
    
    console.log('userData ==>',userData)
    // Find user login info
    //const userData = data.find((user) => user.Username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.Password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
        // Invalid password
      } else {        
        setIsSubmitted(true);
        localStorage.setItem('userAuthenticated',true)        
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
          <input type="text" name="uname" required  autoComplete="username"/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required  autoComplete="current-password" />
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
        {isSubmitted ? <Navigate replace to="/"></Navigate> : renderForm}
      </div>
    </div>
  );
}
export default LoginSys;