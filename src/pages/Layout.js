import { Outlet, Link } from "react-router-dom";


import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './layout.css'
import '../csspages/layoutstyle.css'
import { useNavigate  } from "react-router-dom";

function Layout () {
  const navigate = useNavigate() // <-- hooks must be INSIDE the component

  const handleLogout = () => {
    localStorage.removeItem('userAuthenticated');
    navigate('/login')
  }
  
  return (
    <>
      <nav className="w3-sidebar w3-light-grey w3-card-4 w3-animate-left" id="mySidebar" >
      <div className="w3-bar w3-dark-grey">
      <span className="w3-bar-item w3-padding-16">Content</span>
      
      </div>  
      <ul className="w3-bar-block">
          <li  >
            <Link className="w3-bar-item w3-button w3-green"  to="/" >Home</Link>
          </li>
          <li >
            <Link className="w3-bar-item w3-button " to="/question">Question</Link>
          </li>
          <li >
            <button className="w3-bar-item w3-button" onClick={()=>{handleLogout();}}>LogOut</button>            
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;