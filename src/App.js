import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import LoginSys from './pages/Login';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Routering from "./config/routing"; 
// import MainRouter from './routes/MainRouter';
import {useEffect , useState} from "react"
import axios from "axios";
const  App=()=> {
  const message = "Connection Established With Backend"
  useEffect( () => {
    const conn = async() => {
    try {
        await axios.post("http://localhost:8080/start", {
        message
      })
      .then((responce) => console.log(responce.data))
    } catch (error) {
      console.error(error)
    }}
    conn()
  },[]);
  const [loading ,setLoading] = useState(false);
  
  const setTrue =()=>{
    
    setLoading(true);
    console.log("ex");
    
    
  }
  const setFalse =()=>{
    setLoading(false);
    console.log("Good");
    
    // loading=false;
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <BrowserRouter >
    //   <Routes>
    //     <Route path="/" element={<LoginSys />} />
    //     </Routes>
    //     </BrowserRouter>
    // <Router>
    //   <Layout />
    //   <Routes>
    //   <Route path="/Question" element={<Questions />} />
    //       {/* <Route path="*" element={<NoPage />} /> */}
    
    //       <Route path="/Login" element={<LoginSys />} />
    //       <Route path="/" element={<Home />}  />
    //   </Routes>
    // </Router>
  //  <MainPage />
  // <Router >
  //     <Routes>
  //       <Route element={<Layout />} >

  //         <Route path="/Question" element={<Questions />} />
  //         {/* <Route path="*" element={<NoPage />} /> */}
    
  //         <Route path="/Home" element={<Home />}  />
  //       </Route>
  //         <Route path="/" element={<LoginSys />} /> 
  //         </Routes>
  //   </Router>
  <div>
    {loading ? <Routering />: <LoginSys ex={setTrue} />}
  </div>
    // <Routering />
//<Layout />
  // <MainRouter></MainRouter>
  );
}

export default App;
