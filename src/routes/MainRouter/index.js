import React from "react";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import routes from './../../config/routes'
import ProtectedRoutes from './../ProtectedRoute'
function MainRouter () {
  return (
    <Router>
      <Routes>        
      {
        routes.map(({
          path,
          exact,
          component: component,
          isProtected,
          title
        }, index) => {                  
          if(isProtected){
            return (
              <Route key={index} exact path="/" element={<ProtectedRoutes component={component}/>}>
                  <Route
                    path={path}
                    element={component}
                    />
                </Route>
              )
              }
            else {
              return  <Route key={index} path={path} element={component}></Route>
            }
        })}
      </Routes>
  </Router>
)
}
export default MainRouter;