import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Concerts from './Concerts'
import AddConcert from './AddConcert'
// import Travels from './Travels'
import Footer from './Footer'

import { getAllConcerts } from '../actions/concerts'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllConcerts())
  })
  return (
    <>
      <Header />
      <div className='flex-wrapper'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/concerts' element={<Concerts />} />
          <Route exact path='/addconcert' element={<AddConcert />} />
          {/* <Route exact path='/travels' element={<Travels />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
