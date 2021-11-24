import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to="/concerts"><h2>Concerts</h2></Link>
    </nav>
  )
}

export default Nav
