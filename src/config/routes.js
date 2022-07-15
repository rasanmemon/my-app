import LoginSys from "../pages/Login";
import Home from "../pages/Home";
import Questions from "../pages/Questions";

const routes = [
  {
    component: <LoginSys></LoginSys>,
    title: 'Login',
    path: '/login',
    exact: true,
    isProtected: false
  },
  {
    component: <Home></Home>,
    title: 'Home',
    path: '/',
    exact: true,
    isProtected: true
  },
  {
    component: <Questions></Questions>,
    title: 'Questions',
    path: '/question',
    exact: true,
    isProtected: true
  },      
  ];
  
  export default routes;