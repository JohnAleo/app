import {Routes,Route } from 'react-router-dom'
import NavbarComponent from './navbar-items/navbar/navbar'
import Facilities from './navbar-items/facilities/facilities'
import Rooms from './navbar-items/rooms/rooms'
import Home from './navbar-items/home/home'
import Contact from './navbar-items/contact-us/contact'

const RouteComponents = () => {
  return (
    <div>
        <NavbarComponent/>  
        <Routes>
            <Route path="/homes" element={<Home   />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/rooms" element={<Rooms  />} />
            <Route path="/contacts" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default RouteComponents