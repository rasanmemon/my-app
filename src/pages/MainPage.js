import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Questions from "./Questions";
import LoginSys from "./Login";
import App from "../App";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

function MainPage() {
  return (
    <BrowserRouter >
      <Routes>
        <Layout />
          <Route path="/Question" element={<Questions />} />
          {/* <Route path="*" element={<NoPage />} /> */}
    
          <Route path="/Home" element={<Home />}  />
      </Routes>
          <Route path="/" element={<LoginSys />} />
    </BrowserRouter>
  );
}
export default MainPage;