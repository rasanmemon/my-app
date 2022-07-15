import React from 'react';
import {Navigate, Outlet  } from "react-router-dom";
import Layout from '../../pages/Layout';



const authenticateUser = () => {
  console.log(localStorage);
  if ( !localStorage.getItem("userAuthenticated")) {
    return false;
  }
  return true;
}

const ProtectedRoutes =( { component } ) =>{  
  console.log(localStorage);
  if( !authenticateUser() ) {
     return <Navigate to='/login'/>
  }

  return (
    <Layout>      
      {/* <Outlet></Outlet> */}
    </Layout>
    
  )}

  export default ProtectedRoutes;