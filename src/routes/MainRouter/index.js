import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './../../config/routes'
import ProtectedRoute from './../ProtectedRoute'

function MainRouter () {
  return (
    <Router>
      <Switch>
        {routes.map(({
            path,
            exact,
            component: Component,
            isProtected,
            title
          }, index) => {
            if (isProtected) {
              return <ProtectedRoute
              component={Component}
              title={title}
              path={path}
              exact={exact}
              key={index}
              isProtected={isProtected}/>
          } else {
            return  <Route path={path} exact={exact} key={index} component={Component}/>
          }
      })}
    </Switch>
  </Router>
)
}
export default MainRouter;