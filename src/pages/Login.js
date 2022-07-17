import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import { Navigate,useNavigate  } from "react-router-dom";

function LoginSys() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()
  let [data,setData]=useState([]);

  const getData = async (userName, passWord) => {
    // let data = [{}]
    await axios.get(`http://localhost:8080/users?userName=${userName}&passWord=${passWord}`
    )
      .then((res) => {
        data = res.data
        // console.log(res.dat)

      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  }

  const errors = {
    msg: "invalid username and password",
    
  };

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    let userData = await getData(uname.value, pass.value)
    console.log(userData)
    

    // Compare user info
    if (userData.length>0) {
     
        setIsSubmitted(true);
        localStorage.setItem('userAuthenticated', true)
      }
     else {
      // Item not found
      setErrorMessages({ name: "error", message: errors.msg });
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
        <div className="app">
        <div className="login-form">
        <div className="title">Sign In</div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required  />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("error")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        </div>
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
       
        {isSubmitted ? <Navigate replace to="/"></Navigate> : renderForm}
      </div>
    </div>
  );
}
export default LoginSys;