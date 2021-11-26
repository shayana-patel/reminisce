import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Concerts from './Concerts'
import Footer from './Footer'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/concerts' element={<Concerts />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
