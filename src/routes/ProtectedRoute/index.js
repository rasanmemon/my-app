import React from 'react';
import { Route,BrowserRouter as Router,Routes, Redirect,Navigate } from "react-router-dom";
import Layout from '../../pages/Layout';
import MainPage from '../../pages/MainPage';

import Home from "../../pages/Home";
import Questions from "../../pages/Questions";
import LoginSys from '../../pages/Login';
// import AppLayout from './../../layout/AppLayout';

const authenticateUser = () => {
//   if ( localStorage.getItem("user") === null ) {
//     return false;
//   }
  return true;
}

function ProtectedRoutes( {
  component : Component,
  path,
  exact
} ) {
  if( !authenticateUser() ) {
     return <Navigate to='/'/>
    
  }
  return (
    
     <div>
      <Layout>
      
      <Route path={path} exact={exact} component={Component} />
      </Layout>
    
      {/* <AppLayout>
      </AppLayout> */}
      </div>
      
  )}
  export default ProtectedRoutes;