import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./MainPage";

import "./login.css";
import Home from "./Home";
import { BrowserRouter as Router,Route, Routes, useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
  
function LoginSys() {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
        // Invalid password
      } else {
        // setIsSubmitted(true);
       ReactDOM.createRoot(document.getElementById('root')).render(<MainPage />)
        
        
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
    <div >
      <div >
        <div className="title">Sign In</div>
        { renderForm}
      </div>
    </div>

    

  );
}

export default LoginSys;