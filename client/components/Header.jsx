import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'><h1 className='header-title'>-- Reminisce --</h1></Link>
      <br/>
      <Nav />
    </header>
  )
}

export default Header
