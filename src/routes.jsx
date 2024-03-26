import {Routes,Route, useLocation } from 'react-router-dom'
import NavbarComponent from './navbar-items/navbar/navbar'
import Facilities from './navbar-items/facilities/facilities'
import Rooms from './navbar-items/rooms/rooms'
import Home from './navbar-items/home/home'
import Contact from './navbar-items/contact-us/contact'
import LoginComponent from './navbar-items/login/login'
import Notfound from './navbar-items/404/notfound'

const RouteComponents = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/login";
  return (
    <div>
      {showNavbar && <NavbarComponent/>}
         
        <Routes>
            <Route path="*" element={<Notfound />} />
            <Route path="/login" element={<LoginComponent />}/>
            <Route path="/homes" element={<Home   />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/rooms" element={<Rooms  />} />
            <Route path="/contacts" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default RouteComponents