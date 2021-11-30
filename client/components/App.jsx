import React, { useEffect, useEffeect }from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Concerts from './Concerts'
// import Travels from './Travels'
import Footer from './Footer'

import { getConcerts } from '../actions/concerts'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConcerts())
  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/concerts' element={<Concerts />} />
        {/* <Route exact path='/travels' element={<Travels />} /> */}
      </Routes>

      <Footer />
    </>
  )
}

export default App
