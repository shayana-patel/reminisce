import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='app-title'><h1>-- Reminisce --</h1></Link>
      <Link to='/concerts' className='concerts-nav-link'><h2>Concerts</h2></Link>
      <Link to='/travels' className='travels-nav-link'><h2>Travels</h2></Link>
    </nav>
  )
}

export default Nav
