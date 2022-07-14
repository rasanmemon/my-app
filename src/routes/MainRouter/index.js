import React from "react";
import LoginSys from "../../pages/Login";
import Layout from '../../pages/Layout';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import routes from './../../config/routes'
import ProtectedRoutes from './../ProtectedRoute'

function MainRouter () {
  
  return (
    <Router>
      <Routes>
        {routes.map(({
          path,
          exact,
          component: component,
          isProtected,
          title
        }, index) => {
          if(isProtected){
                console.log(path);
                return <Route exact path={path} element={<ProtectedRoutes component={component}/>}>
                  <Route
                    path={path}
                    element={component}
                  />
                </Route>
              }
            else {
              return  <Route path={path} element={component}></Route>
            }
        })}
      </Routes>
  </Router>
)
}
export default MainRouter;