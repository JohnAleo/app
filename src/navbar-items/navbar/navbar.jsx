import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../home/style'

const NavbarComponent = () => {
  return (
    <Container> 
      <Link to={"/homes"}>
        <p style={{cursor:'pointer'}}>Home</p>
      </Link>
      <Link to={"/facilities"}>
        <p style={{cursor:'pointer'}}>Facilities</p>
      </Link>
      <Link to={"/rooms"}>
        <p style={{cursor:'pointer'}}>Rooms</p>
      </Link>
      <Link to={"/contacts"}>
        <p style={{cursor:'pointer'}}>Contact-us</p>
      </Link>
      </Container>
  )
}
    
export default NavbarComponent