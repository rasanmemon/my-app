import { Outlet, Link } from "react-router-dom";


import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './layout.css'
import '../csspages/layoutstyle.css'
function Layout () {
  
  
  return (
    <>
      <nav class="w3-sidebar w3-light-grey w3-card-4 w3-animate-left" id="mySidebar" >
      <div class="w3-bar w3-dark-grey">
      <span class="w3-bar-item w3-padding-16">Content</span>
      
      </div>  
      <ul class="w3-bar-block">
          <li  >
            <Link class="w3-bar-item w3-button w3-green"  to="/Home" >Home</Link>
          </li>
          <li >
            <Link class="w3-bar-item w3-button " to="/Question">Question</Link>
          </li>
          <li >
            <Link class="w3-bar-item w3-button " to="/">LogOut</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;