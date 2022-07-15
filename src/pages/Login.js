import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import { Navigate,useNavigate  } from "react-router-dom";

function LoginSys() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()


  const getData = async (userName, passWord) => {
    let data = {}
    await axios.get('http://localhost:8080/users', userName, passWord
    )
      .then((res) => {
        data = res.data

      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  }

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    let userData = await getData(uname.value, pass.value)

    // Compare user info
    if (userData) {
      if (userData.Password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
        // Invalid password
      } else {
        setIsSubmitted(true);
        localStorage.setItem('userAuthenticated', true)
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
          <input type="text" name="uname" required autoComplete="username" />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required autoComplete="current-password" />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  useEffect(() => {
    if (localStorage.getItem('userAuthenticated')) {
      navigate("/")
    }
  }, [])
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