import LoginSys from "../pages/Login";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";
import { BrowserRouter as Router ,Route, Routes, useNavigate ,Navigate ,Redirect } from "react-router-dom";
const Routering= () =>{
   
    return (
        
       <Router>
        {/* <Layout /> */}
      <Routes>
          {/* <Route path="/Login"  element={<LoginSys ex={props.ex} />}  /> */}
        
            <Route element={<Layout />} >

          <Route path="/Question" element={<Questions />} />
          {/* <Route path="*" element={<NoPage />} /> */}
    
          <Route path="/Home" element={<Home />}  />
          <Route path="/" element={<Home />} /> 
            </Route>
        </Routes>
     
    </Router>
    
    )
};
  
  export default Routering;