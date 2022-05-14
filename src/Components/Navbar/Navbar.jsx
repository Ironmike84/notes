import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Navbar() {
  return (
    <div className='NavBar'>
      <div className='Title'>MJG - Cloud Computing </div>
      <Link to='/Setup'><Button className='btn-danger' variant='danger'>Setup</Button></Link>
      <Link to='/Services'><Button className='btn-danger' variant='danger'>Services</Button></Link>
      <Link to='/Code'><Button className='btn-danger' variant='danger'>Code</Button></Link>
    </div>
  )
}

export default Navbar;
