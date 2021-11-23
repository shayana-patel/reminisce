import React from 'react'
import { Link } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom'

import Header from './Header'
// import Home from './Home'
// import Concerts from './Concerts'
import Footer from './Footer'

function App () {
  return (
    <>
      <Header />
      <Link to='/'>Go Home</Link><br/>
      <Link to='/concerts'>Concerts Page</Link>
      {/* <Routes>
        <section className="main">
          <Route exact path='/' element={<Home />} />
          <Route exact path='/concerts' element={<Concerts />} />
          {/* add your code here */}
      {/* </section> */}
      {/* </Routes> */}
      <Footer />
    </>
  )
}

export default App
