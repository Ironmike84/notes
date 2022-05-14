import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Navbar() {
  return (
    <div>
        <Button>Setup</Button>
      <Link to='/Services'><Button>Services</Button></Link>
      <Button>Selection</Button>
    </div>
  )
}

export default Navbar;
