import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Concerts from './Concerts'
import Footer from './Footer'

function App () {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/concerts' component={Concerts} />
      </Switch>

      <Footer />
    </>
  )
}

export default App
