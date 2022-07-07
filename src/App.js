import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './pages/MainPage';
import LoginSys from './pages/Login';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import MainRouter from './routes/MainRouter';
function App() {
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
  <Router >
      <Routes>
        <Route element={<Layout />} >

          <Route path="/Question" element={<Questions />} />
          {/* <Route path="*" element={<NoPage />} /> */}
    
          <Route path="/Home" element={<Home />}  />
        </Route>
          <Route path="/" element={<LoginSys />} /> 
          </Routes>
    </Router>
  );
}

export default App;
