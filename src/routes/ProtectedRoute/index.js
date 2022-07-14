import React from 'react';
import { Route,Navigate, Outlet  } from "react-router-dom";
import Layout from '../../pages/Layout';
import MainPage from '../../pages/MainPage';

import Home from "../../pages/Home";
import Questions from "../../pages/Questions";
import LoginSys from '../../pages/Login';
// import AppLayout from './../../layout/AppLayout';

const authenticateUser = () => {
  if ( !localStorage.getItem("userAuthenticated")) {
    return false;
  }
  return true;
}

function ProtectedRoutes( { component } ) {  
  if( !authenticateUser() ) {
     return <Navigate to='/'/>
  }

  return (
    <Layout>      
      <Outlet></Outlet>
    </Layout>
    
  )}

  export default ProtectedRoutes;