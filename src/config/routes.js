import LoginSys from "../pages/Login";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";

const routes = [
    {
      component: <LoginSys></LoginSys>,
      title: 'Login',
      path: '/',
      exact: true,
      isProtected: false
    },
    {
      component: <Home></Home>,
      title: 'Home',
      path: '/home',
      exact: true,
      isProtected: true
    },
    {
      component: <Questions></Questions>,
      title: 'Questions',
      path: '/question',
      exact: true,
      isProtected: true
    }      
  ];
  
  export default routes;