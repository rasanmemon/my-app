import React from 'react';
import { Route, Redirect } from "react-router-dom";
import AppLayout from './../../layout/AppLayout';

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
    return <Redirect to='/'/>
  }
  return ( <div>
      <AppLayout>
        <Route path={path} exact={exact} component={Component} />
      </AppLayout>
      </div>
  )}
  export default ProtectedRoutes;