import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'><h1>-- Reminisce --</h1></Link>
      <Nav />
    </header>
  )
}

export default Header
