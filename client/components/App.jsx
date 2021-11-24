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
        <Route exact path='/' component={Home} />
        <Route exact path='/concerts' component={Concerts} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
