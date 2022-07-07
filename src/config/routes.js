import LoginSys from "../pages/Login";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";

const routes = [
    {
      component: Home,
      title: 'Home',
      path: '/Home',
      exact: true,
      isProtected: true
    },
    {
        component: LoginSys,
        title: 'Login',
        path: '/',
        exact: true,
        isProtected: false
      },
      {
        component: Questions,
        title: 'Questions',
        path: '/Question',
        exact: true,
        isProtected: true
      }
      
  ];
  
  export default routes;